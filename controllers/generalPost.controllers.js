const prisma = require('../models/prismaClient');
const {
  generalPostSchema,
  generalReplySchema,
  generalLikeSchema,
  updateGeneralPostSchema,
} = require('../validation/generalPost.validation');
const { z } = require('zod');
const { ApiResponse } = require('../utils/ApiResponse');
const { ApiError } = require('../utils/ApiError');

// --- Creation Functions ---

// Create a new GeneralPost
const createGeneralPost = async (req, res) => {
  try {
    const validationResult = generalPostSchema.safeParse(req.body);
    if (!validationResult.success) {
      throw new ApiError(
        400,
        'Validation failed',
        validationResult.error.errors,
      );
    }

    const { userId, generalPostMainCategory, generalPostSubCategory, ...data } =
      validationResult.data;

    // Verify user exists
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new ApiError(404, 'User not found');
    }

    // Verify main category exists if provided
    if (generalPostMainCategory) {
      const mainCategory = await prisma.forumMainCategory.findUnique({
        where: { id: generalPostMainCategory },
      });
      if (!mainCategory) {
        throw new ApiError(404, 'Main category not found');
      }
    }

    // Verify sub-category exists if provided
    if (generalPostSubCategory) {
      const subCategory = await prisma.forumSubCategory.findUnique({
        where: { id: generalPostSubCategory },
      });
      if (!subCategory) {
        throw new ApiError(404, 'Sub-category not found');
      }
    }

    const newGeneralPost = await prisma.generalPost.create({
      data: {
        user: { connect: { id: userId } },
        createdBy: user.name,
        MainCategory: generalPostMainCategory
          ? { connect: { id: generalPostMainCategory } }
          : undefined,
        subCategory: generalPostSubCategory
          ? { connect: { id: generalPostSubCategory } }
          : undefined,
        ...data,
      },
    });

    res
      .status(201)
      .json(
        new ApiResponse(
          201,
          newGeneralPost,
          'GeneralPost created successfully',
        ),
      );
  } catch (error) {
    if (error instanceof ApiError) {
      res.status(error.statusCode).json(error);
    } else {
      console.error('Error creating GeneralPost:', error);
      res.status(500).json(new ApiError(500, 'Internal server error'));
    }
  }
};

// Create a new GeneralReply
const createGeneralReply = async (req, res) => {
  try {
    const validationResult = generalReplySchema.safeParse(req.body);
    if (!validationResult.success) {
      throw new ApiError(
        400,
        'Validation failed',
        validationResult.error.errors,
      );
    }

    const { userId, postId, parentReplyId, status, rejectionReason, ...data } =
      validationResult.data;

    // Verify user exists
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new ApiError(404, 'User not found');
    }

    // Verify post exists
    const post = await prisma.generalPost.findUnique({ where: { id: postId } });
    if (!post) {
      throw new ApiError(404, 'Post not found');
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
        status: status || 'pending',
        rejectionReason: rejectionReason || null,
        ...data,
      },
    });

    res
      .status(201)
      .json(
        new ApiResponse(
          201,
          newGeneralReply,
          'GeneralReply created successfully',
        ),
      );
  } catch (error) {
    if (error instanceof ApiError) {
      res.status(error.statusCode).json(error);
    } else {
      console.error('Error creating GeneralReply:', error);
      res.status(500).json(new ApiError(500, 'Internal server error'));
    }
  }
};

// Create or remove a GeneralLike
const createGeneralLike = async (req, res) => {
  try {
    const validationResult = generalLikeSchema.safeParse(req.body);
    if (!validationResult.success) {
      throw new ApiError(
        400,
        'Validation failed',
        validationResult.error.errors,
      );
    }

    const { userId, postId } = validationResult.data;

    // Verify user exists
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new ApiError(404, 'User not found');
    }

    // Verify post exists
    const post = await prisma.generalPost.findUnique({ where: { id: postId } });
    if (!post) {
      throw new ApiError(404, 'Post not found');
    }

    // Check if user already liked the post
    const existingLike = await prisma.generalLike.findFirst({
      where: { userId, postId },
    });

    if (existingLike) {
      // Remove the existing like
      await prisma.generalLike.delete({
        where: { id: existingLike.id },
      });

      // Decrement likesCount in GeneralPost
      await prisma.generalPost.update({
        where: { id: postId },
        data: { likesCount: { decrement: 1 } },
      });

      res
        .status(200)
        .json(new ApiResponse(200, null, 'Like removed successfully'));
    } else {
      // Create new like
      const newGeneralLike = await prisma.generalLike.create({
        data: {
          user: { connect: { id: userId } },
          post: { connect: { id: postId } },
        },
      });

      // Increment likesCount in GeneralPost
      await prisma.generalPost.update({
        where: { id: postId },
        data: { likesCount: { increment: 1 } },
      });

      res
        .status(201)
        .json(new ApiResponse(201, newGeneralLike, 'Like added successfully'));
    }
  } catch (error) {
    if (error instanceof ApiError) {
      res.status(error.statusCode).json(error);
    } else {
      console.error('Error creating/removing GeneralLike:', error);
      res.status(500).json(new ApiError(500, 'Internal server error'));
    }
  }
};

