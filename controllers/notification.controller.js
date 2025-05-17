// notificationController.js
const prisma = require('../models/prismaClient');
const { ApiResponse } = require('../utils/ApiResponse');
const { ApiError } = require('../utils/ApiError');
const { z } = require('zod');

// Check if prisma is defined
if (!prisma) {
  throw new Error(
    'Prisma client is not defined. Check your import and client generation.',
  );
}

// Zod Schema for Notification Creation
const createNotificationSchema = z.object({
  notifyAll: z.boolean().default(false),
  recipientId: z
    .string()
    .uuid('Invalid recipientId format')
    .nullable()
    .optional(),
  triggeredById: z
    .string()
    .uuid('Invalid triggeredById format')
    .nullable()
    .optional(),
  type: z.enum(
    [
      'POST_LIKED',
      'POST_REPLIED',
      'REPLY_REPLIED',
      'POST_STATUS_CHANGED',
      'BLOG_STATUS_CHANGED',
      'EVENT_CREATED',
      'COURSE_ENQUIRY_SUBMITTED',
      'EVENT_UPCOMING',
    ],
    { message: 'Invalid notification type' },
  ),
  message: z.string().min(1, 'Message is required'),
  quotePostId: z
    .string()
    .uuid('Invalid quotePostId format')
    .nullable()
    .optional(),
  generalPostId: z
    .string()
    .uuid('Invalid generalPostId format')
    .nullable()
    .optional(),
  quoteReplyId: z
    .string()
    .uuid('Invalid quoteReplyId format')
    .nullable()
    .optional(),
  generalReplyId: z
    .string()
    .uuid('Invalid generalReplyId format')
    .nullable()
    .optional(),
  blogId: z.string().uuid('Invalid blogId format').nullable().optional(),
  eventId: z.string().uuid('Invalid eventId format').nullable().optional(),
  courseEnquiryId: z
    .string()
    .uuid('Invalid courseEnquiryId format')
    .nullable()
    .optional(),
});

// Zod Schema for Getting User Notifications
const getUserNotificationsSchema = z.object({
  userId: z.string().uuid('Invalid userId format'),
});

// Helper to notify all users
const notifyAllUsers = async (type, message, data, tx = prisma) => {
  if (!tx) throw new Error('Transaction client is undefined');

  const users = await tx.user.findMany({ select: { id: true } });

  const notifications = users
    .filter((user) => user.id !== data.triggeredById)
    .map((user) => ({
      recipientId: user.id,
      triggeredById: data.triggeredById || null,
      type,
      message,
      quotePostId: data.quotePostId || null,
      generalPostId: data.generalPostId || null,
      quoteReplyId: data.quoteReplyId || null,
      generalReplyId: data.generalReplyId || null,
      blogId: data.blogId || null,
      eventId: data.eventId || null,
      courseEnquiryId: data.courseEnquiryId || null,
    }));

  return await tx.notification.createMany({ data: notifications });
};

