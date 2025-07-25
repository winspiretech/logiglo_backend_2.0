const prisma = require('../models/prismaClient');
const { ApiError } = require('../utils/ApiError');
const { ApiResponse } = require('../utils/ApiResponse');
const dayjs = require('dayjs');
const isoWeek = require('dayjs/plugin/isoWeek');
const weekOfYear = require('dayjs/plugin/weekOfYear');
const advancedFormat = require('dayjs/plugin/advancedFormat');
const { BetaAnalyticsDataClient } = require('@google-analytics/data');

const decoded = Buffer.from(
  process.env.GOOGLE_SERVICE_KEY_BASE64,
  'base64',
).toString('utf-8');
const credentials = JSON.parse(decoded);

const GA4_PROPERTY_ID = '497722859';
const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials,
  scopes: ['https://www.googleapis.com/auth/analytics.readonly'],
});

dayjs.extend(isoWeek);
dayjs.extend(weekOfYear);
dayjs.extend(advancedFormat);

const getNewUsersInDefinedTime = async (req, res) => {
  try {
    const { filter = 'daily', count = 7 } = req.query;

    if (!['daily', 'weekly', 'monthly', 'yearly'].includes(filter)) {
      throw new ApiError(
        400,
        'Invalid filter',
        "Filter must be 'daily', 'weekly', 'monthly', or 'yearly'",
      );
    }

    const units = parseInt(count);
    if (isNaN(units) || units < 1 || units > 100) {
      throw new ApiError(
        400,
        'Invalid count',
        'Count must be a number between 1 and 100',
      );
    }

    const now = dayjs();
    let rangeStart;
    let format;
    let getLabel;

    switch (filter) {
      case 'daily':
        format = 'YYYY-MM-DD';
        rangeStart = now.subtract(units - 1, 'day');
        getLabel = (d) => d.format(format);
        break;
      case 'weekly':
        format = 'IYYY-"W"IW'; // ISO Year and Week (PostgreSQL)
        rangeStart = now.subtract(units - 1, 'week');
        getLabel = (d) =>
          `${d.isoWeekYear()}-W${String(d.isoWeek()).padStart(2, '0')}`;
        break;
      case 'monthly':
        format = 'YYYY-MM';
        rangeStart = now.subtract(units - 1, 'month');
        getLabel = (d) => d.format(format);
        break;
      case 'yearly':
        format = 'YYYY';
        rangeStart = now.subtract(units - 1, 'year');
        getLabel = (d) => d.format(format);
        break;
    }

    // Query PostgreSQL using TO_CHAR
    const results = await prisma.$queryRawUnsafe(`
      SELECT TO_CHAR("createdAt", '${format}') AS period, COUNT(*) AS count
      FROM "User"
      WHERE "createdAt" BETWEEN '${rangeStart.toISOString()}' AND '${now.toISOString()}'
      GROUP BY period
      ORDER BY period;
    `);

    const resultMap = new Map();
    results.forEach((row) => {
      resultMap.set(row.period, Number(row.count));
    });

    const fullPeriods = Array.from({ length: units }, (_, i) =>
      getLabel(
        rangeStart.add(
          i,
          filter === 'daily'
            ? 'day'
            : filter === 'weekly'
              ? 'week'
              : filter === 'monthly'
                ? 'month'
                : 'year',
        ),
      ),
    );

    const finalData = fullPeriods.map((period) => ({
      period,
      count: resultMap.get(period) || 0,
    }));

    const totalUsersInRange = finalData.reduce(
      (acc, curr) => acc + curr.count,
      0,
    );

    const response = new ApiResponse(
      200,
      {
        filter,
        numberOfFetchedData: units,
        totalUsers: totalUsersInRange,
        rangeStart: rangeStart.toDate(),
        rangeEnd: now.toDate(),
        data: finalData,
      },
      'User registration analytics retrieved successfully',
    );

    return res.status(200).json(response);
  } catch (error) {
    console.error('User analytics error:', error);
    return res
      .status(error instanceof ApiError ? error.statusCode : 500)
      .json(
        error instanceof ApiError
          ? error
          : new ApiError(500, 'Internal Server Error', error.message || null),
      );
  }
};