// Update an existing GeneralPost
const updateGeneralPost = async (req, res) => {
  try {
    const postIdSchema = z.object({ postId: z.string().uuid() });
    const postIdValidation = postIdSchema.safeParse(req.params);
    if (!postIdValidation.success) {
      throw new ApiError(400, 'Invalid post ID', postIdValidation.error.errors);
    }

    const bodyValidation = updateGeneralPostSchema.safeParse(req.body);
    if (!bodyValidation.success) {
      throw new ApiError(400, 'Validation failed', bodyValidation.error.errors);
    }

    const { postId } = postIdValidation.data;
    const data = bodyValidation.data;

    // Verify post exists
    const post = await prisma.generalPost.findUnique({ where: { id: postId } });
    if (!post) {
      throw new ApiError(404, 'Post not found');
    }

    const updatedPost = await prisma.generalPost.update({
      where: { id: postId },
      data,
    });

    res
      .status(200)
      .json(
        new ApiResponse(200, updatedPost, 'GeneralPost updated successfully'),
      );
  } catch (error) {
    if (error instanceof ApiError) {
      res.status(error.statusCode).json(error);
    } else {
      console.error('Error updating GeneralPost:', error);
      res.status(500).json(new ApiError(500, 'Internal server error'));
    }
  }
};

// Fetch draft GeneralPosts for a specific user
const getDraftPosts = async (req, res) => {
  try {
    const userIdSchema = z.object({ userId: z.string().uuid() });
    const validationResult = userIdSchema.safeParse(req.params);
    if (!validationResult.success) {
      throw new ApiError(400, 'Invalid user ID', validationResult.error.errors);
    }

    const { userId } = validationResult.data;

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

    res
      .status(200)
      .json(
        new ApiResponse(200, draftPosts, 'Draft posts fetched successfully'),
      );
  } catch (error) {
    if (error instanceof ApiError) {
      res.status(error.statusCode).json(error);
    } else {
      console.error('Error fetching draft posts for user:', error);
      res.status(500).json(new ApiError(500, 'Internal server error'));
    }
  }
};

// Fetch all pending GeneralPosts
const getPendingPosts = async (req, res) => {
  try {
    const pendingPosts = await prisma.generalPost.findMany({
      where: { status: 'pending' },
    });
    res
      .status(200)
      .json(
        new ApiResponse(
          200,
          pendingPosts,
          'Pending posts fetched successfully',
        ),
      );
  } catch (error) {
    console.error('Error fetching pending posts:', error);
    res.status(500).json(new ApiError(500, 'Internal server error'));
  }
};

// Fetch all successful GeneralPosts
const getSuccessPosts = async (req, res) => {
  try {
    const successPosts = await prisma.generalPost.findMany({
      where: { status: 'success' },
    });
    res
      .status(200)
      .json(
        new ApiResponse(
          200,
          successPosts,
          'Successful posts fetched successfully',
        ),
      );
  } catch (error) {
    console.error('Error fetching success posts:', error);
    res.status(500).json(new ApiError(500, 'Internal server error'));
  }
};

// Fetch all pending GeneralReplies
const getPendingReplies = async (req, res) => {
  try {
    const pendingReplies = await prisma.generalReply.findMany({
      where: { status: 'pending' },
    });
    res
      .status(200)
      .json(
        new ApiResponse(
          200,
          pendingReplies,
          'Pending replies fetched successfully',
        ),
      );
  } catch (error) {
    console.error('Error fetching pending replies:', error);
    res.status(500).json(new ApiError(500, 'Internal server error'));
  }
};

