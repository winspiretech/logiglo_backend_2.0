// src/controllers/notification.controllers.js
const prisma = require('../models/prismaClient');
const { ApiResponse } = require('../utils/ApiResponse');
const { ApiError } = require('../utils/ApiError');
const { z } = require('zod');
const { sendEmail } = require('../utils/sendEmail');
const {
  quotePostCreatedTemplate,
  quotePostAcceptedTemplate,
  quotePostRejectedTemplate,
  quoteReplyAcceptedTemplate,
  quoteReplyRejectedTemplate,
  generalPostCreatedTemplate,
  generalPostAcceptedTemplate,
  generalPostRejectedTemplate,
  generalReplyAcceptedTemplate,
  generalReplyRejectedTemplate,
} = require('../utils/emailTemplates');

// Validation schemas
const notificationPreferenceSchema = z.object({
  quotePostCreation: z.boolean().optional(),
  quotePostModeration: z.boolean().optional(),
  quotePostRejected: z.boolean().optional(),
  quoteReplyCreation: z.boolean().optional(),
  quoteReplyModeration: z.boolean().optional(),
  quoteReplyRejected: z.boolean().optional(),
  generalPostCreation: z.boolean().optional(),
  generalPostModeration: z.boolean().optional(),
  generalPostRejected: z.boolean().optional(),
  generalReplyCreation: z.boolean().optional(),
  generalReplyModeration: z.boolean().optional(),
  generalReplyRejected: z.boolean().optional(),
});

const emailServerConfigSchema = z.object({
  host: z.string().min(1, 'Host is required'),
  port: z.number().int().positive('Port must be a positive integer'),
  secure: z.boolean(),
  authUser: z.string().min(1, 'Auth user is required'),
  authPass: z.string().min(1, 'Auth password is required'),
  fromEmail: z.string().email('Invalid email format'),
});

const sendNotificationSchema = z.object({
  userId: z.string().uuid(),
  type: z.enum([
    'QUOTE_POST_CREATED',
    'QUOTE_POST_ACCEPTED',
    'QUOTE_POST_REJECTED',
    'QUOTE_REPLY_ACCEPTED',
    'QUOTE_REPLY_REJECTED',
    'GENERAL_POST_CREATED',
    'GENERAL_POST_ACCEPTED',
    'GENERAL_POST_REJECTED',
    'GENERAL_REPLY_ACCEPTED',
    'GENERAL_REPLY_REJECTED',
  ]),
  postId: z.string().uuid().optional(),
  replyId: z.string().uuid().optional(),
});

// Get user's notification preferences
module.exports.getNotificationPreferences = async (req, res) => {
  try {
    const userId = req.params.userId;

    const preferences = await prisma.userNotificationPreference.findUnique({
      where: { userId },
    });

    if (!preferences) {
      throw new ApiError(
        404,
        'Notification preferences not found for this user',
      );
    }

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          preferences,
          'Notification preferences fetched successfully',
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
          'Failed to fetch notification preferences',
          error.message,
        ),
      );
  }
};

// Update user's notification preferences
module.exports.updateNotificationPreferences = async (req, res) => {
  try {
    const userId = req.params.userId;
    const validatedData = notificationPreferenceSchema.parse(req.body);

    const existingPreferences =
      await prisma.userNotificationPreference.findUnique({
        where: { userId },
      });

    if (!existingPreferences) {
      const newPreferences = await prisma.userNotificationPreference.create({
        data: {
          userId,
          ...validatedData,
        },
      });
      return res
        .status(201)
        .json(
          new ApiResponse(
            201,
            newPreferences,
            'Notification preferences created successfully',
          ),
        );
    }

    const updatedPreferences = await prisma.userNotificationPreference.update({
      where: { userId },
      data: validatedData,
    });

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          updatedPreferences,
          'Notification preferences updated successfully',
        ),
      );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res
        .status(400)
        .json(new ApiError(400, 'Invalid input data', error.errors));
    }
    if (error instanceof ApiError) {
      return res.status(error.statusCode).json(error);
    }
    return res
      .status(500)
      .json(
        new ApiError(
          500,
          'Failed to update notification preferences',
          error.message,
        ),
      );
  }
};

