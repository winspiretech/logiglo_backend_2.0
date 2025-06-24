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

    if (!retrievedData) {
      throw new ApiError(
        404,
        'No data found for the specified period',
        'No data',
      );
    }

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
        'Please upload any one image',
        'Add Banner or Box image',
      );
    }

    const validation = AdSchema.safeParse(req.body);
    if (!validation.success) {
      throw new ApiError(400, 'Ad validation failed', validation.error.errors);
    }

    const { sections = [], subSections = [], ...adData } = validation.data;

    const newAd = await prisma.ad.create({
      data: {
        ...adData,
        sections: {
          connect: sections.map((id) => ({ id })),
        },
        subSections: {
          connect: subSections.map((id) => ({ id })),
        },
      },
      include: {
        sections: true,
        subSections: true,
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
    const { type } = req.query;
    if (
      type &&
      !['box', 'banner', 'both'].includes(type.trim().toLowerCase())
    ) {
      throw new ApiError(
        402,
        "Send correct type, It should be 'box','banner','both'",
      );
    }

    let ads;

    if (type) {
      ads = await prisma.ad.findMany({
        where: {
          type: {
            in: [type.trim().toLowerCase(), 'both'],
          },
        },
        include: {
          sections: true,
          subSections: {
            include: {
              section: {
                select: {
                  name: true,
                },
              },
            },
          },
        },
        orderBy: { createdAt: 'desc' },
      });
    } else {
      ads = await prisma.ad.findMany({
        orderBy: { createdAt: 'desc' },
        include: {
          sections: true,
          subSections: {
            include: {
              section: {
                select: {
                  name: true,
                },
              },
            },
          },
        },
      });
    }

    if (!ads) {
      throw new ApiError(500, 'Internal server error', 'No ads available');
    }

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

    const { type = 'box', subSection } = req.query;

    const normalizedType = type.trim().toLowerCase();
    if (!['box', 'banner', 'both'].includes(normalizedType)) {
      throw new ApiError(
        402,
        "Send correct type. It should be 'box', 'banner', or 'both'",
      );
    }

    const sectionData = await prisma.section.findMany({
      where: {
        name: section,
      },
      include: {
        SubSection: {
          where: {
            name: subSection,
          },
          select: {
            id: true,
            name: true,
            show: true,
          },
        },
      },
    });

    if (!sectionData?.length) {
      throw new ApiError(404, 'Section not found', `Section ${section} does not exist`);
    }

    const sectionItem = sectionData[0];

    if (
      sectionItem.show === false ||
      (subSection &&
        (!sectionItem.SubSection.length || sectionItem.SubSection[0].show === false))
    ) {
      return res.status(400).json(new ApiResponse(400, [], 'Section ads are disabled'));
    }

    const whereQuery = {
      sections: {
        some: {
          name: {
            equals: section.trim(),
            mode: 'insensitive',
          },
        },
      },
      status: 'active',
      startDate: {
        lte: new Date(),
      },
      endDate: {
        gte: new Date(),
      },
      type: {
        in: [normalizedType, 'both'],
      },
      ...(subSection && {
        subSections: {
          some: {
            name: {
              equals: subSection.trim(),
              mode: 'insensitive',
            },
          },
        },
      }),
    };

    const ads = await prisma.ad.findMany({
      where: whereQuery,
      orderBy: { createdAt: 'desc' },
      include: {
        sections: true,
        subSections: {
          include: {
            section: {
              select: { name: true },
            },
          },
        },
      },
    });

    return res.status(200).json(new ApiResponse(200, ads, 'Ads fetched successfully'));
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
        'Please upload any one image',
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

    const { sections = [], subSections = [], ...adData } = validation.data;

    const updatedAd = await prisma.ad.update({
      where: { id: adId },
      data: {
        ...adData,
        sections: {
          set: sections.map((id) => ({ id })),
        },
        subSections: {
          set: subSections.map((id) => ({ id })),
        },
      },
      include: {
        sections: true,
        subSections: true,
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
      // orderBy: {
      //   name: 'asc',
      // },
    });

    return res
      .status(200)
      .json(new ApiResponse(200, sections, 'Sections fetched successfully'));
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

const getSectionAdAnalytics = async (req, res) => {
  try {
    const { section } = req.params;
    const { period = 'monthly' } = req.query;

    if (!section) {
      throw new ApiError(404, 'Section is required', 'Missing section');
    }

    const sectionData = await prisma.section.findUnique({
      where: { name: section.trim().toLowerCase() },
    });

    if (!sectionData) {
      throw new ApiError(
        404,
        'Section not found',
        `Section ${section} does not exist`,
      );
    }

    let formatDate;
    if (period === 'daily') {
      formatDate = 'YYYY-MM-DD';
    } else if (period === 'weekly') {
      formatDate = `IYYY-"W"IW`;
    } else if (period === 'monthly') {
      formatDate = 'YYYY-MM';
    } else if (period === 'yearly') {
      formatDate = 'YYYY';
    } else {
      throw new ApiError(
        400,
        'Invalid period',
        "Must be 'daily', 'weekly', 'monthly', or 'yearly'",
      );
    }

    const ads = await prisma.ad.findMany({
      where: {
        sections: {
          some: {
            name: section.trim().toLowerCase(),
          },
        },
      },
      select: {
        id: true,
      },
    });

    const adIds = ads.map((ad) => ad.id);

    if (adIds.length === 0) {
      throw new ApiError(
        404,
        'No ads found for this section',
        'No ads available',
      );
    }

    const adStats = await prisma.$queryRawUnsafe(
      `
        SELECT 
          to_char("AdStat".date, '${formatDate}') AS label,
          SUM("AdStat".impressions)::int AS total_impressions,
          SUM("AdStat".clicks)::int AS total_clicks
        FROM "AdStat"
        WHERE "AdStat"."adId" = ANY($1)
        AND "AdStat"."sectionId" = $2
        GROUP BY label
        ORDER BY label
      `,
      adIds,
      sectionData.id,
    );

    const timeStats = await prisma.$queryRawUnsafe(
      `
        SELECT 
          to_char("UserSectionTime".date, '${formatDate}') AS label,
          SUM("UserSectionTime"."timeSpentMs")::bigint AS total_time_spent_ms
        FROM "UserSectionTime"
        WHERE "UserSectionTime"."adId" = ANY($1)
        AND "UserSectionTime"."sectionId" = $2
        GROUP BY label
        ORDER BY label
      `,
      adIds,
      sectionData.id,
    );

    const combinedResults = adStats.map((stat) => {
      const timeStat = timeStats.find((ts) => ts.label === stat.label) || {
        total_time_spent_ms: 0,
      };
      const totalMs = Number(timeStat.total_time_spent_ms);
      const hours = Math.floor(totalMs / (1000 * 60 * 60));
      const minutes = Math.floor((totalMs % (1000 * 60 * 60)) / (1000 * 60));

      return {
        period: stat.label,
        total_impressions: stat.total_impressions || 0,
        total_clicks: stat.total_clicks || 0,
        total_time_spent: {
          hours,
          minutes,
          milliseconds: totalMs,
        },
      };
    });

    timeStats.forEach((timeStat) => {
      if (!combinedResults.find((cr) => cr.period === timeStat.label)) {
        const totalMs = Number(timeStat.total_time_spent_ms);
        const hours = Math.floor(totalMs / (1000 * 60 * 60));
        const minutes = Math.floor((totalMs % (1000 * 60 * 60)) / (1000 * 60));

        combinedResults.push({
          period: timeStat.label,
          total_impressions: 0,
          total_clicks: 0,
          total_time_spent: {
            hours,
            minutes,
            milliseconds: totalMs,
          },
        });
      }
    });

    combinedResults.sort((a, b) => a.period.localeCompare(b.period));

    if (!combinedResults) {
      throw new ApiError(
        404,
        'No analytics data found for the specified section and period',
        'No data',
      );
    }

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          combinedResults,
          `${period} analytics for section ${section} fetched successfully`,
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

const createSubSection = async (req, res) => {
  try {
    const { name, section } = req.body;

    if (!name || !section) {
      throw new ApiError(400, 'Subsection name and sectionId are required');
    }

    const sectionData = await prisma.section.findUnique({
      where: { name: section.trim().toLowerCase() },
    });

    if (!sectionData) {
      throw new ApiError(
        404,
        'Section not found',
        `Section ${section} does not exist`,
      );
    }

    const existing = await prisma.subSection.findFirst({
      where: {
        name: name.trim().toLowerCase(),
        sectionId: sectionData.id,
      },
    });

    if (existing) {
      throw new ApiError(409, 'Subsection already exists under this section');
    }

    const newSub = await prisma.subSection.create({
      data: {
        name: name.trim().toLowerCase(),
        sectionId: sectionData?.id,
      },
    });

    return res
      .status(201)
      .json(new ApiResponse(201, newSub, 'Subsection created successfully'));
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

const getAllSectionsWithSubSections = async (req, res) => {
  try {
    const sections = await prisma.section.findMany({
      include: {
        SubSection: {
          select: {
            id: true,
            name: true,
            show: true,
          },
          // orderBy: {
          //   name: 'asc',
          // },
        },
      },
      orderBy: {
        name: 'asc',
      },
    });

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          sections,
          'Sections with subsections fetched successfully',
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

const deleteSubSection = async (req, res) => {
  try {
    const { subSectionId } = req.params;

    const adsUsingSub = await prisma.ad.findFirst({
      where: {
        subSections: {
          some: {
            id: subSectionId,
          },
        },
      },
    });

    if (adsUsingSub) {
      throw new ApiError(
        400,
        'This subsection is used in ads and cannot be deleted',
      );
    }

    const deleted = await prisma.subSection.delete({
      where: { id: subSectionId },
    });

    return res
      .status(200)
      .json(new ApiResponse(200, deleted, 'Subsection deleted successfully'));
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

const toggleSectionVisibility = async (req, res) => {
  try {
    const { sectionId } = req.params;

    const section = await prisma.section.findUnique({
      where: { id: sectionId },
    });
    if (!section) throw new ApiError(404, 'Section not found');

    const updated = await prisma.section.update({
      where: { id: sectionId },
      data: { show: !section.show },
    });

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          updated,
          `Section visibility toggled to ${updated.show}`,
        ),
      );
  } catch (error) {
    return res
      .status(error instanceof ApiError ? error.statusCode : 500)
      .json(
        error instanceof ApiError
          ? error
          : new ApiError(500, 'Internal Server Error', error.message),
      );
  }
};

const toggleSubSectionVisibility = async (req, res) => {
  try {
    const { subSectionId } = req.params;

    const subSection = await prisma.subSection.findUnique({
      where: { id: subSectionId },
    });
    if (!subSection) throw new ApiError(404, 'SubSection not found');

    const updated = await prisma.subSection.update({
      where: { id: subSectionId },
      data: { show: !subSection.show },
    });

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          updated,
          `SubSection visibility toggled to ${updated.show}`,
        ),
      );
  } catch (error) {
    return res
      .status(error instanceof ApiError ? error.statusCode : 500)
      .json(
        error instanceof ApiError
          ? error
          : new ApiError(500, 'Internal Server Error', error.message),
      );
  }
};

const getIndividualAdDetail = async (req, res) => {
  try {
    const { adId } = req.params;
    if (!adId) {
      throw new ApiError(404, 'Ad Id required', 'Ad Id missing');
    }
    const adData = await prisma.ad.findUnique({
      where: {
        id: adId,
      },
      include: {
        sections: true,
        subSections: true,
        stats: true,
      },
    });
    if (!adData) {
      throw new ApiError(
        500,
        'Something went wrong while getting ad detail',
        'Internal server error',
      );
    }
    res
      .status(200)
      .json(new ApiResponse(201, adData, 'Ads data fetched successfully'));
  } catch (error) {
    return res
      .status(error instanceof ApiError ? error.statusCode : 500)
      .json(
        error instanceof ApiError
          ? error
          : new ApiError(500, 'Internal Server Error', error.message),
      );
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
  getSectionAdAnalytics,
  createSubSection,
  getAllSectionsWithSubSections,
  deleteSubSection,
  toggleSectionVisibility,
  toggleSubSectionVisibility,
  getIndividualAdDetail,
};
