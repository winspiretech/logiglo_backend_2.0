const prisma = require('../models/prismaClient');
const {
  validateCreateGeneralPost,
  validateCreateGeneralReply,
  validateCreateGeneralLike,
  validateUpdateGeneralPost,
  validateUserId,
  validatePostId,
  validateGetLikesByPostId,
  updategeneralReply,
} = require('../validation/generalPost.validation');
const { ApiResponse } = require('../utils/ApiResponse');
const { ApiError } = require('../utils/ApiError');
const { z } = require('zod');
// Old email templates - no longer needed
// const {
//   generalReplyRejectedTemplate,
//   generalReplyAcceptedTemplate,
//   generalPostAcceptedTemplate,
//   generalPostRejectedTemplate,
//   generalPostCreatedTemplate,
// } = require('../utils/emailTemplates');
const { notifyUser } = require('./notification.controller');

// --- Creation Functions ---

// Create a new GeneralPost
module.exports.createGeneralPost = async (req, res) => {
  try {
    const {
      userId,
      generalPostMainCategory,
      generalPostSubCategory,
      createdBy,
      ...data
    } = validateCreateGeneralPost(req.body);

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, email: true },
    });
    if (!user) {
      throw new ApiError(404, 'User not found');
    }

    let mainCategory = null;
    if (generalPostMainCategory) {
      mainCategory = await prisma.forumMainCategory.findUnique({
        where: { id: generalPostMainCategory },
      });
      if (!mainCategory) {
        throw new ApiError(404, 'Main category not found');
      }
    }

    let subCategory = null;
    if (generalPostSubCategory) {
      subCategory = await prisma.forumSubCategory.findUnique({
        where: { id: generalPostSubCategory },
      });
      if (!subCategory) {
        throw new ApiError(404, 'Subcategory not found');
      }
    }

    const newGeneralPost = await prisma.generalPost.create({
      data: {
        user: { connect: { id: userId } },
        createdBy: createdBy || null,
        MainCategory: generalPostMainCategory
          ? { connect: { id: generalPostMainCategory } }
          : undefined,
        SubCategory: generalPostSubCategory
          ? { connect: { id: generalPostSubCategory } }
          : undefined,
        ...data,
      },
    });

    // Send notification for post creation
    const notificationType = 'GENERAL_POST_CREATED';
    const emailData = {
      title: newGeneralPost.title,
      description: newGeneralPost.description,
    };
    console.log('Sending notification:', {
      userId,
      notificationType,
      postId: newGeneralPost.id,
    });
    await notifyUser(
      userId,
      notificationType,
      { postId: newGeneralPost.id },
      emailData,
    );

    return res
      .status(201)
      .json(
        new ApiResponse(
          201,
          newGeneralPost,
          'GeneralPost created successfully',
        ),
      );
  } catch (error) {
    console.error('Error in createGeneralPost:', error);
    if (error instanceof z.ZodError) {
      return res
        .status(400)
        .json(
          new ApiError(
            400,
            'Invalid input data',
            error.errors.map((err) => err.message).join(', '),
          ),
        );
    }
    if (error.code === 'P2003') {
      return res
        .status(404)
        .json(
          new ApiError(
            404,
            'Invalid foreign key reference (user, main category, or subcategory)',
            error.message,
          ),
        );
    }
    if (error.code === 'P2002') {
      return res
        .status(409)
        .json(
          new ApiError(
            409,
            'Unique constraint violation on GeneralPost',
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
            'Required field missing in GeneralPost',
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
          'Failed to create GeneralPost due to server error',
          error.message,
        ),
      );
  }
};

