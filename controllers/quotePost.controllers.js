const prisma = require('../models/prismaClient');
const {
  quotePostSchema,
  quoteReplySchema,
  quoteLikeSchema,
  updateQuotePostSchema,
} = require('../validation/quotePost.validation');
const { z } = require('zod');
const { ApiResponse } = require('../utils/ApiResponse');
const { ApiError } = require('../utils/ApiError');

// --- Creation Functions ---

// Create a new QuotePost
module.exports.createQuotePost = async (req, res) => {
  try {
    const validationResult = quotePostSchema.safeParse(req.body);
    if (!validationResult.success) {
      throw new ApiError(
        400,
        'Validation failed',
        validationResult.error.errors,
      );
    }

    const { userId, postMainCategory, postSubCategory, ...data } =
      validationResult.data;

    // Verify user exists
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new ApiError(404, 'User not found');
    }

    // Verify main category exists if provided
    if (postMainCategory) {
      const mainCategory = await prisma.forumMainCategory.findUnique({
        where: { id: postMainCategory },
      });
      if (!mainCategory) {
        throw new ApiError(404, 'Main category not found');
      }
    }

    // Verify subcategory exists if provided
    if (postSubCategory) {
      const subCategory = await prisma.forumSubCategory.findUnique({
        where: { id: postSubCategory },
      });
      if (!subCategory) {
        throw new ApiError(404, 'Subcategory not found');
      }
    }

    const newQuotePost = await prisma.quotePost.create({
      data: {
        user: { connect: { id: userId } },
        mainCategory: postMainCategory
          ? { connect: { id: postMainCategory } }
          : undefined,
        subCategory: postSubCategory
          ? { connect: { id: postSubCategory } }
          : undefined,
        ...data,
      },
    });

    res
      .status(201)
      .json(
        new ApiResponse(201, newQuotePost, 'QuotePost created successfully'),
      );
  } catch (error) {
    if (error instanceof ApiError) {
      res.status(error.statusCode).json(error);
    } else {
      console.error('Error creating QuotePost:', error);
      res.status(500).json(new ApiError(500, 'Internal server error'));
    }
  }
};

// Create a new QuoteReply
module.exports.createQuoteReply = async (req, res) => {
  try {
    const validationResult = quoteReplySchema.safeParse(req.body);
    if (!validationResult.success) {
      throw new ApiError(
        400,
        'Validation failed',
        validationResult.error.errors,
      );
    }

    const { userId, postId, parentReplyId, ...data } = validationResult.data;

    // Verify user exists
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new ApiError(404, 'User not found');
    }

    // Verify post exists
    const post = await prisma.quotePost.findUnique({ where: { id: postId } });
    if (!post) {
      throw new ApiError(404, 'Post not found');
    }

    // Verify parentReplyId if provided
    if (parentReplyId) {
      const parentReply = await prisma.quoteReply.findUnique({
        where: { id: parentReplyId },
      });
      if (!parentReply) {
        throw new ApiError(404, 'Parent reply not found');
      }
    }

    const newQuoteReply = await prisma.quoteReply.create({
      data: {
        user: { connect: { id: userId } },
        post: { connect: { id: postId } },
        parentReplyId,
        ...data,
      },
    });

    res
      .status(201)
      .json(
        new ApiResponse(201, newQuoteReply, 'QuoteReply created successfully'),
      );
  } catch (error) {
    if (error instanceof ApiError) {
      res.status(error.statusCode).json(error);
    } else {
      console.error('Error creating QuoteReply:', error);
      res.status(500).json(new ApiError(500, 'Internal server error'));
    }
  }
};

// Create or remove a QuoteLike
module.exports.createQuoteLike = async (req, res) => {
  try {
    const validationResult = quoteLikeSchema.safeParse(req.body);
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
    const post = await prisma.quotePost.findUnique({ where: { id: postId } });
    if (!post) {
      throw new ApiError(404, 'Post not found');
    }

    // Check if user already liked the post
    const existingLike = await prisma.quoteLike.findFirst({
      where: { userId, postId },
    });

    if (existingLike) {
      // Remove the existing like
      await prisma.quoteLike.delete({
        where: { id: existingLike.id },
      });

      // Decrement likesCount in QuotePost
      await prisma.quotePost.update({
        where: { id: postId },
        data: { likesCount: { decrement: 1 } },
      });

      res
        .status(200)
        .json(new ApiResponse(200, null, 'Like removed successfully'));
    } else {
      // Create new like
      const newQuoteLike = await prisma.quoteLike.create({
        data: {
          user: { connect: { id: userId } },
          post: { connect: { id: postId } },
        },
      });

      // Increment likesCount in QuotePost
      await prisma.quotePost.update({
        where: { id: postId },
        data: { likesCount: { increment: 1 } },
      });

      res
        .status(201)
        .json(new ApiResponse(201, newQuoteLike, 'Like added successfully'));
    }
  } catch (error) {
    if (error instanceof ApiError) {
      res.status(error.statusCode).json(error);
    } else {
      console.error('Error creating/removing QuoteLike:', error);
      res.status(500).json(new ApiError(500, 'Internal server error'));
    }
  }
};

