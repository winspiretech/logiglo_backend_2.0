const AdSchema = require('../validation/ad.validation.js');
const prisma = require('../models/prismaClient');
const { ApiError } = require('../utils/ApiError');
const { ApiResponse } = require('../utils/ApiResponse');

const getAdAnalytics = async (req, res) => {
  try {
    const { adId } = req.params;
    const { period = 'monthly' } = req.query;

    if (!adId) {
      throw new ApiError(404, 'Ad ID is required', 'Missing ad ID');
    }

    let formatDate;
    if (period === 'weekly') {
      formatDate = `IYYY-"W"IW`;
    } else if (period === 'monthly') {
      formatDate = 'YYYY-MM';
    } else if (period === 'yearly') {
      formatDate = 'YYYY';
    } else {
      throw new ApiError(
        400,
        'Invalid period',
        "Must be 'weekly', 'monthly', or 'yearly'",
      );
    }

    const retrievedData = await prisma.$queryRawUnsafe(
      `
        SELECT 
          to_char(date, '${formatDate}') AS label,
          SUM(impressions)::int AS total_${period}_impressions,
          SUM(clicks)::int AS total_${period}_clicks
        FROM "AdStat"
        WHERE "adId" = $1
        GROUP BY label
        ORDER BY label
      `,
      adId,
    );

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          retrievedData,
          `${period} data fetched successfully`,
        ),
      );
  } catch (error) {
    return res
      .status(error instanceof ApiError ? error.statusCode : 500)
      .json(
        error instanceof ApiError
          ? error
          : new ApiError(500, 'Internal Server Error', error.message || null),
      );
  }
};

const createDailyAdStatAnalytics = async (req, res) => {
  try {
    const today = new Date();
    today.setUTCHours(0, 0, 0, 0);
    today.setUTCDate(today.getUTCDate() - 40);

    const { adId, section } = req.params;

    const { changable } = req.query;

    if (!adId) throw new ApiError(404, 'Ad ID is required', 'Missing ad ID');
    if (!section)
      throw new ApiError(404, 'Section is required', 'Missing section');

    if (!['impression', 'click'].includes(changable)) {
      throw new ApiError(
        400,
        'Invalid changable value',
        "Must be 'impression' or 'click'",
      );
    }

    // const sectionData = await prisma.section.findUnique({
    //     where : {
    //         names : section
    //     }
    // });

    const sections = await prisma.section.findMany({});

    const allSections = sections.map((s) => s.name);

    const isContaining = allSections.includes(section);

    if (!isContaining) {
      throw new ApiError(404, `Use sections as ${[...allSections]}`);
    }

    const dataId = sections.filter((s) => s.name === section)[0].id;

    const data = {
      impressions: changable === 'impression' ? { increment: 1 } : undefined,
      clicks: changable === 'click' ? { increment: 1 } : undefined,
    };

    const adWithSections = await prisma.ad.findUnique({
      where: { id: adId },
      include: { sections: true },
    });

    const isSectionLinked = adWithSections?.sections?.some(
      (s) => s.id === dataId,
    );
    if (!isSectionLinked) {
      throw new ApiError(
        400,
        'Section not assigned to ad',
        'Invalid section for this ad',
      );
    }

    await prisma.ad.update({
      where: { id: adId },
      data,
    });

    await prisma.adStat.upsert({
      where: {
        adId_date_sectionId: {
          adId,
          date: today,
          sectionId: dataId,
        },
      },
      update: data,
      create: {
        adId,
        sectionId: dataId,
        date: today,
        impressions: changable === 'impression' ? 1 : 0,
        clicks: changable === 'click' ? 1 : 0,
      },
    });

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          `${changable} incremented`,
          `Ad ${changable} updated successfully`,
        ),
      );
  } catch (error) {
    return res
      .status(error instanceof ApiError ? error.statusCode : 500)
      .json(
        error instanceof ApiError
          ? error
          : new ApiError(500, 'Internal Server Error', error.message || null),
      );
  }
};

const createAd = async (req, res) => {
  try {
    const { bannerImage = null, boxImage = null } = req.body;
    if (!bannerImage && !boxImage) {
      throw new ApiError(
        400,
        'Please upload any one image, Banner or Box image',
        'Add Banner or Box image',
      );
    }
    const validation = AdSchema.safeParse(req.body);
    if (!validation.success) {
      throw new ApiError(400, 'Ad validation failed', validation.error.errors);
    }

    const { sections, ...adData } = validation.data;

    const newAd = await prisma.ad.create({
      data: {
        ...adData,
        sections: {
          connect: sections.map((id) => ({ id })),
        },
      },
      include: {
        sections: true,
      },
    });

    return res
      .status(201)
      .json(new ApiResponse(201, newAd, 'Ad created successfully'));
  } catch (error) {
    return res
      .status(error instanceof ApiError ? error.statusCode : 500)
      .json(
        error instanceof ApiError
          ? error
          : new ApiError(500, 'Internal Server Error', error.message || null),
      );
  }
};

