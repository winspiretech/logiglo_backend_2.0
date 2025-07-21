const { ApiResponse } = require('../utils/ApiResponse');
const { ApiError } = require('../utils/ApiError');
const {
  calculateProfileCompletion,
} = require('../utils/calculateProfileCompletion ');
const prisma = require('../models/prismaClient');

const getUserProfileWithCompletion = async (req, res) => {
  try {
    const user = req.loggedInUser;

    if (!user?.id) {
      throw new ApiError(401, 'Unauthorized: User not logged in');
    }

    const profileCompletion = calculateProfileCompletion(user);

    const {
      name,
      email,
      mobileNo,
      country,
      city,
      address,
      postalCode,
      profilePic,
      bio,
    } = user;

    return res.status(200).json(
      new ApiResponse(
        200,
        {
          name,
          email,
          mobileNo,
          country,
          city,
          address,
          postalCode,
          profilePic,
          bio,
          profileCompletionPercentage: profileCompletion,
        },
        'User profile fetched successfully',
      ),
    );
  } catch (error) {
    console.error(error.message || 'Error fetching user profile');

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

const upcomingEventsInGiveDays = async (req, res) => {
  try {
    const { days = 3 } = req.query;
    const today = new Date();

    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);

    const givenDaysLater = new Date(tomorrow);
    givenDaysLater.setDate(tomorrow.getDate() + parseInt(days));
    givenDaysLater.setHours(23, 59, 59, 999);

    const upcomingEvents = await prisma.event.findMany({
      where: {
        startDate: {
          gte: tomorrow,
          lte: givenDaysLater,
        },
      },
      orderBy: {
        startDate: 'asc',
      },
    });

    res
      .status(200)
      .json(
        new ApiResponse(
          200,
          { upcomingEvents, totalUpcomingEvents: upcomingEvents.length },
          `Events from ${tomorrow.toISOString()} to ${givenDaysLater.toISOString()}`,
        ),
      );
  } catch (error) {
    console.error(error.message || 'Error fetching upcoming events');
    return res
      .status(500)
      .json(new ApiError(500, 'Internal server error', error.message || null));
  }
};

module.exports = { getUserProfileWithCompletion, upcomingEventsInGiveDays };