// Get email server configuration
module.exports.getEmailServerConfig = async (req, res) => {
  try {
    const config = await prisma.emailServerConfig.findFirst();
    if (!config) {
      throw new ApiError(404, 'Email server configuration not found');
    }
    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          config,
          'Email server configuration fetched successfully',
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
          'Failed to fetch email server configuration',
          error.message,
        ),
      );
  }
};

// Update or create email server configuration
module.exports.updateEmailServerConfig = async (req, res) => {
  try {
    const validatedData = emailServerConfigSchema.parse(req.body);

    const existingConfig = await prisma.emailServerConfig.findFirst();

    if (existingConfig) {
      const updatedConfig = await prisma.emailServerConfig.update({
        where: { id: existingConfig.id },
        data: validatedData,
      });
      return res
        .status(200)
        .json(
          new ApiResponse(
            200,
            updatedConfig,
            'Email server configuration updated successfully',
          ),
        );
    }

    const newConfig = await prisma.emailServerConfig.create({
      data: validatedData,
    });
    return res
      .status(201)
      .json(
        new ApiResponse(
          201,
          newConfig,
          'Email server configuration created successfully',
        ),
      );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res
        .status(400)
        .json(new ApiError(400, 'Invalid input data', error.errors));
    }
    if (error instanceof ApiError) {
      return res.status(error.statusCode).json(error);
    }
    return res
      .status(500)
      .json(
        new ApiError(
          500,
          'Failed to update email server configuration',
          error.message,
        ),
      );
  }
};

// Helper function to send notifications to the creator
const notifyUser = async (userId, type, message, emailTemplate) => {
  try {
    const preferences = await prisma.userNotificationPreference.findUnique({
      where: { userId },
    });

    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user || !user.email) {
      throw new ApiError(404, `User ${userId} not found or has no email`);
    }

    // Create in-app notification for the user
    await prisma.notification.create({
      data: {
        recipientId: userId,
        type,
        message:
          typeof message === 'string' ? message : JSON.stringify(message),
        quotePostId:
          type.includes('QUOTE') && type.includes('POST')
            ? message.postId
            : undefined,
        quoteReplyId:
          type.includes('QUOTE') && type.includes('REPLY')
            ? message.replyId
            : undefined,
        generalPostId:
          type.includes('GENERAL') && type.includes('POST')
            ? message.postId
            : undefined,
        generalReplyId:
          type.includes('GENERAL') && type.includes('REPLY')
            ? message.replyId
            : undefined,
      },
    });

    // Map notification types to user preferences
    const preferenceMap = {
      QUOTE_POST_CREATED: preferences?.quotePostCreation,
      QUOTE_POST_ACCEPTED: preferences?.quotePostModeration,
      QUOTE_POST_REJECTED: preferences?.quotePostRejected,
      QUOTE_REPLY_ACCEPTED: preferences?.quoteReplyModeration,
      QUOTE_REPLY_REJECTED: preferences?.quoteReplyRejected,
      GENERAL_POST_CREATED: preferences?.generalPostCreation,
      GENERAL_POST_ACCEPTED: preferences?.generalPostModeration,
      GENERAL_POST_REJECTED: preferences?.generalPostRejected,
      GENERAL_REPLY_ACCEPTED: preferences?.generalReplyModeration,
      GENERAL_REPLY_REJECTED: preferences?.generalReplyRejected,
    };

    // Send email if the user has enabled the corresponding preference
    if (preferenceMap[type] && emailTemplate) {
      const { subject, text } = emailTemplate;
      await sendEmail({
        to: user.email,
        subject,
        text,
      });
    }
  } catch (error) {
    console.error(`Error sending notification for user ${userId}:`, error);
    throw error;
  }
};

