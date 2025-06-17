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

// Validation schemas (unchanged)
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
        message: typeof message === 'string' ? message : JSON.stringify(message),
        quotePostId: type.includes('QUOTE') && type.includes('POST') ? message.postId : undefined,
        quoteReplyId: type.includes('QUOTE') && type.includes('REPLY') ? message.replyId : undefined,
        generalPostId: type.includes('GENERAL') && type.includes('POST') ? message.postId : undefined,
        generalReplyId: type.includes('GENERAL') && type.includes('REPLY') ? message.replyId : undefined,
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
      const { subject,html, text } = emailTemplate;
      await sendEmail({
        to: user.email,
        subject,
        html,
        text,
      });
    }
  } catch (error) {
    console.error(`Error sending notification for user ${userId}:`, error);
    throw error;
  }
};

// Export the notifyUser function along with other controllers
module.exports = {
  getNotificationPreferences: async (req, res) => {
    try {
      const userId = req.params.userId;

      const preferences = await prisma.userNotificationPreference.findUnique({
        where: { userId },
      });

      if (!preferences) {
        throw new ApiError(404, 'Notification preferences not found for this user');
      }

      return res
        .status(200)
        .json(new ApiResponse(200, preferences, 'Notification preferences fetched successfully'));
    } catch (error) {
      if (error instanceof ApiError) {
        return res.status(error.statusCode).json(error);
      }
      return res
        .status(500)
        .json(new ApiError(500, 'Failed to fetch notification preferences', error.message));
    }
  },
  updateNotificationPreferences: async (req, res) => {
    try {
      const userId = req.params.userId;
      const validatedData = notificationPreferenceSchema.parse(req.body);

      const existingPreferences = await prisma.userNotificationPreference.findUnique({
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
          .json(new ApiResponse(201, newPreferences, 'Notification preferences created successfully'));
      }

      const updatedPreferences = await prisma.userNotificationPreference.update({
        where: { userId },
        data: validatedData,
      });

      return res
        .status(200)
        .json(new ApiResponse(200, updatedPreferences, 'Notification preferences updated successfully'));
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json(new ApiError(400, 'Invalid input data', error.errors));
      }
      if (error instanceof ApiError) {
        return res.status(error.statusCode).json(error);
      }
      return res
        .status(500)
        .json(new ApiError(500, 'Failed to update notification preferences', error.message));
    }
  },
  getEmailServerConfig: async (req, res) => {
    try {
      const config = await prisma.emailServerConfig.findFirst();
      if (!config) {
        throw new ApiError(404, 'Email server configuration not found');
      }
      return res
        .status(200)
        .json(new ApiResponse(200, config, 'Email server configuration fetched successfully'));
    } catch (error) {
      if (error instanceof ApiError) {
        return res.status(error.statusCode).json(error);
      }
      return res
        .status(500)
        .json(new ApiError(500, 'Failed to fetch email server configuration', error.message));
    }
  },
  updateEmailServerConfig: async (req, res) => {
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
          .json(new ApiResponse(200, updatedConfig, 'Email server configuration updated successfully'));
      }

      const newConfig = await prisma.emailServerConfig.create({
        data: validatedData,
      });
      return res
        .status(201)
        .json(new ApiResponse(201, newConfig, 'Email server configuration created successfully'));
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json(new ApiError(400, 'Invalid input data', error.errors));
      }
      if (error instanceof ApiError) {
        return res.status(error.statusCode).json(error);
      }
      return res
        .status(500)
        .json(new ApiError(500, 'Failed to update email server configuration', error.message));
    }
  },
  sendNotification: async (req, res) => {
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
          throw new ApiError(400, 'Post ID is required for post-related notifications');
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
          throw new ApiError(400, 'Reply ID is required for reply-related notifications');
        }
        if (type.includes('QUOTE')) {
          reply = await prisma.quoteReply.findUnique({ where: { id: replyId } });
          post = await prisma.quotePost.findUnique({ where: { id: reply.postId } });
        } else {
          reply = await prisma.generalPostReply.findUnique({ where: { id: replyId } });
          post = await prisma.generalPost.findUnique({ where: { id: reply.postId } });
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
        return res.status(400).json(new ApiError(400, 'Invalid input data', error.errors));
      }
      if (error instanceof ApiError) {
        return res.status(error.statusCode).json(error);
      }
      return res
        .status(500)
        .json(new ApiError(500, 'Failed to send notification', error.message));
    }
  },
  notifyUser, // Explicitly export notifyUser
};