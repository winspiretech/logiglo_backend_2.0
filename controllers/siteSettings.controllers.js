const prisma = require('../models/prismaClient');
const { ApiError } = require('../utils/ApiError');
const { ApiResponse } = require('../utils/ApiResponse');

const SINGLETON_ID = 'site-settings-singleton';

const test = async (req, res) => {
  res.send('Site Settings route working');
};

const getCareersIframeUrl = async (req, res) => {
  try {
    const settings = await prisma.siteSettings.findUnique({
      where: { id: SINGLETON_ID },
    });

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          { careersIframeUrl: settings?.careersIframeUrl ?? '' },
          'Careers iframe URL fetched successfully',
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

const updateCareersIframeUrl = async (req, res) => {
  try {
    const { careersIframeUrl } = req.body;

    const urlToSave =
      careersIframeUrl?.trim() === '' ? null : (careersIframeUrl ?? null);

    const settings = await prisma.siteSettings.upsert({
      where: { id: SINGLETON_ID },
      update: { careersIframeUrl: urlToSave },
      create: { id: SINGLETON_ID, careersIframeUrl: urlToSave },
    });

    if (!settings) {
      throw new ApiError(
        500,
        'Something went wrong while updating the careers iframe URL, Please try again',
      );
    }

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          settings,
          'Careers iframe URL updated successfully',
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

module.exports = {
  test,
  getCareersIframeUrl,
  updateCareersIframeUrl,
};