const getAllAds = async (req, res) => {
  try {
    const ads = await prisma.ad.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return res
      .status(200)
      .json(new ApiResponse(200, ads, 'All ads fetched successfully'));
  } catch (error) {
    return res
      .status(error instanceof ApiError ? error.statusCode : 500)
      .json(
        error instanceof ApiError
          ? error
          : new ApiError(500, 'Internal Server Error', error.message || null),
      );
  }
};

const getAdBySection = async (req, res) => {
  try {
    const { section } = req.params;
    if (!section) {
      throw new ApiError(404, 'Section is required', 'Missing section');
    }
    const ads = await prisma.ad.findMany({
      where: {
        sections: {
          some: {
            section: {
              in: [section, 'all'],
            },
          },
        },
        status: 'ACTIVE',
        startDate: {
          lte: new Date(),
        },
        endDate: {
          gte: new Date(),
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    if (!ads.length) {
      throw new ApiError(500, 'Internal server error', 'No ads available');
    }
    return res
      .status(200)
      .json(new ApiResponse(200, ads, 'Ads fetched successfully'));
  } catch (error) {
    return res
      .status(error instanceof ApiError ? error.statusCode : 500)
      .json(
        error instanceof ApiError
          ? error
          : new ApiError(500, 'Internal Server Error', error.message || null),
      );
  }
};

const updateAd = async (req, res) => {
  try {
    const { adId } = req.params;

    const { bannerImage = null, boxImage = null } = req.body;
    if (!bannerImage && !boxImage) {
      throw new ApiError(
        400,
        'Please upload any one image, Banner or Box image',
        'Add Banner or Box image',
      );
    }

    if (!adId) {
      throw new ApiError(400, 'Ad ID is required');
    }

    const validation = AdSchema.safeParse(req.body);
    if (!validation.success) {
      throw new ApiError(400, 'Ad validation failed', validation.error.errors);
    }

    const { sections, ...adData } = validation.data;

    const updatedAd = await prisma.ad.update({
      where: { id: adId },
      data: {
        ...adData,
        sections: {
          set: sections?.map((id) => ({ id })),
        },
      },
      include: {
        sections: true,
      },
    });

    return res
      .status(200)
      .json(new ApiResponse(200, updatedAd, 'Ad updated successfully'));
  } catch (error) {
    return res
      .status(error instanceof ApiError ? error.statusCode : 500)
      .json(
        error instanceof ApiError
          ? error
          : new ApiError(500, 'Internal Server Error', error.message || null),
      );
  }
};

const createSection = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name || typeof name !== 'string' || name.trim() === '') {
      throw new ApiError(
        400,
        'Validation Error',
        'Section name is required and must be a non-empty string',
      );
    }

    const normalizedName = name.trim().toLowerCase();

    const existingSection = await prisma.section.findUnique({
      where: { name: normalizedName },
    });

    if (existingSection) {
      throw new ApiError(
        409,
        'Section already exists',
        'A section with this name already exists',
      );
    }

    const newSection = await prisma.section.create({
      data: {
        name: normalizedName,
      },
    });

    res
      .status(201)
      .json(new ApiResponse(201, newSection, 'Section created successfully'));
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

const deleteSection = async (req, res) => {
  try {
    const { sectionId } = req.params;

    if (!sectionId) {
      throw new ApiError(400, 'Validation Error', 'Section ID is required');
    }

    const adsUsingSection = await prisma.ad.findFirst({
      where: {
        sections: {
          some: {
            id: sectionId,
          },
        },
      },
    });

    if (adsUsingSection) {
      throw new ApiError(
        401,
        'This section is used in existing ads and cannot be deleted',
        'Cannot delete section',
      );
    }

    const deletedSection = await prisma.section.delete({
      where: {
        id: sectionId,
      },
    });

    if (!deletedSection) {
      throw new ApiError(
        500,
        'Internal server error',
        'Something went wrong while deleting the section',
      );
    }

    res
      .status(200)
      .json(
        new ApiResponse(200, deletedSection, 'Section deleted successfully'),
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

const getAllSections = async (req, res) => {
  try {
    const sections = await prisma.section.findMany({
      select: {
        id: true,
        name: true,
      },
      orderBy: {
        name: 'asc',
      },
    });

    return res
      .status(200)
      .json(new ApiResponse(200, sections, 'Sections fetched successfully'));
  } catch (error) {
    return res
      .status(500)
      .json(new ApiError(500, 'Internal Server Error', error.message || null));
  }
};

module.exports = {
  getAdAnalytics,
  getAllAds,
  createAd,
  createDailyAdStatAnalytics,
  getAdBySection,
  updateAd,
  deleteSection,
  createSection,
  getAllSections,
};
