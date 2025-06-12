const { tr } = require('zod/v4/locales');
const prisma = require('../models/prismaClient');
const { ApiError } = require('../utils/ApiError');
const { ApiResponse } = require('../utils/ApiResponse');
const eventInterseted = require('../validation/eventInterested.validation');

const createEventInterset = async (req, res) => {
  try {
    const { eventId } = req.params;
    if (!eventId) {
      throw new ApiError(404, 'Event Id required', 'Please send the Event Id');
    }
    const eventInterestValidation = eventInterseted.safeParse(req.body);
    if (!eventInterestValidation.success) {
      throw new ApiError(
        400,
        'Invalid input',
        eventInterestValidation.error.message,
      );
    }
    const { firstName, lastName, mobileNo, email } = req.body;
    const createdEventInterest = await prisma.eventIntrested.create({
      data: {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        mobileNo: mobileNo.trim(),
        email: email.trim(),
        eventId: eventId,
      },
    });
    if (!createdEventInterest) {
      throw new ApiError(
        500,
        'Internal server error',
        'Something went wrong while creating event interest',
      );
    }
    res
      .status(200)
      .json(
        new ApiResponse(
          200,
          createdEventInterest,
          'Event interest created successfully',
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

const getAllEventIntrested = async (req, res) => {
  try {
    const eventInterestedList = await prisma.eventIntrested.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    if (!eventInterestedList || eventInterestedList.length === 0) {
      throw new ApiError(
        404,
        'No event interested found',
        'No event interested data available',
      );
    }
    res
      .status(200)
      .json(
        new ApiResponse(
          200,
          eventInterestedList,
          'Event interested list fetched successfully',
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

const getInterestedDataByEventId = async (req,res) => {
  try {
    const { eventId } = req.params;
    if (!eventId) {
      throw new ApiError(404, 'Event Id required', 'Please send the Event Id');
    }
    const eventInterestedList = await prisma.eventIntrested.findMany({
      where: {
        eventId: eventId,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    if (!eventInterestedList) {
      throw new ApiError(
        404,
        'No event interested found',
        'No event interested data available for this event',
      );
    }
    res
      .status(200)
      .json(
        new ApiResponse(
          200,
          eventInterestedList,
          'Event interested list fetched successfully',
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
}

module.exports = { createEventInterset, getAllEventIntrested, getInterestedDataByEventId };
