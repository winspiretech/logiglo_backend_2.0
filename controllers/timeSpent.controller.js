const prisma = require('../models/prismaClient');
const { ApiError } = require('../utils/ApiError');
const { ApiResponse } = require('../utils/ApiResponse');

const upsertAdTimeSpent = async (req, res) => {
  try {
    const { sectionName, adId, timeSpentMs } = req.body;
    const { id: userId } = req.loggedInUser;

    if (!sectionName || !adId || !timeSpentMs) {
      throw new ApiError(
        400,
        'Missing required fields',
        'sectionName, adId, and timeSpentMs are required',
      );
    }

    const section = await prisma.section.findUnique({
      where: { name: sectionName },
    });
    if (!section) {
      throw new ApiError(400, 'Invalid section', 'No section with that name');
    }

    const date = new Date();
    date.setUTCHours(0, 0, 0, 0);

    const timeSpent = await prisma.userSectionTime.upsert({
      where: {
        userId_sectionId_date_adId: {
          userId,
          sectionId: section.id,
          date,
          adId,
        },
      },
      update: {
        timeSpentMs: { increment: timeSpentMs },
      },
      create: {
        userId,
        sectionId: section.id,
        adId,
        date,
        timeSpentMs,
      },
    });

    res
      .status(200)
      .json(new ApiResponse(200, timeSpent, 'Time spent tracked successfully'));
  } catch (error) {
    if (error instanceof ApiError) {
      return res.status(error.statusCode).json(error);
    } else {
      return res
        .status(500)
        .json(
          new ApiError(500, 'Internal server error', error.message || null),
        );
    }
  }
};

const getUserTimeSpentOnSection = async (req, res) => {
  try {
    const { sectionName } = req.params;
    const { id: userId } = req.loggedInUser;

    const section = await prisma.section.findUnique({
      where: { name: sectionName },
    });
    if (!section) throw new ApiError(400, 'Invalid section');

    const result = await prisma.userSectionTime.groupBy({
      by: ['userId'],
      where: {
        sectionId: section.id,
      },
      _sum: {
        timeSpentMs: true,
      },
    });

    res
      .status(200)
      .json(new ApiResponse(200, result, 'User time spent in section'));
  } catch (error) {
    if (error instanceof ApiError) {
      return res.status(error.statusCode).json(error);
    } else {
      return res
        .status(500)
        .json(
          new ApiError(500, 'Internal server error', error.message || null),
        );
    }
  }
};

const getTotalTimeSpentOnSection = async (req, res) => {
  try {
    const { sectionName } = req.params;

    const section = await prisma.section.findUnique({
      where: { name: sectionName },
    });
    if (!section) throw new ApiError(400, 'Invalid section');

    const result = await prisma.userSectionTime.aggregate({
      where: {
        sectionId: section.id,
      },
      _sum: {
        timeSpentMs: true,
      },
    });

    res
      .status(200)
      .json(
        new ApiResponse(
          200,
          result._sum,
          `Total time spent in ${section.name} section by all users`,
        ),
      );
  } catch (error) {
    if (error instanceof ApiError) {
      return res.status(error.statusCode).json(error);
    } else {
      return res
        .status(500)
        .json(
          new ApiError(500, 'Internal server error', error.message || null),
        );
    }
  }
};

const getTimeSpentOnEachAd = async (req, res) => {
  try {
    const { adId } = req.params;

    if (!adId) {
      throw new ApiError(400, 'Missing required fields', 'adId is required');
    }

    const grouped = await prisma.userSectionTime.groupBy({
      by: ['sectionId'],
      where: {
        adId,
      },
      _sum: {
        timeSpentMs: true,
      },
    });

    const sectionIds = grouped.map((item) => item.sectionId);
    const sections = await prisma.section.findMany({
      where: {
        id: { in: sectionIds },
      },
      select: {
        id: true,
        name: true,
      },
    });

    const sectionMap = Object.fromEntries(
      sections.map((sec) => [sec.id, sec.name]),
    );

    const result = grouped.map((item) => ({
      sectionName: sectionMap[item.sectionId] || null,
      timeSpentMs: item._sum.timeSpentMs,
    }));

    res
      .status(200)
      .json(
        new ApiResponse(200, result, 'Time spent on each section for this ad'),
      );
  } catch (error) {
    if (error instanceof ApiError) {
      return res.status(error.statusCode).json(error);
    } else {
      return res
        .status(500)
        .json(
          new ApiError(500, 'Internal server error', error.message || null),
        );
    }
  }
};

const getTimeSpentOnEachAdByUser = async (req, res) => {
  try {
    const { adId } = req.params;

    const { id: userId } = req.loggedInUser;

    if (!adId) {
      throw new ApiError(400, 'Missing required fields', 'adId is required');
    }

    const grouped = await prisma.userSectionTime.groupBy({
      by: ['sectionId'],
      where: {
        adId,
        userId: userId,
      },
      _sum: {
        timeSpentMs: true,
      },
    });

    const sectionIds = grouped.map((item) => item.sectionId);
    const sections = await prisma.section.findMany({
      where: {
        id: { in: sectionIds },
      },
      select: {
        id: true,
        name: true,
      },
    });

    const sectionMap = Object.fromEntries(
      sections.map((sec) => [sec.id, sec.name]),
    );

    const result = grouped.map((item) => ({
      sectionName: sectionMap[item.sectionId] || null,
      timeSpentMs: item._sum.timeSpentMs,
    }));

    res
      .status(200)
      .json(
        new ApiResponse(200, result, 'Time spent on each section for this ad'),
      );
  } catch (error) {
    if (error instanceof ApiError) {
      return res.status(error.statusCode).json(error);
    } else {
      return res
        .status(500)
        .json(
          new ApiError(500, 'Internal server error', error.message || null),
        );
    }
  }
};

module.exports = {
  upsertAdTimeSpent,
  getUserTimeSpentOnSection,
  getTotalTimeSpentOnSection,
  getTimeSpentOnEachAd,
  getTimeSpentOnEachAdByUser,
};
