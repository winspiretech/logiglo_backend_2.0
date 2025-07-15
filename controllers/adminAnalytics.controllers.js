const prisma = require('../models/prismaClient');
const { ApiError } = require('../utils/ApiError');
const { ApiResponse } = require('../utils/ApiResponse');
const dayjs = require('dayjs');
const isoWeek = require('dayjs/plugin/isoWeek');
const weekOfYear = require('dayjs/plugin/weekOfYear');

dayjs.extend(isoWeek);
dayjs.extend(weekOfYear);

const getNewUsersInDefinedTime = async (req, res) => {
  try {
    const { filter = "daily", count = 7 } = req.query;

    if (!["daily", "weekly", "monthly", "yearly"].includes(filter)) {
      throw new ApiError(400, "Invalid filter", "Filter must be 'daily', 'weekly', 'monthly', or 'yearly'");
    }

    const units = parseInt(count);
    if (isNaN(units) || units < 1 || units > 100) {
      throw new ApiError(400, "Invalid count", "Count must be a number between 1 and 100");
    }

    const now = dayjs();
    let rangeStart;
    let format;
    let getLabel;

    switch (filter) {
      case "daily":
        format = 'YYYY-MM-DD';
        rangeStart = now.subtract(units - 1, 'day');
        getLabel = d => d.format(format);
        break;
      case "weekly":
        format = 'IYYY-"W"IW'; // ISO Year and Week (PostgreSQL)
        rangeStart = now.subtract(units - 1, 'week');
        getLabel = d => `${d.isoWeekYear()}-W${String(d.isoWeek()).padStart(2, '0')}`;
        break;
      case "monthly":
        format = 'YYYY-MM';
        rangeStart = now.subtract(units - 1, 'month');
        getLabel = d => d.format(format);
        break;
      case "yearly":
        format = 'YYYY';
        rangeStart = now.subtract(units - 1, 'year');
        getLabel = d => d.format(format);
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
    results.forEach(row => {
      resultMap.set(row.period, Number(row.count));
    });

    const fullPeriods = Array.from({ length: units }, (_, i) =>
      getLabel(rangeStart.add(i, filter === 'daily' ? 'day' : filter === 'weekly' ? 'week' : filter === 'monthly' ? 'month' : 'year'))
    );

    const finalData = fullPeriods.map(period => ({
      period,
      count: resultMap.get(period) || 0,
    }));

    const totalUsersInRange = finalData.reduce((acc, curr) => acc + curr.count, 0);

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
      "User registration analytics retrieved successfully"
    );

    return res.status(200).json(response);

  } catch (error) {
    console.error("User analytics error:", error);
    return res.status(error instanceof ApiError ? error.statusCode : 500).json(
      error instanceof ApiError
        ? error
        : new ApiError(500, "Internal Server Error", error.message || null)
    );
  }
};

module.exports = { getNewUsersInDefinedTime };