// Create a new GeneralReply
module.exports.createGeneralReply = async (req, res) => {
  try {
    const { userId, postId, parentReplyId, ...data } =
      validateCreateGeneralReply(req.body);

    // Verify user exists
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new ApiError(404, 'User not found');
    }

    // Verify post exists
    const post = await prisma.generalPost.findUnique({ where: { id: postId } });
    if (!post) {
      throw new ApiError(404, 'GeneralPost not found');
    }

    // Verify parentReplyId if provided
    if (parentReplyId) {
      const parentReply = await prisma.generalReply.findUnique({
        where: { id: parentReplyId },
      });
      if (!parentReply) {
        throw new ApiError(404, 'Parent reply not found');
      }
    }

    const newGeneralReply = await prisma.generalReply.create({
      data: {
        user: { connect: { id: userId } },
        post: { connect: { id: postId } },
        parentReply: parentReplyId
          ? { connect: { id: parentReplyId } }
          : undefined,
        ...data,
      },
    });

    return res
      .status(201)
      .json(
        new ApiResponse(
          201,
          newGeneralReply,
          'GeneralReply created successfully',
        ),
      );
  } catch (error) {
    // Handle Prisma-specific errors
    if (error.code === 'P2003') {
      console.error(
        `Error in createGeneralReply - Foreign key constraint failed:`,
        error,
      );
      return res
        .status(404)
        .json(
          new ApiError(
            404,
            'Invalid foreign key reference (user, post, or parent reply)',
            error.message,
          ),
        );
    }
    if (error.code === 'P2002') {
      console.error(
        `Error in createGeneralReply - Unique constraint violation:`,
        error,
      );
      return res
        .status(409)
        .json(
          new ApiError(
            409,
            'Unique constraint violation on GeneralReply',
            error.message,
          ),
        );
    }
    if (error.code === 'P2011') {
      console.error(
        `Error in createGeneralReply - Null constraint violation:`,
        error,
      );
      return res
        .status(400)
        .json(
          new ApiError(
            400,
            'Required field missing in GeneralReply',
            error.message,
          ),
        );
    }

    // Handle known ApiError instances
    if (error instanceof ApiError) {
      console.error(`Error in createGeneralReply - ${error.message}:`, error);
      return res.status(error.statusCode).json(error);
    }

    // Handle unexpected errors
    console.error('Error in createGeneralReply - Unexpected error:', error);
    return res
      .status(500)
      .json(
        new ApiError(
          500,
          'Failed to create GeneralReply due to server error',
          error.message,
        ),
      );
  }
};