// Create Notification
exports.createNotification = async (req, res) => {
  try {
    const parsedData = createNotificationSchema.safeParse(req.body);
    if (!parsedData.success) {
      throw new ApiError(400, 'Validation failed', parsedData.error.format());
    }

    const {
      notifyAll,
      recipientId,
      triggeredById,
      type,
      message,
      quotePostId,
      generalPostId,
      quoteReplyId,
      generalReplyId,
      blogId,
      eventId,
      courseEnquiryId,
    } = parsedData.data;

    // If notifyAll is false, recipientId must be present
    if (!notifyAll && !recipientId) {
      throw new ApiError(
        400,
        'recipientId is required when notifyAll is false',
      );
    }

    // Validate referenced entities (skip recipient if notifyAll)
    const checks = [
      !notifyAll
        ? prisma.user.findUnique({ where: { id: recipientId } })
        : Promise.resolve(true),
      triggeredById
        ? prisma.user.findFirst({ where: { id: triggeredById } })
        : Promise.resolve(null),
      quotePostId
        ? prisma.quotePost.findFirst({ where: { id: quotePostId } })
        : Promise.resolve(null),
      generalPostId
        ? prisma.generalPost.findFirst({ where: { id: generalPostId } })
        : Promise.resolve(null),
      quoteReplyId
        ? prisma.quoteReply.findFirst({ where: { id: quoteReplyId } })
        : Promise.resolve(null),
      generalReplyId
        ? prisma.generalReply.findFirst({ where: { id: generalReplyId } })
        : Promise.resolve(null),
      blogId
        ? prisma.blog.findFirst({ where: { id: blogId } })
        : Promise.resolve(null),
      eventId
        ? prisma.event.findFirst({ where: { id: eventId } })
        : Promise.resolve(null),
      courseEnquiryId
        ? prisma.courseEnquiry.findFirst({ where: { id: courseEnquiryId } })
        : Promise.resolve(null),
    ];

    const [
      recipient,
      triggeredBy,
      quotePost,
      generalPost,
      quoteReply,
      generalReply,
      blog,
      event,
      courseEnquiry,
    ] = await Promise.all(checks);

    if (!notifyAll && !recipient)
      throw new ApiError(404, 'Recipient not found');
    if (triggeredById && !triggeredBy)
      throw new ApiError(404, 'TriggeredBy user not found');
    if (quotePostId && !quotePost)
      throw new ApiError(404, 'QuotePost not found');
    if (generalPostId && !generalPost)
      throw new ApiError(404, 'GeneralPost not found');
    if (quoteReplyId && !quoteReply)
      throw new ApiError(404, 'QuoteReply not found');
    if (generalReplyId && !generalReply)
      throw new ApiError(404, 'GeneralReply not found');
    if (blogId && !blog) throw new ApiError(404, 'Blog not found');
    if (eventId && !event) throw new ApiError(404, 'Event not found');
    if (courseEnquiryId && !courseEnquiry)
      throw new ApiError(404, 'CourseEnquiry not found');

    let result;
    await prisma.$transaction(async (tx) => {
      if (notifyAll) {
        result = await notifyAllUsers(
          type,
          message,
          {
            triggeredById,
            quotePostId,
            generalPostId,
            quoteReplyId,
            generalReplyId,
            blogId,
            eventId,
            courseEnquiryId,
          },
          tx,
        );
      } else {
        result = await tx.notification.create({
          data: {
            recipientId,
            triggeredById,
            type,
            message,
            quotePostId,
            generalPostId,
            quoteReplyId,
            generalReplyId,
            blogId,
            eventId,
            courseEnquiryId,
          },
        });
      }
    });

    return res
      .status(201)
      .json(
        new ApiResponse(
          201,
          notifyAll ? null : result,
          notifyAll
            ? 'Notifications sent to all users'
            : 'Notification created successfully',
        ),
      );
  } catch (error) {
    if (error.code === 'P2003') {
      return res
        .status(404)
        .json(
          new ApiError(404, 'Invalid foreign key reference', error.message),
        );
    }
    if (error.code === 'P2002') {
      return res
        .status(409)
        .json(
          new ApiError(
            409,
            'Unique constraint violation on Notification',
            error.message,
          ),
        );
    }
    if (error.code === 'P2011') {
      return res
        .status(400)
        .json(
          new ApiError(
            400,
            'Required field missing in Notification',
            error.message,
          ),
        );
    }
    if (error instanceof ApiError) {
      return res.status(error.statusCode).json(error);
    }
    return res
      .status(500)
      .json(
        new ApiError(
          500,
          'Failed to create notification due to server error',
          error.message,
        ),
      );
  }
};

// Get User Notifications
exports.getUserNotifications = async (req, res) => {
  try {
    const parsedData = getUserNotificationsSchema.safeParse({
      userId: req.params.userId,
    });
    if (!parsedData.success) {
      throw new ApiError(400, 'Validation failed', parsedData.error.format());
    }

    const { userId } = parsedData.data;

    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new ApiError(404, 'User not found');

    const notifications = await prisma.notification.findMany({
      where: { recipientId: userId },
      orderBy: { createdAt: 'desc' },
      include: {
        quotePost: { select: { title: true } },
        generalPost: { select: { title: true } },
        quoteReply: { select: { description: true } },
        generalReply: { select: { description: true } },
        blog: { select: { title: true } },
        event: { select: { eventTitle: true } },
        courseEnquiry: { select: { contactPersonName: true } },
        triggeredBy: { select: { name: true } },
        recipient: { select: { name: true } },
      },
    });

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          notifications,
          'Notifications fetched successfully',
        ),
      );
  } catch (error) {
    if (error instanceof ApiError) {
      return res.status(error.statusCode).json(error);
    }
    return res
      .status(500)
      .json(
        new ApiError(
          500,
          'Failed to fetch notifications due to server error',
          error.message,
        ),
      );
  }
};