// Fetch all GeneralPosts for a specific user
const getPostsByUserId = async (req, res) => {
  try {
    const userIdSchema = z.object({ userId: z.string().uuid() });
    const validationResult = userIdSchema.safeParse(req.params);
    if (!validationResult.success) {
      throw new ApiError(400, 'Invalid user ID', validationResult.error.errors);
    }

    const { userId } = validationResult.data;

    // Verify user exists
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new ApiError(404, 'User not found');
    }

    const userPosts = await prisma.generalPost.findMany({
      where: { userId },
    });

    res
      .status(200)
      .json(new ApiResponse(200, userPosts, 'User posts fetched successfully'));
  } catch (error) {
    if (error instanceof ApiError) {
      res.status(error.statusCode).json(error);
    } else {
      console.error('Error fetching posts by user ID:', error);
      res.status(500).json(new ApiError(500, 'Internal server error'));
    }
  }
};

// Fetch all GeneralReplies for a specific GeneralPost
const getRepliesByPostId = async (req, res) => {
  try {
    const postIdSchema = z.object({ postId: z.string().uuid() });
    const validationResult = postIdSchema.safeParse(req.params);
    if (!validationResult.success) {
      throw new ApiError(400, 'Invalid post ID', validationResult.error.errors);
    }

    const { postId } = validationResult.data;

    const post = await prisma.generalPost.findUnique({ where: { id: postId } });
    if (!post) {
      throw new ApiError(404, 'Post not found');
    }

    const replies = await prisma.generalReply.findMany({
      where: { postId },
    });

    res
      .status(200)
      .json(new ApiResponse(200, replies, 'Replies fetched successfully'));
  } catch (error) {
    if (error instanceof ApiError) {
      res.status(error.statusCode).json(error);
    } else {
      console.error('Error fetching replies by post ID:', error);
      res.status(500).json(new ApiError(500, 'Internal server error'));
    }
  }
};

// Fetch the like count and user like status for a specific GeneralPost
const getLikesByPostId = async (req, res) => {
  try {
    const schema = z.object({
      postId: z.string().uuid(),
      userId: z.string().uuid().optional(),
    });
    const validationResult = schema.safeParse({
      postId: req.params.postId,
      userId: req.query.userId,
    });
    if (!validationResult.success) {
      throw new ApiError(400, 'Invalid input', validationResult.error.errors);
    }

    const { postId, userId } = validationResult.data;

    const post = await prisma.generalPost.findUnique({ where: { id: postId } });
    if (!post) {
      throw new ApiError(404, 'Post not found');
    }

    const likesCount = await prisma.generalLike.count({ where: { postId } });

    let hasLiked = false;
    if (userId) {
      const userLike = await prisma.generalLike.findFirst({
        where: { postId, userId },
      });
      hasLiked = !!userLike;
    }

    res
      .status(200)
      .json(
        new ApiResponse(
          200,
          { likesCount, hasLiked },
          'Likes count and status fetched successfully',
        ),
      );
  } catch (error) {
    if (error instanceof ApiError) {
      res.status(error.statusCode).json(error);
    } else {
      console.error('Error fetching likes count and status:', error);
      res.status(500).json(new ApiError(500, 'Internal server error'));
    }
  }
};

// Fetch a specific GeneralPost by postId
const getGeneralPostByPostId = async (req, res) => {
  try {
    const postIdSchema = z.object({ postId: z.string().uuid() });
    const validationResult = postIdSchema.safeParse(req.params);
    if (!validationResult.success) {
      throw new ApiError(400, 'Invalid post ID', validationResult.error.errors);
    }

    const { postId } = validationResult.data;

    const post = await prisma.generalPost.findUnique({ where: { id: postId } });

    if (!post) {
      throw new ApiError(404, 'Post not found');
    }

    res
      .status(200)
      .json(new ApiResponse(200, post, 'Post fetched successfully'));
  } catch (error) {
    if (error instanceof ApiError) {
      res.status(error.statusCode).json(error);
    } else {
      console.error('Error fetching post by post ID:', error);
      res.status(500).json(new ApiError(500, 'Internal server error'));
    }
  }
};

module.exports = {
  createGeneralPost,
  createGeneralReply,
  createGeneralLike,
  updateGeneralPost,
  getDraftPosts,
  getPendingPosts,
  getSuccessPosts,
  getPendingReplies,
  getPostsByUserId,
  getRepliesByPostId,
  getLikesByPostId,
  getGeneralPostByPostId,
};