const getTotalUsersOverTime = async (req, res) => {
  try {
    const { filter = 'daily', count = 7, date } = req.query;

    if (!['daily', 'weekly', 'monthly', 'yearly'].includes(filter)) {
      throw new ApiError(
        400,
        'Invalid filter',
        "Filter must be 'daily', 'weekly', 'monthly', or 'yearly'",
      );
    }

    const units = parseInt(count);
    if (isNaN(units) || units < 1 || units > 100) {
      throw new ApiError(
        400,
        'Invalid count',
        'Count must be a number between 1 and 100',
      );
    }

    const anchorDate = date ? dayjs(date) : dayjs();
    let rangeStart;
    let format;
    let getLabel;
    let addUnit;
    let getPeriodEnd;

    switch (filter) {
      case 'daily':
        format = 'YYYY-MM-DD';
        rangeStart = anchorDate.subtract(units - 1, 'day');
        getLabel = (d) => d.format(format);
        addUnit = 'day';
        getPeriodEnd = (d) => d.endOf('day');
        break;
      case 'weekly':
        format = 'IYYY-"W"IW';
        rangeStart = anchorDate.subtract(units - 1, 'week');
        getLabel = (d) =>
          `${d.isoWeekYear()}-W${String(d.isoWeek()).padStart(2, '0')}`;
        addUnit = 'week';
        getPeriodEnd = (d) => d.endOf('week');
        break;
      case 'monthly':
        format = 'YYYY-MM';
        rangeStart = anchorDate.subtract(units - 1, 'month');
        getLabel = (d) => d.format(format);
        addUnit = 'month';
        getPeriodEnd = (d) => d.endOf('month');
        break;
      case 'yearly':
        format = 'YYYY';
        rangeStart = anchorDate.subtract(units - 1, 'year');
        getLabel = (d) => d.format(format);
        addUnit = 'year';
        getPeriodEnd = (d) => d.endOf('year');
        break;
    }

    const allPeriods = Array.from({ length: units }, (_, i) => {
      const date = rangeStart.add(i, addUnit);
      return {
        period: getLabel(date),
        endDate: getPeriodEnd(date).toISOString(),
      };
    });

    const allUsers = await prisma.user.findMany({
      select: { createdAt: true },
    });

    const data = allPeriods.map(({ period, endDate }) => {
      const userCount = allUsers.filter(
        (user) => user.createdAt <= new Date(endDate),
      ).length;
      return { period, count: userCount };
    });

    const response = new ApiResponse(
      200,
      {
        filter,
        numberOfFetchedData: units,
        anchorDate: anchorDate.toISOString(),
        rangeStart: rangeStart.toISOString(),
        rangeEnd: anchorDate.toISOString(),
        data,
      },
      'Cumulative user totals retrieved successfully',
    );

    return res.status(200).json(response);
  } catch (error) {
    console.error('User total analytics error:', error);
    return res
      .status(error instanceof ApiError ? error.statusCode : 500)
      .json(
        error instanceof ApiError
          ? error
          : new ApiError(500, 'Internal Server Error', error.message || null),
      );
  }
};

const trackDailyActivity = async (req, res) => {
  try {
    const userId = req.user.id;
    const { sectionId = null, timeSpentMs = 0 } = req.body;

    if (!userId) {
      return res
        .status(401)
        .json({ message: 'Unauthorized: No user ID found' });
    }

    const today = dayjs().startOf('day').toDate();

    await prisma.userSectionTime.upsert({
      where: {
        userId_sectionId_date: {
          userId,
          sectionId,
          date: today,
        },
      },
      update: {
        timeSpentMs: {
          increment: timeSpentMs,
        },
        lastSeen: new Date(),
      },
      create: {
        userId,
        sectionId,
        date: today,
        timeSpentMs,
        lastSeen: new Date(),
      },
    });

    return res.status(200).json({ message: 'Activity tracked successfully' });
  } catch (error) {
    console.error('User total analytics error:', error);
    return res
      .status(error instanceof ApiError ? error.statusCode : 500)
      .json(
        error instanceof ApiError
          ? error
          : new ApiError(500, 'Internal Server Error', error.message || null),
      );
  }
};