// New endpoint to send notifications from the frontend
module.exports.sendNotification = async (req, res) => {
  try {
    const validatedData = sendNotificationSchema.parse(req.body);
    const { userId, type, postId, replyId } = validatedData;

    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new ApiError(404, 'User not found');
    }

    let post = null;
    let reply = null;
    let emailTemplate = null;

    // Fetch post or reply data based on the type
    if (type.includes('POST')) {
      if (!postId) {
        throw new ApiError(
          400,
          'Post ID is required for post-related notifications',
        );
      }
      if (type.includes('QUOTE')) {
        post = await prisma.quotePost.findUnique({ where: { id: postId } });
      } else {
        post = await prisma.generalPost.findUnique({ where: { id: postId } });
      }
      if (!post) {
        throw new ApiError(404, 'Post not found');
      }
    } else if (type.includes('REPLY')) {
      if (!replyId) {
        throw new ApiError(
          400,
          'Reply ID is required for reply-related notifications',
        );
      }
      if (type.includes('QUOTE')) {
        reply = await prisma.quoteReply.findUnique({ where: { id: replyId } });
        post = await prisma.quotePost.findUnique({
          where: { id: reply.postId },
        });
      } else {
        reply = await prisma.generalPostReply.findUnique({
          where: { id: replyId },
        });
        post = await prisma.generalPost.findUnique({
          where: { id: reply.postId },
        });
      }
      if (!reply || !post) {
        throw new ApiError(404, 'Reply or associated post not found');
      }
    }

    // Determine the appropriate email template
    switch (type) {
      case 'QUOTE_POST_CREATED':
        emailTemplate = quotePostCreatedTemplate(post, user);
        break;
      case 'QUOTE_POST_ACCEPTED':
        emailTemplate = quotePostAcceptedTemplate(post, user);
        break;
      case 'QUOTE_POST_REJECTED':
        emailTemplate = quotePostRejectedTemplate(post, user);
        break;
      case 'QUOTE_REPLY_ACCEPTED':
        emailTemplate = quoteReplyAcceptedTemplate(reply, post, user);
        break;
      case 'QUOTE_REPLY_REJECTED':
        emailTemplate = quoteReplyRejectedTemplate(reply, post, user);
        break;
      case 'GENERAL_POST_CREATED':
        emailTemplate = generalPostCreatedTemplate(post, user);
        break;
      case 'GENERAL_POST_ACCEPTED':
        emailTemplate = generalPostAcceptedTemplate(post, user);
        break;
      case 'GENERAL_POST_REJECTED':
        emailTemplate = generalPostRejectedTemplate(post, user);
        break;
      case 'GENERAL_REPLY_ACCEPTED':
        emailTemplate = generalReplyAcceptedTemplate(reply, post, user);
        break;
      case 'GENERAL_REPLY_REJECTED':
        emailTemplate = generalReplyRejectedTemplate(reply, post, user);
        break;
      default:
        throw new ApiError(400, 'Invalid notification type');
    }

    // Send the notification
    await notifyUser(userId, type, { postId, replyId }, emailTemplate);

    return res
      .status(200)
      .json(new ApiResponse(200, null, 'Notification sent successfully'));
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res
        .status(400)
        .json(new ApiError(400, 'Invalid input data', error.errors));
    }
    if (error instanceof ApiError) {
      return res.status(error.statusCode).json(error);
    }
    return res
      .status(500)
      .json(new ApiError(500, 'Failed to send notification', error.message));
  }
};

// // notificationController.js
// const prisma = require('../models/prismaClient');
// const { ApiResponse } = require('../utils/ApiResponse');
// const { ApiError } = require('../utils/ApiError');
// const { z } = require('zod');

// // Check if prisma is defined
// if (!prisma) {
//   throw new Error(
//     'Prisma client is not defined. Check your import and client generation.',
//   );
// }

// // Zod Schema for Notification Creation
// const createNotificationSchema = z.object({
//   notifyAll: z.boolean().default(false),
//   recipientId: z
//     .string()
//     .uuid('Invalid recipientId format')
//     .nullable()
//     .optional(),
//   triggeredById: z
//     .string()
//     .uuid('Invalid triggeredById format')
//     .nullable()
//     .optional(),
//   type: z.enum(
//     [
//       'POST_LIKED',
//       'POST_REPLIED',
//       'REPLY_REPLIED',
//       'POST_STATUS_CHANGED',
//       'BLOG_STATUS_CHANGED',
//       'EVENT_CREATED',
//       'COURSE_ENQUIRY_SUBMITTED',
//       'EVENT_UPCOMING',
//     ],
//     { message: 'Invalid notification type' },
//   ),
//   message: z.string().min(1, 'Message is required'),
//   quotePostId: z
//     .string()
//     .uuid('Invalid quotePostId format')
//     .nullable()
//     .optional(),
//   generalPostId: z
//     .string()
//     .uuid('Invalid generalPostId format')
//     .nullable()
//     .optional(),
//   quoteReplyId: z
//     .string()
//     .uuid('Invalid quoteReplyId format')
//     .nullable()
//     .optional(),
//   generalReplyId: z
//     .string()
//     .uuid('Invalid generalReplyId format')
//     .nullable()
//     .optional(),
//   blogId: z.string().uuid('Invalid blogId format').nullable().optional(),
//   eventId: z.string().uuid('Invalid eventId format').nullable().optional(),
//   courseEnquiryId: z
//     .string()
//     .uuid('Invalid courseEnquiryId format')
//     .nullable()
//     .optional(),
// });