// Create or remove a GeneralLike
module.exports.createGeneralLike = async (req, res) => {
  try {
    const { userId, postId } = validateCreateGeneralLike(req.body);

    // Verify user exists
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new ApiError(404, 'User not found');
    }

    // Verify post exists
    const post = await prisma.generalPost.findUnique({ where: { id: postId } });
    if (!post) {
      throw new ApiError(404, 'GeneralPost not found');
    }

    // Use transaction for atomicity
    const result = await prisma.$transaction(async (tx) => {
      // Check if user already liked the post
      const existingLike = await tx.generalLike.findFirst({
        where: { userId, postId },
      });

      if (existingLike) {
        // Remove the existing like
        await tx.generalLike.delete({
          where: { id: existingLike.id },
        });

        // Decrement likesCount in GeneralPost
        await tx.generalPost.update({
          where: { id: postId },
          data: { likesCount: { decrement: 1 } },
        });

        return { action: 'removed', data: null };
      } else {
        // Create new like
        const newGeneralLike = await tx.generalLike.create({
          data: {
            user: { connect: { id: userId } },
            post: { connect: { id: postId } },
          },
        });

        // Increment likesCount in GeneralPost
        await tx.generalPost.update({
          where: { id: postId },
          data: { likesCount: { increment: 1 } },
        });

        return { action: 'added', data: newGeneralLike };
      }
    });

    return res
      .status(result.action === 'added' ? 201 : 200)
      .json(
        new ApiResponse(
          result.action === 'added' ? 201 : 200,
          result.data,
          result.action === 'added'
            ? 'Like added successfully'
            : 'Like removed successfully',
        ),
      );
  } catch (error) {
    // Handle Prisma-specific errors
    if (error.code === 'P2003') {
      console.error(
        `Error in createGeneralLike - Foreign key constraint failed:`,
        error,
      );
      return res
        .status(404)
        .json(
          new ApiError(
            404,
            'Invalid foreign key reference (user or post)',
            error.message,
          ),
        );
    }
    if (error.code === 'P2025') {
      console.error(
        `Error in createGeneralLike - Record not found for deletion:`,
        error,
      );
      return res
        .status(404)
        .json(new ApiError(404, 'Like not found for removal', error.message));
    }
    if (error.code === 'P2002') {
      console.error(
        `Error in createGeneralLike - Unique constraint violation:`,
        error,
      );
      return res
        .status(409)
        .json(
          new ApiError(
            409,
            'Unique constraint violation on GeneralLike',
            error.message,
          ),
        );
    }
    if (error.code === 'P2011') {
      console.error(
        `Error in createGeneralLike - Null constraint violation:`,
        error,
      );
      return res
        .status(400)
        .json(
          new ApiError(
            400,
            'Required field missing in GeneralLike',
            error.message,
          ),
        );
    }

    // Handle known ApiError instances
    if (error instanceof ApiError) {
      console.error(`Error in createGeneralLike - ${error.message}:`, error);
      return res.status(error.statusCode).json(error);
    }

    // Handle unexpected errors
    console.error('Error in createGeneralLike - Unexpected error:', error);
    return res
      .status(500)
      .json(
        new ApiError(
          500,
          'Failed to create or remove GeneralLike due to server error',
          error.message,
        ),
      );
  }
};