const getOnlineUsersOverTime = async (req, res) => {
  try {
    const { filter = 'daily', count = 7 } = req.query;

    if (!['daily', 'weekly', 'monthly', 'yearly'].includes(filter)) {
      throw new ApiError(
        400,
        'Invalid filter',
        "Filter must be 'daily', 'weekly', 'monthly', or 'yearly'",
      );
    }

    const units = parseInt(count);
    if (isNaN(units) || units < 1 || units > 100) {
      throw new ApiError(
        400,
        'Invalid count',
        'Count must be a number between 1 and 100',
      );
    }

    const now = dayjs();
    let rangeStart;
    let format;
    let getLabel;

    switch (filter) {
      case 'daily':
        format = 'YYYY-MM-DD';
        rangeStart = now.subtract(units - 1, 'day');
        getLabel = (d) => d.format(format);
        break;
      case 'weekly':
        format = 'IYYY-"W"IW';
        rangeStart = now.subtract(units - 1, 'week');
        getLabel = (d) =>
          `${d.isoWeekYear()}-W${String(d.isoWeek()).padStart(2, '0')}`;
        break;
      case 'monthly':
        format = 'YYYY-MM';
        rangeStart = now.subtract(units - 1, 'month');
        getLabel = (d) => d.format(format);
        break;
      case 'yearly':
        format = 'YYYY';
        rangeStart = now.subtract(units - 1, 'year');
        getLabel = (d) => d.format(format);
        break;
    }

    const results = await prisma.$queryRawUnsafe(`
      SELECT TO_CHAR("date", '${format}') AS period, COUNT(DISTINCT "userId") AS count
      FROM "UserSectionTime"
      WHERE "date" BETWEEN '${rangeStart.toISOString()}' AND '${now.toISOString()}'
      GROUP BY period
      ORDER BY period;
    `);

    const resultMap = new Map();
    results.forEach((row) => resultMap.set(row.period, Number(row.count)));

    const fullPeriods = Array.from({ length: units }, (_, i) =>
      getLabel(
        rangeStart.add(
          i,
          filter === 'daily'
            ? 'day'
            : filter === 'weekly'
              ? 'week'
              : filter === 'monthly'
                ? 'month'
                : 'year',
        ),
      ),
    );

    const finalData = fullPeriods.map((period) => ({
      period,
      count: resultMap.get(period) || 0,
    }));

    const totalUsers = finalData.reduce((acc, curr) => acc + curr.count, 0);

    return res.status(200).json(
      new ApiResponse(
        200,
        {
          filter,
          numberOfFetchedData: units,
          totalUsers,
          rangeStart: rangeStart.toDate(),
          rangeEnd: now.toDate(),
          data: finalData,
        },
        'Online user activity retrieved successfully',
      ),
    );
  } catch (error) {
    console.error('Online user activity error:', error);
    return res
      .status(error instanceof ApiError ? error.statusCode : 500)
      .json(
        error instanceof ApiError
          ? error
          : new ApiError(500, 'Internal Server Error', error.message || null),
      );
  }
};

const getUsersFromEachCountry = async (req, res) => {
  try {
    const countryWiseUsersCountRaw = await prisma.user.groupBy({
      by: ['country'],
      _count: {
        id: true,
      },
    });

    const countryWiseUsersCount = countryWiseUsersCountRaw.map((entry) => ({
      country: entry.country,
      count: entry._count.id,
    }));

    if (!countryWiseUsersCount) {
      throw new ApiError(
        500,
        'Error while fetching country wise users data',
        'Internal server error',
      );
    }

    res
      .status(201)
      .json(
        new ApiResponse(
          201,
          countryWiseUsersCount,
          'Country wise users count fetched successfully',
        ),
      );
  } catch (error) {
    console.error('Online user activity error:', error);
    return res
      .status(error instanceof ApiError ? error.statusCode : 500)
      .json(
        error instanceof ApiError
          ? error
          : new ApiError(500, 'Internal Server Error', error.message || null),
      );
  }
};