// // Zod Schema for Getting User Notifications
// const getUserNotificationsSchema = z.object({
//   userId: z.string().uuid('Invalid userId format'),
// });

// // Helper to notify all users
// const notifyAllUsers = async (type, message, data, tx = prisma) => {
//   if (!tx) throw new Error('Transaction client is undefined');

//   const users = await tx.user.findMany({ select: { id: true } });

//   const notifications = users
//     .filter((user) => user.id !== data.triggeredById)
//     .map((user) => ({
//       recipientId: user.id,
//       triggeredById: data.triggeredById || null,
//       type,
//       message,
//       quotePostId: data.quotePostId || null,
//       generalPostId: data.generalPostId || null,
//       quoteReplyId: data.quoteReplyId || null,
//       generalReplyId: data.generalReplyId || null,
//       blogId: data.blogId || null,
//       eventId: data.eventId || null,
//       courseEnquiryId: data.courseEnquiryId || null,
//     }));

//   return await tx.notification.createMany({ data: notifications });
// };

// // Create Notification
// exports.createNotification = async (req, res) => {
//   try {
//     const parsedData = createNotificationSchema.safeParse(req.body);
//     if (!parsedData.success) {
//       throw new ApiError(400, 'Validation failed', parsedData.error.format());
//     }

//     const {
//       notifyAll,
//       recipientId,
//       triggeredById,
//       type,
//       message,
//       quotePostId,
//       generalPostId,
//       quoteReplyId,
//       generalReplyId,
//       blogId,
//       eventId,
//       courseEnquiryId,
//     } = parsedData.data;

//     // If notifyAll is false, recipientId must be present
//     if (!notifyAll && !recipientId) {
//       throw new ApiError(
//         400,
//         'recipientId is required when notifyAll is false',
//       );
//     }

//     // Validate referenced entities (skip recipient if notifyAll)
//     const checks = [
//       !notifyAll
//         ? prisma.user.findUnique({ where: { id: recipientId } })
//         : Promise.resolve(true),
//       triggeredById
//         ? prisma.user.findFirst({ where: { id: triggeredById } })
//         : Promise.resolve(null),
//       quotePostId
//         ? prisma.quotePost.findFirst({ where: { id: quotePostId } })
//         : Promise.resolve(null),
//       generalPostId
//         ? prisma.generalPost.findFirst({ where: { id: generalPostId } })
//         : Promise.resolve(null),
//       quoteReplyId
//         ? prisma.quoteReply.findFirst({ where: { id: quoteReplyId } })
//         : Promise.resolve(null),
//       generalReplyId
//         ? prisma.generalReply.findFirst({ where: { id: generalReplyId } })
//         : Promise.resolve(null),
//       blogId
//         ? prisma.blog.findFirst({ where: { id: blogId } })
//         : Promise.resolve(null),
//       eventId
//         ? prisma.event.findFirst({ where: { id: eventId } })
//         : Promise.resolve(null),
//       courseEnquiryId
//         ? prisma.courseEnquiry.findFirst({ where: { id: courseEnquiryId } })
//         : Promise.resolve(null),
//     ];

//     const [
//       recipient,
//       triggeredBy,
//       quotePost,
//       generalPost,
//       quoteReply,
//       generalReply,
//       blog,
//       event,
//       courseEnquiry,
//     ] = await Promise.all(checks);

