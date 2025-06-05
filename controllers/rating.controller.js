const { ApiResponse } = require('../utils/ApiResponse');
const UserSchema = require('../validation/userSchema.validation.js');
const prisma = require('../models/prismaClient');
const { ApiError } = require('../utils/ApiError');
const { ratingSchema } = require('../validation/rating.validation.js');

const createRating = async (req, res) => {
  try {
    const { courseId } = req.params;
    if (!courseId) {
      throw new ApiError(401, 'Course ID is required');
    }
    const { id: userId } = req.loggedInUser;
    const validateRating = ratingSchema.safeParse(req.body);
    if (!validateRating.success) {
      throw new ApiError(401, 'Validation error', validateRating.error.errors);
    }
    const createdRating = await prisma.rating.create({
      data: {
        userId: userId,
        courseId: courseId,
        rating: req.body.rating,
      },
    });
    if (!createdRating) {
      throw new ApiError(
        500,
        'Internal server error',
        'Something went wrong while creating the rating',
      );
    }
    res
      .status(200)
      .json(new ApiResponse(200, createdRating, 'Rating created successfully'));
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

const getAllRatingsByCourseId = async (req, res) => {
  try {
    const { courseId } = req.params;
    const allRatings = await prisma.rating.findMany({
      where: {
        courseId: courseId,
      },
    });
    if (!allRatings) {
      throw new ApiError(500, 'Something went wrong while fetching ratings');
    }
    res
      .status(200)
      .json(new ApiResponse(200, allRatings, 'Ratings fetched successfully'));
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

module.exports = { createRating, getAllRatingsByCourseId };