const getRealtimeUserSummary = async (req, res) => {
  try {
    const [response] = await analyticsDataClient.runRealtimeReport({
      property: `properties/${GA4_PROPERTY_ID}`,
      metrics: [{ name: 'activeUsers' }],
      dimensions: [{ name: 'customUser:user_type' }],
    });

    const breakdown = (response.rows || []).map((row) => ({
      userType: row.dimensionValues?.[0]?.value || 'unknown',
      activeUsers: parseInt(row.metricValues?.[0]?.value || '0'),
    }));

    const total = breakdown.reduce((sum, r) => sum + r.activeUsers, 0);

    res.json({ total, breakdown });
  } catch (err) {
    console.error('GA4 Realtime Error:', err);
    res.status(500).json({ message: 'Failed to fetch realtime data' });
  }
};

const getTopBlogsAndEvents = async (req, res) => {
  try {
    // === Top Blogs ===
    const [blogsResponse] = await analyticsDataClient.runReport({
      property: `properties/${GA4_PROPERTY_ID}`,
      dateRanges: [{ startDate: '2020-01-01', endDate: 'today' }],
      dimensions: [
        { name: 'customEvent:blog_id' },
        { name: 'customEvent:blog_title' },
      ],
      metrics: [{ name: 'eventCount' }],
      dimensionFilter: {
        filter: {
          fieldName: 'eventName',
          stringFilter: {
            value: 'view_blog',
            matchType: 'EXACT',
          },
        },
      },
      orderBys: [
        {
          metric: { metricName: 'eventCount' },
          desc: true,
        },
      ],
      limit: 20,
    });

    const topBlogs = (blogsResponse.rows || []).map((row) => ({
      id: row.dimensionValues?.[0]?.value,
      title: row.dimensionValues?.[1]?.value,
      views: parseInt(row.metricValues?.[0]?.value || '0'),
    }));

    // === Top Events ===
    const [eventsResponse] = await analyticsDataClient.runReport({
      property: `properties/${GA4_PROPERTY_ID}`,
      dateRanges: [{ startDate: '2020-01-01', endDate: 'today' }],
      dimensions: [
        { name: 'customEvent:event_id' },
        { name: 'customEvent:event_title' },
      ],
      metrics: [{ name: 'eventCount' }],
      dimensionFilter: {
        filter: {
          fieldName: 'eventName',
          stringFilter: {
            value: 'view_event',
            matchType: 'EXACT',
          },
        },
      },
      orderBys: [
        {
          metric: { metricName: 'eventCount' },
          desc: true,
        },
      ],
      limit: 20,
    });

    const topEvents = (eventsResponse.rows || []).map((row) => ({
      id: row.dimensionValues?.[0]?.value,
      title: row.dimensionValues?.[1]?.value,
      views: parseInt(row.metricValues?.[0]?.value || '0'),
    }));

    res.json({ topBlogs, topEvents });
  } catch (err) {
    console.error(' GA4 Top Content Error:', err);
    res.status(500).json({ message: 'Failed to fetch top blogs/events' });
  }
};

const getAllTopModulesByPageView = async (req, res) => {
  try {
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${GA4_PROPERTY_ID}`,
      dimensions: [{ name: 'pagePath' }],
      metrics: [{ name: 'screenPageViews' }],
      dateRanges: [{ startDate: '2020-01-01', endDate: 'today' }],
      limit: 1000,
      orderBys: [
        {
          metric: { metricName: 'screenPageViews' },
          desc: true,
        },
      ],
    });

    const rows = response.rows || [];

    const moduleViewCounts = {};

    for (const row of rows) {
      const path = row.dimensionValues?.[0]?.value || '';
      const views = parseInt(row.metricValues?.[0]?.value || '0');

      const match = path.match(/^\/([^/?#]+)/); // Get first path segment
      const module = match ? match[1] : 'unknown';

      moduleViewCounts[module] = (moduleViewCounts[module] || 0) + views;
    }

    res.json({ topModules: moduleViewCounts });
  } catch (err) {
    console.error('GA4 Top Modules Error:', err);
    res.status(500).json({ message: 'Failed to fetch top module views' });
  }
};

module.exports = {
  getNewUsersInDefinedTime,
  getTotalUsersOverTime,
  trackDailyActivity,
  getOnlineUsersOverTime,
  getUsersFromEachCountry,
  getRealtimeUserSummary,
  getTopBlogsAndEvents,
  getAllTopModulesByPageView,
};
