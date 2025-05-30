const prisma = require('../models/prismaClient');
const { ApiError } = require('../utils/ApiError');
const { ApiResponse } = require('../utils/ApiResponse');
const EventSchema = require('../validation/event.validation');

const test = async (req, res) => {
  res.send('Success');
};

const addEvents = async (req, res) => {
  try {
    const { id, name } = req.user;
    const { description = null } = req.body;
    if (description === null) {
      throw new ApiError(401, 'Description is required');
    }
    const eventValidation = EventSchema.safeParse(req.body);
    if (!eventValidation.success) {
      throw new ApiError(401, 'Validation Error', eventValidation.error.errors);
    }
    const newEvent = await prisma.event.create({
      data: {
        ...req.body,
        authorId: id,
      },
    });
    if (!newEvent) {
      throw new ApiError(
        500,
        'Something went wrong while creating the event, Please try again',
      );
    }
    return res
      .status(200)
      .json(new ApiResponse(200, newEvent, 'Event created successfully'));
  } catch (error) {
    if (error instanceof ApiError) {
      // Custom ApiError, send it back to the client
      return res.status(error.statusCode).json(error);
    } else {
      // Handle other types of errors
      return res
        .status(500)
        .json(
          new ApiError(500, 'Internal server error', error.message || null),
        );
    }
  }
};

const getAllEvents = async (req, res) => {
  try {
    const allEvents = await prisma.event.findMany();
    if (!allEvents) {
      throw new ApiError(
        500,
        'Something went wrong while fetching data, Please try again',
      );
    }
    return res
      .status(200)
      .json(new ApiResponse(200, allEvents, 'Events fetched successfully'));
  } catch (error) {
    if (error instanceof ApiError) {
      // Custom ApiError, send it back to the client
      return res.status(error.statusCode).json(error);
    } else {
      // Handle other types of errors
      return res
        .status(500)
        .json(
          new ApiError(500, 'Internal server error', error.message || null),
        );
    }
  }
};

const getEvent = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw new ApiError(404, 'Event ID is required');
    }
    const event = await prisma.event.findFirst({
      where: {
        id: id,
      },
      orderBy: {
        startDate: 'asc',
      },
    });
    if (!event) {
      throw new ApiError(
        500,
        'Something went wrong while fetching data, Please try again',
      );
    }
    return res
      .status(200)
      .json(new ApiResponse(200, event, 'Event fetched successfully'));
  } catch (error) {
    if (error instanceof ApiError) {
      // Custom ApiError, send it back to the client
      return res.status(error.statusCode).json(error);
    } else {
      // Handle other types of errors
      return res
        .status(500)
        .json(
          new ApiError(500, 'Internal server error', error.message || null),
        );
    }
  }
};

const updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw new ApiError(401, 'Event ID is required');
    }
    const { eventTitle, description } = req.body;
    if (!eventTitle || !description) {
      throw new ApiError(
        400,
        'All fields are required',
        'Title or Description is empty',
      );
    }
    const updatedEvent = await prisma.event.update({
      where: {
        id: id,
      },
      data: {
        eventTitle,
        description,
        ...req.body,
      },
    });
    if (!updatedEvent) {
      throw new ApiError(
        500,
        'Something went wrong while updating event, Please try again',
      );
    }
    return res
      .status(200)
      .json(new ApiResponse(200, updatedEvent, 'Events fetched successfully'));
  } catch (error) {
    if (error instanceof ApiError) {
      // Custom ApiError, send it back to the client
      return res.status(error.statusCode).json(error);
    } else {
      // Handle other types of errors
      return res
        .status(500)
        .json(
          new ApiError(500, 'Internal server error', error.message || null),
        );
    }
  }
};

const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw new ApiError(404, 'Event ID is required');
    }
    const delEvent = await prisma.event.delete({
      where: {
        id: id,
      },
    });
    if (!delEvent) {
      throw new ApiError(
        500,
        'Something went wrong while Deleting event, Please try again',
      );
    }
    return res
      .status(200)
      .json(new ApiResponse(200, delEvent, 'Event deleted successfully'));
  } catch (error) {
    if (error instanceof ApiError) {
      // Custom ApiError, send it back to the client
      return res.status(error.statusCode).json(error);
    } else {
      // Handle other types of errors
      return res
        .status(500)
        .json(
          new ApiError(500, 'Internal server error', error.message || null),
        );
    }
  }
};

const getAdminEvents = async (req, res) => {
  try {
    const { id } = req.user;
    if (!id) {
      throw new ApiError(401, 'User ID is required');
    }
    const adminEvents = await prisma.event.findMany({
      where: {
        authorId: id,
      },
      orderBy: {
        startDate: 'asc',
      },
    });
    if (!adminEvents) {
      throw new ApiError(
        500,
        'Something went wrong while fetching data, Please try again',
      );
    }
    return res
      .status(200)
      .json(
        new ApiResponse(200, adminEvents, 'Admin Events fetched successfully'),
      );
  } catch (error) {
    if (error instanceof ApiError) {
      // Custom ApiError, send it back to the client
      return res.status(error.statusCode).json(error);
    } else {
      // Handle other types of errors
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
  addEvents,
  getAllEvents,
  getEvent,
  updateEvent,
  deleteEvent,
  getAdminEvents,
};