// Update an existing GeneralPost
module.exports.updateGeneralPost = async (req, res) => {
  try {
    const { postId, data } = validateUpdateGeneralPost(req.params, req.body);

    const post = await prisma.generalPost.findUnique({ where: { id: postId } });
    if (!post) {
      throw new ApiError(404, 'GeneralPost not found');
    }

    const updateData = { ...data };

    if (data.generalPostMainCategory) {
      const mainCategory = await prisma.forumMainCategory.findUnique({
        where: { id: data.generalPostMainCategory },
      });
      if (!mainCategory) {
        throw new ApiError(404, 'Main category not found');
      }
      updateData.MainCategory = {
        connect: { id: data.generalPostMainCategory },
      };
      delete updateData.generalPostMainCategory;
    }

    if (data.generalPostSubCategory) {
      const subCategory = await prisma.forumSubCategory.findUnique({
        where: { id: data.generalPostSubCategory },
      });
      if (!subCategory) {
        throw new ApiError(404, 'Subcategory not found');
      }
      updateData.SubCategory = { connect: { id: data.generalPostSubCategory } };
      delete updateData.generalPostSubCategory;
    }

    const filteredUpdateData = Object.fromEntries(
      Object.entries({
        updatedAt: new Date(),
        title: updateData.title ?? post.title,
        description: updateData.description ?? post.description,
        MainCategory: updateData.MainCategory,
        SubCategory: updateData.SubCategory,
        status: updateData.status ?? post.status,
        rejectionReason: updateData.rejectionReason ?? post.rejectionReason,
        createdBy: updateData.createdBy ?? post.createdBy,
        viewCount: updateData.viewCount ?? post.viewCount,
      }).filter(([_, value]) => value !== undefined),
    );

    const updatedPost = await prisma.generalPost.update({
      where: { id: postId },
      data: filteredUpdateData,
    });

    if (
      filteredUpdateData.status &&
      filteredUpdateData.status !== post.status
    ) {
      const userId = post.userId;
      let emailData = null;
      let notificationType = null;

      if (filteredUpdateData.status === 'success') {
        notificationType = 'GENERAL_POST_ACCEPTED';
        emailData = {
          title: updatedPost.title,
          description: updatedPost.description,
          postId: updatedPost.id,
        };
      } else if (filteredUpdateData.status === 'rejected') {
        notificationType = 'GENERAL_POST_REJECTED';
        emailData = {
          title: updatedPost.title,
          description: updatedPost.description,
          rejectionReason: Array.isArray(updatedPost.rejectionReason)
            ? updatedPost.rejectionReason.join(', ')
            : updatedPost.rejectionReason || 'No reason provided',
        };
      }

      if (notificationType && emailData) {
        console.log('Sending notification:', {
          userId,
          notificationType,
          postId,
        });
        await notifyUser(userId, notificationType, { postId }, emailData);
      }
    }

    return res
      .status(200)
      .json(
        new ApiResponse(200, updatedPost, 'GeneralPost updated successfully'),
      );
  } catch (error) {
    if (error.code === 'P2025') {
      console.error(
        `Error in updateGeneralPost - Record not found for update:`,
        error,
      );
      return res
        .status(404)
        .json(new ApiError(404, 'GeneralPost not found', error.message));
    }
    if (error.code === 'P2003') {
      console.error(
        `Error in updateGeneralPost - Foreign key constraint failed:`,
        error,
      );
      return res
        .status(404)
        .json(
          new ApiError(
            404,
            'Invalid foreign key reference (main category or subcategory)',
            error.message,
          ),
        );
    }
    if (error.code === 'P2002') {
      console.error(
        `Error in updateGeneralPost - Unique constraint violation:`,
        error,
      );
      return res
        .status(409)
        .json(
          new ApiError(
            409,
            'Unique constraint violation on GeneralPost',
            error.message,
          ),
        );
    }
    if (error.code === 'P2011') {
      console.error(
        `Error in updateGeneralPost - Null constraint violation:`,
        error,
      );
      return res
        .status(400)
        .json(
          new ApiError(
            400,
            'Required field missing in GeneralPost update',
            error.message,
          ),
        );
    }
    if (error instanceof ApiError) {
      console.error(`Error in updateGeneralPost - ${error.message}:`, error);
      return res.status(error.statusCode).json(error);
    }
    console.error('Error in updateGeneralPost - Unexpected error:', error);
    return res
      .status(500)
      .json(
        new ApiError(
          500,
          'Failed to update GeneralPost due to server error',
          error.message,
        ),
      );
  }
};
// Zod schema for updateGeneralReply
const updateGeneralReplySchema = z.object({
  params: z.object({
    replyId: z.string().uuid('Invalid reply ID format'),
  }),
  body: z.object({
    postId: z.string().uuid('Invalid post ID format').optional(),
    parentReplyId: z
      .string()
      .uuid('Invalid parent reply ID format')
      .optional()
      .nullable(),
    description: z.string().optional(),
    status: z.string().optional(),
    rejectionReason: z.string().optional(),
  }),
});
// Update an existing GeneralReply