// Update an existing QuotePost
module.exports.updateQuotePost = async (req, res) => {
  try {
    const postIdSchema = z.object({ postId: z.string().uuid() });
    const postIdValidation = postIdSchema.safeParse(req.params);
    if (!postIdValidation.success) {
      throw new ApiError(400, 'Invalid post ID', postIdValidation.error.errors);
    }

    const bodyValidation = updateQuotePostSchema.safeParse(req.body);
    if (!bodyValidation.success) {
      throw new ApiError(400, 'Validation failed', bodyValidation.error.errors);
    }

    const { postId } = postIdValidation.data;
    const data = bodyValidation.data;

    // Verify post exists
    const post = await prisma.quotePost.findUnique({ where: { id: postId } });
    if (!post) {
      throw new ApiError(404, 'Post not found');
    }

    const updatedPost = await prisma.quotePost.update({
      where: { id: postId },
      data,
    });

    res
      .status(200)
      .json(
        new ApiResponse(200, updatedPost, 'QuotePost updated successfully'),
      );
  } catch (error) {
    if (error instanceof ApiError) {
      res.status(error.statusCode).json(error);
    } else {
      console.error('Error updating QuotePost:', error);

      res.status(500).json(new ApiError(500, 'Internal server error'));
    }
  }
};

// --- General Fetching Functions ---

// Fetch draft QuotePosts for a specific user
module.exports.getDraftPosts = async (req, res) => {
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

    const draftPosts = await prisma.quotePost.findMany({
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
      console.error('Error fetching draft posts:', error);
      res.status(500).json(new ApiError(500, 'Internal server error'));
    }
  }
};

// Fetch all QuotePosts with status "pending"
module.exports.getPendingPosts = async (req, res) => {
  try {
    const pendingPosts = await prisma.quotePost.findMany({
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

// Fetch all QuotePosts with status "success"
module.exports.getSuccessPosts = async (req, res) => {
  try {
    const successPosts = await prisma.quotePost.findMany({
      where: { status: 'success' },
    });
    res
      .status(200)
      .json(
        new ApiResponse(
          200,
          successPosts,
          'Success posts fetched successfully',
        ),
      );
  } catch (error) {
    console.error('Error fetching success posts:', error);
    res.status(500).json(new ApiError(500, 'Internal server error'));
  }
};

// Fetch all QuoteReplies with status "pending"
module.exports.getPendingReplies = async (req, res) => {
  try {
    const pendingReplies = await prisma.quoteReply.findMany({
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

// --- Fetching by Specific Identifiers ---

// Fetch all QuotePosts for a specific user
module.exports.getPostsByUserId = async (req, res) => {
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

    const userPosts = await prisma.quotePost.findMany({
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

// Fetch all QuoteReplies for a specific QuotePost with status "success"
module.exports.getRepliesByPostId = async (req, res) => {
  try {
    const postIdSchema = z.object({ postId: z.string().uuid() });
    const validationResult = postIdSchema.safeParse(req.params);
    if (!validationResult.success) {
      throw new ApiError(400, 'Invalid post ID', validationResult.error.errors);
    }

    const { postId } = validationResult.data;

    // Verify post exists
    const post = await prisma.quotePost.findUnique({
      where: { id: postId },
    });
    if (!post) {
      throw new ApiError(404, 'Post not found');
    }

    // Check post status
    if (post.status !== 'success') {
      throw new ApiError(400, 'Post is not in success status');
    }

    const replies = await prisma.quoteReply.findMany({
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

// Fetch the count of QuoteLikes and whether the user liked a specific QuotePost
module.exports.getLikesByPostId = async (req, res) => {
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
      throw new ApiError(
        400,
        'Validation failed',
        validationResult.error.errors,
      );
    }

    const { postId, userId } = validationResult.data;

    // Verify post exists
    const post = await prisma.quotePost.findUnique({ where: { id: postId } });
    if (!post) {
      throw new ApiError(404, 'Post not found');
    }

    // Verify user exists if userId is provided
    if (userId) {
      const user = await prisma.user.findUnique({ where: { id: userId } });
      if (!user) {
        throw new ApiError(404, 'User not found');
      }
    }

    // Get total count of likes
    const likesCount = await prisma.quoteLike.count({
      where: { postId },
    });

    // Check if the user has liked the post (if userId is provided)
    let hasLiked = false;
    if (userId) {
      const userLike = await prisma.quoteLike.findFirst({
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
          'Likes fetched successfully',
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

// Fetch a specific QuotePost by postId
module.exports.getQuotePostByPostId = async (req, res) => {
  try {
    const postIdSchema = z.object({ postId: z.string().uuid() });
    const validationResult = postIdSchema.safeParse(req.params);
    if (!validationResult.success) {
      throw new ApiError(400, 'Invalid post ID', validationResult.error.errors);
    }

    const { postId } = validationResult.data;

    const post = await prisma.quotePost.findUnique({
      where: { id: postId },
    });

    if (!post) {
      throw new ApiError(404, 'Post not found');
    }

    res
      .status(200)
      .json(new ApiResponse(200, post, 'QuotePost fetched successfully'));
  } catch (error) {
    if (error instanceof ApiError) {
      res.status(error.statusCode).json(error);
    } else {
      console.error('Error fetching post by post ID:', error);
      res.status(500).json(new ApiError(500, 'Internal server error'));
    }
  }
};