//     if (!notifyAll && !recipient)
//       throw new ApiError(404, 'Recipient not found');
//     if (triggeredById && !triggeredBy)
//       throw new ApiError(404, 'TriggeredBy user not found');
//     if (quotePostId && !quotePost)
//       throw new ApiError(404, 'QuotePost not found');
//     if (generalPostId && !generalPost)
//       throw new ApiError(404, 'GeneralPost not found');
//     if (quoteReplyId && !quoteReply)
//       throw new ApiError(404, 'QuoteReply not found');
//     if (generalReplyId && !generalReply)
//       throw new ApiError(404, 'GeneralReply not found');
//     if (blogId && !blog) throw new ApiError(404, 'Blog not found');
//     if (eventId && !event) throw new ApiError(404, 'Event not found');
//     if (courseEnquiryId && !courseEnquiry)
//       throw new ApiError(404, 'CourseEnquiry not found');

//     let result;
//     await prisma.$transaction(async (tx) => {
//       if (notifyAll) {
//         result = await notifyAllUsers(
//           type,
//           message,
//           {
//             triggeredById,
//             quotePostId,
//             generalPostId,
//             quoteReplyId,
//             generalReplyId,
//             blogId,
//             eventId,
//             courseEnquiryId,
//           },
//           tx,
//         );
//       } else {
//         result = await tx.notification.create({
//           data: {
//             recipientId,
//             triggeredById,
//             type,
//             message,
//             quotePostId,
//             generalPostId,
//             quoteReplyId,
//             generalReplyId,
//             blogId,
//             eventId,
//             courseEnquiryId,
//           },
//         });
//       }
//     });

//     return res
//       .status(201)
//       .json(
//         new ApiResponse(
//           201,
//           notifyAll ? null : result,
//           notifyAll
//             ? 'Notifications sent to all users'
//             : 'Notification created successfully',
//         ),
//       );
//   } catch (error) {
//     if (error.code === 'P2003') {
//       return res
//         .status(404)
//         .json(
//           new ApiError(404, 'Invalid foreign key reference', error.message),
//         );
//     }
//     if (error.code === 'P2002') {
//       return res
//         .status(409)
//         .json(
//           new ApiError(
//             409,
//             'Unique constraint violation on Notification',
//             error.message,
//           ),
//         );
//     }
//     if (error.code === 'P2011') {
//       return res
//         .status(400)
//         .json(
//           new ApiError(
//             400,
//             'Required field missing in Notification',
//             error.message,
//           ),
//         );
//     }
//     if (error instanceof ApiError) {
//       return res.status(error.statusCode).json(error);
//     }
//     return res
//       .status(500)
//       .json(
//         new ApiError(
//           500,
//           'Failed to create notification due to server error',
//           error.message,
//         ),
//       );
//   }
// };

// // Get User Notifications
// exports.getUserNotifications = async (req, res) => {
//   try {
//     const parsedData = getUserNotificationsSchema.safeParse({
//       userId: req.params.userId,
//     });
//     if (!parsedData.success) {
//       throw new ApiError(400, 'Validation failed', parsedData.error.format());
//     }

//     const { userId } = parsedData.data;

//     const user = await prisma.user.findUnique({ where: { id: userId } });
//     if (!user) throw new ApiError(404, 'User not found');

//     const notifications = await prisma.notification.findMany({
//       where: { recipientId: userId },
//       orderBy: { createdAt: 'desc' },
//       include: {
//         quotePost: { select: { title: true } },
//         generalPost: { select: { title: true } },
//         quoteReply: { select: { description: true } },
//         generalReply: { select: { description: true } },
//         blog: { select: { title: true } },
//         event: { select: { eventTitle: true } },
//         courseEnquiry: { select: { contactPersonName: true } },
//         triggeredBy: { select: { name: true } },
//         recipient: { select: { name: true } },
//       },
//     });

//     return res
//       .status(200)
//       .json(
//         new ApiResponse(
//           200,
//           notifications,
//           'Notifications fetched successfully',
//         ),
//       );
//   } catch (error) {
//     if (error instanceof ApiError) {
//       return res.status(error.statusCode).json(error);
//     }
//     return res
//       .status(500)
//       .json(
//         new ApiError(
//           500,
//           'Failed to fetch notifications due to server error',
//           error.message,
//         ),
//       );
//   }
// };