module.exports.updateGeneralReply = async (req, res) => {
  try {
    const parseResult = updateGeneralReplySchema.safeParse({
      params: req.params,
      body: req.body,
    });
    if (!parseResult.success) {
      throw new ApiError(400, 'Invalid input data', parseResult.error.errors);
    }

    const { replyId } = parseResult.data.params;
    const { postId, parentReplyId, ...data } = parseResult.data.body;

    const reply = await prisma.generalReply.findUnique({
      where: { id: replyId },
      include: {
        user: {
          select: {
            id: true,
            email: true,
          },
        },
        post: {
          select: {
            id: true,
            title: true,
          },
        },
      },
    });
    if (!reply) {
      throw new ApiError(404, 'GeneralReply not found');
    }

    const updateData = { ...data };

    if (postId) {
      const post = await prisma.generalPost.findUnique({
        where: { id: postId },
      });
      if (!post) {
        throw new ApiError(404, 'GeneralPost not found');
      }
      updateData.post = { connect: { id: postId } };
    }

    if (parentReplyId) {
      const parentReply = await prisma.generalReply.findUnique({
        where: { id: parentReplyId },
      });
      if (!parentReply) {
        throw new ApiError(404, 'Parent GeneralReply not found');
      }
      updateData.parentReply = { connect: { id: parentReplyId } };
    } else if (parentReplyId === null) {
      updateData.parentReply = { disconnect: true };
    }

    const updatedReply = await prisma.generalReply.update({
      where: { id: replyId },
      data: updateData,
    });

    if (updateData.status && updateData.status !== reply.status) {
      const userId = reply.userId;
      let emailData = null;
      let notificationType = null;

      if (!reply.user || !reply.post) {
        console.warn(
          `Missing data for GeneralReply ${replyId}: user=${!!reply.user}, post=${!!reply.post}, userId=${userId}. Skipping notification.`,
        );
      } else {
        if (updateData.status === 'success') {
          notificationType = 'GENERAL_REPLY_ACCEPTED';
          emailData = {
            postTitle: reply.post.title,
            postId: reply.post.id,
            replyDescription:
              updatedReply.description || 'No description provided',
          };
        } else if (updateData.status === 'rejected') {
          notificationType = 'GENERAL_REPLY_REJECTED';
          emailData = {
            postTitle: reply.post.title,
            postId: reply.post.id,
            replyDescription:
              updatedReply.description || 'No description provided',
            rejectionReason:
              updatedReply.rejectionReason || 'No reason provided',
          };
        }
      }

      if (notificationType && emailData) {
        console.log('Sending notification:', {
          userId,
          notificationType,
          replyId,
        });
        await notifyUser(userId, notificationType, { replyId }, emailData);
      } else {
        console.log(
          'Notification not sent: invalid type, data, or missing data',
          {
            notificationType,
            userId,
            replyId,
          },
        );
      }
    }

    return res
      .status(200)
      .json(
        new ApiResponse(200, updatedReply, 'GeneralReply updated successfully'),
      );
  } catch (error) {
    console.error('Error in updateGeneralReply:', error);
    if (error.code === 'P2025') {
      return res
        .status(404)
        .json(new ApiError(404, 'GeneralReply not found', error.message));
    }
    if (error.code === 'P2003') {
      return res
        .status(404)
        .json(
          new ApiError(
            404,
            'Invalid foreign key reference (post or parent reply)',
            error.message,
          ),
        );
    }
    if (error.code === 'P2002') {
      return res
        .status(409)
        .json(
          new ApiError(
            409,
            'Unique constraint violation on GeneralReply',
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
            'Required field missing in GeneralReply update',
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
          'Failed to update GeneralReply due to server error',
          error.message,
        ),
      );
  }
};

// --- General Fetching Functions ---

// Fetch draft GeneralPosts for a specific user
module.exports.getDraftPosts = async (req, res) => {
  try {
    const userId = validateUserId(req.params);

    // Verify user exists
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new ApiError(404, 'User not found');
    }

    const draftPosts = await prisma.generalPost.findMany({
      where: {
        userId,
        status: 'draft',
      },
    });

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          draftPosts,
          'Draft GeneralPosts fetched successfully',
        ),
      );
  } catch (error) {
    // Handle known ApiError instances
    if (error instanceof ApiError) {
      console.error(`Error in getDraftPosts - ${error.message}:`, error);
      return res.status(error.statusCode).json(error);
    }

    // Handle unexpected errors
    console.error('Error in getDraftPosts - Unexpected error:', error);
    return res
      .status(500)
      .json(
        new ApiError(
          500,
          'Failed to fetch draft GeneralPosts due to server error',
          error.message,
        ),
      );
  }
};

