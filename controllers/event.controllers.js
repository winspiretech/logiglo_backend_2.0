const prisma = require('../models/prismaClient');
const { ApiError } = require('../utils/ApiError');
const { ApiResponse } = require('../utils/ApiResponse');
const { deleteFileByUrl } = require('../utils/deleteFileByUrl');
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
    const allEvents = await prisma.event.findMany({
      where: {
        isArchived: false,
      },
      orderBy: {
        startDate: 'asc',
      },
    });
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
    const deltableEvent = await prisma.event.findFirst({
      where: {
        id: id,
      },
    });
    if (!deltableEvent) {
      throw new ApiError(
        404,
        'Event not found',
        'Event with this ID does not exist',
      );
    }
    let deletableImages = deltableEvent.coverImages;
    if (deletableImages && deletableImages.length > 0) {
      const images = Array.isArray(deletableImages)
        ? deletableImages
        : [...deletableImages];

      for (const url of images) {
        if (!url) continue;
        const result = await deleteFileByUrl(url);
        if (!result.success) {
          console.warn(`Failed to delete image ${url}:`, result.error);
        }
      }
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
        isArchived: false,
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

const archiveEvent = async (req, res) => {
  try {
    const { eventId } = req.params;
    if (!eventId) {
      throw new ApiError(404, 'Event ID is required');
    }
    const eventToBeArchived = await prisma.event.findFirst({
      where: {
        id: eventId,
      },
      select: {
        isArchived: true,
      },
    });
    if (!eventToBeArchived) {
      throw new ApiError(
        404,
        'Event not found',
        'Event with this ID does not exist',
      );
    }
    const archivedEvent = await prisma.event.update({
      where: {
        id: eventId,
      },
      data: {
        isArchived: !eventToBeArchived.isArchived,
      },
    });
    if (!archivedEvent) {
      throw new ApiError(
        500,
        'Something went wrong while archiving the event, Please try again',
      );
    }
    res
      .status(200)
      .json(new ApiResponse(200, archivedEvent, 'Event archived successfully'));
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

const getArchivedEvents = async (req, res) => {
  try {
    const archivedEvents = await prisma.event.findMany({
      where: {
        isArchived: true,
      },
      orderBy: {
        startDate: 'asc',
      },
    });
    if (!archivedEvents) {
      throw new ApiError(
        500,
        'Something went wrong while fetching data, Please try again',
      );
    }
    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          archivedEvents,
          'Archived Events fetched successfully',
        ),
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

const addUnarchiveEventReason = async (req, res) => {
  try {
    const { eventId } = req.params;
    const { reason } = req.body;
    if (!eventId) {
      throw new ApiError(404, 'Event ID is required');
    }
    if (!reason.trim()) {
      throw new ApiError(400, 'Reason is required');
    }
    const eventToBeArchived = await prisma.event.findFirst({
      where: {
        id: eventId,
      },
    });
    if (!eventToBeArchived) {
      throw new ApiError(
        404,
        'Event not found',
        'Event with this ID does not exist',
      );
    }
    if (!eventToBeArchived.isArchived) {
      throw new ApiError(
        400,
        'Event is not archived',
        'Event is not archived, cannot add unarchive reason',
      );
    }
    if (eventToBeArchived.unArchiveReasons?.includes(reason)) {
      throw new ApiError(400, 'Reason already exists');
    }
    const updatedReasons = [...eventToBeArchived.unArchiveReasons, reason];
    const updateEvent = await prisma.event.update({
      where: {
        id: eventId,
      },
      data: {
        unArchiveReasons: {
          set: [...updatedReasons],
        },
      },
    });
    if (!updateEvent) {
      throw new ApiError(
        500,
        'Something went wrong while updating the event, Please try again',
      );
    }
    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          updateEvent,
          'Unarchive reason added successfully',
        ),
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

const getRequiredAmountEvents = async (req, res) => {
  try {
    const amount = parseInt(req.query.amount) || 10;
    const skip = parseInt(req.query.skip) || 0;
    const eventsData = await prisma.event.findMany({
      where: {
        isArchived: false,
      },
      take: amount,
      skip: skip,
      orderBy: {
        startDate: 'desc',
      },
    });
    if (!eventsData) {
      throw new ApiError(
        500,
        'Internal serevr error',
        'Cannot fetch events at this movement please try again',
      );
    }
    res
      .status(200)
      .json(
        new ApiResponse(200, eventsData, 'Events data fetched successfully'),
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
  addEvents,
  getAllEvents,
  getEvent,
  updateEvent,
  deleteEvent,
  getAdminEvents,
  archiveEvent,
  getArchivedEvents,
  addUnarchiveEventReason,
  getRequiredAmountEvents,
};