// Fetch all GeneralPosts with status "pending"
module.exports.getPendingPosts = async (req, res) => {
  try {
    const pendingPosts = await prisma.generalPost.findMany({
      where: {
        status: 'pending',
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        MainCategory: true,
        SubCategory: true, // fixed here
        generalReply: true,
        generalLike: true,
      },
    });

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          pendingPosts,
          'Pending GeneralPosts fetched successfully',
        ),
      );
  } catch (error) {
    // Handle unexpected errors
    console.error('Error in getPendingPosts - Unexpected error:', error);
    return res
      .status(500)
      .json(
        new ApiError(
          500,
          'Failed to fetch pending GeneralPosts due to server error',
          error.message,
        ),
      );
  }
};

//fetch all rejected GeneralPosts
module.exports.getRejectedPosts = async (req, res) => {
  try {
    const pendingPosts = await prisma.generalPost.findMany({
      where: {
        status: 'rejected',
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        MainCategory: true,
        SubCategory: true, // fixed here
        generalReply: true,
        generalLike: true,
      },
    });

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          pendingPosts,
          'Rejected GeneralPosts fetched successfully',
        ),
      );
  } catch (error) {
    // Handle unexpected errors
    console.error('Error in getRejectedPosts - Unexpected error:', error);
    return res
      .status(500)
      .json(
        new ApiError(
          500,
          'Failed to fetch rejected GeneralPosts due to server error',
          error.message,
        ),
      );
  }
};
// Fetch all GeneralPosts with status "success"
module.exports.getSuccessPosts = async (req, res) => {
  try {
    const successPosts = await prisma.generalPost.findMany({
      where: {
        status: 'success',
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        MainCategory: true,
        SubCategory: true, // fixed here
        generalReply: true,
        generalLike: true,
      },
    });

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          successPosts,
          'Successful GeneralPosts fetched successfully',
        ),
      );
  } catch (error) {
    // Handle unexpected errors
    console.error('Error in getSuccessPosts - Unexpected error:', error);
    return res
      .status(500)
      .json(
        new ApiError(
          500,
          'Failed to fetch successful GeneralPosts due to server error',
          error.message,
        ),
      );
  }
};

// Fetch all GeneralReplies with status "pending"
module.exports.getPendingReplies = async (req, res) => {
  try {
    const pendingReplies = await prisma.generalReply.findMany({
      where: { status: 'pending' },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        parentReply: true,
        post: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                email: true,
              },
            },
            MainCategory: true,
            SubCategory: true,
          },
        },
      },
    });

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          pendingReplies,
          'Pending GeneralReplies fetched successfully',
        ),
      );
  } catch (error) {
    // Handle unexpected errors
    console.error('Error in getPendingReplies - Unexpected error:', error);
    return res
      .status(500)
      .json(
        new ApiError(
          500,
          'Failed to fetch pending GeneralReplies due to server error',
          error.message,
        ),
      );
  }
};

// --- Fetching by Specific Identifiers ---

// Fetch all GeneralPosts for a specific user
module.exports.getPostsByUserId = async (req, res) => {
  try {
    const userId = validateUserId(req.params);

    // Verify user exists
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new ApiError(404, 'User not found');
    }

    const userPosts = await prisma.generalPost.findMany({
      where: {
        userId,
        status: {
          not: 'draft',
        },
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        MainCategory: true,
        SubCategory: true,
        generalReply: true,
        generalLike: true,
      },
    });

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          userPosts,
          'User GeneralPosts fetched successfully',
        ),
      );
  } catch (error) {
    // Handle known ApiError instances
    if (error instanceof ApiError) {
      console.error(`Error in getPostsByUserId - ${error.message}:`, error);
      return res.status(error.statusCode).json(error);
    }

    // Handle unexpected errors
    console.error('Error in getPostsByUserId - Unexpected error:', error);
    return res
      .status(500)
      .json(
        new ApiError(
          500,
          'Failed to fetch user GeneralPosts due to server error',
          error.message,
        ),
      );
  }
};

// Fetch all GeneralReplies for a specific GeneralPost
module.exports.getRepliesByPostId = async (req, res) => {
  try {
    const postId = validatePostId(req.params);

    // Verify post exists
    const post = await prisma.generalPost.findUnique({ where: { id: postId } });
    if (!post) {
      throw new ApiError(404, 'GeneralPost not found');
    }

    const replies = await prisma.generalReply.findMany({
      where: { postId },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        parentReply: true,
      },
    });

    return res
      .status(200)
      .json(
        new ApiResponse(200, replies, 'GeneralReplies fetched successfully'),
      );
  } catch (error) {
    // Handle known ApiError instances
    if (error instanceof ApiError) {
      console.error(`Error in getRepliesByPostId - ${error.message}:`, error);
      return res.status(error.statusCode).json(error);
    }

    // Handle unexpected errors
    console.error('Error in getRepliesByPostId - Unexpected error:', error);
    return res
      .status(500)
      .json(
        new ApiError(
          500,
          'Failed to fetch GeneralReplies due to server error',
          error.message,
        ),
      );
  }
};

// Fetch the count of GeneralLikes and whether the user liked a specific GeneralPost
module.exports.getLikesByPostId = async (req, res) => {
  try {
    const { postId, userId } = validateGetLikesByPostId(req.params, req.query);

    // Verify post exists
    const post = await prisma.generalPost.findUnique({
      where: { id: postId },
      include: {
        generalLike: true,
      },
    });
    if (!post) {
      throw new ApiError(404, 'GeneralPost not found');
    }

    // Verify user exists if userId is provided
    if (userId) {
      const user = await prisma.user.findUnique({ where: { id: userId } });
      if (!user) {
        throw new ApiError(404, 'User not found');
      }
    }

    // Get total count of likes
    const likesCount = await prisma.generalLike.count({
      where: { postId },
    });

    // Check if the user has liked the post (if userId is provided)
    let hasLiked = false;
    if (userId) {
      const userLike = await prisma.generalLike.findFirst({
        where: { postId, userId },
      });
      hasLiked = !!userLike;
    }

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          { likesCount, hasLiked },
          'GeneralLikes fetched successfully',
        ),
      );
  } catch (error) {
    // Handle known ApiError instances
    if (error instanceof ApiError) {
      console.error(`Error in getLikesByPostId - ${error.message}:`, error);
      return res.status(error.statusCode).json(error);
    }

    // Handle unexpected errors
    console.error('Error in getLikesByPostId - Unexpected error:', error);
    return res
      .status(500)
      .json(
        new ApiError(
          500,
          'Failed to fetch GeneralLikes due to server error',
          error.message,
        ),
      );
  }
};

// Fetch a specific GeneralPost by postId
module.exports.getGeneralPostByPostId = async (req, res) => {
  try {
    const postId = validatePostId(req.params);

    const post = await prisma.generalPost.findFirst({
      where: { id: postId },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        MainCategory: true,
        SubCategory: true, // ✅ fixed
        generalReply: {
          where: { status: 'success' }, // Fetch only successful replies
          select: {
            id: true,
            description: true,
            status: true,
            parentReplyId: true,
            createdAt: true,
            user: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
        generalLike: true,
      },
    });

    if (!post) {
      throw new ApiError(404, 'GeneralPost not found');
    }

    return res
      .status(200)
      .json(new ApiResponse(200, post, 'GeneralPost fetched successfully'));
  } catch (error) {
    // Handle known ApiError instances
    if (error instanceof ApiError) {
      console.error(
        `Error in getGeneralPostByPostId - ${error.message}:`,
        error,
      );
      return res.status(error.statusCode).json(error);
    }

    // Handle unexpected errors
    console.error('Error in getGeneralPostByPostId - Unexpected error:', error);
    return res
      .status(500)
      .json(
        new ApiError(
          500,
          'Failed to fetch GeneralPost due to server error',
          error.message,
        ),
      );
  }
};
