const prisma = require('../models/prismaClient');
const {
  validateCreateQuotePost,
  validateCreateQuoteReply,
  validateCreateQuoteLike,
  validateUpdateQuotePost,
  validateUserId,
  validatePostId,
  validateGetLikesByPostId,
  quoteReplySchemaUpdate,
} = require('../validation/quotePost.validation');
const { ApiResponse } = require('../utils/ApiResponse');
const { ApiError } = require('../utils/ApiError');
const { z } = require('zod');

// --- Creation Functions ---

// Create a new QuotePost
module.exports.createQuotePost = async (req, res) => {
  try {
    const { userId, postMainCategory, postSubCategory, ...data } =
      validateCreateQuotePost(req.body);

    // Verify user exists
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new ApiError(404, 'User not found');
    }

    // Verify main category exists if provided
    let mainCategory = null;
    if (postMainCategory) {
      mainCategory = await prisma.forumMainCategory.findUnique({
        where: { id: postMainCategory },
      });
      if (!mainCategory) {
        throw new ApiError(404, 'Main category not found');
      }
    }

    // Verify subcategory exists if provided
    let subCategory = null;
    if (postSubCategory) {
      subCategory = await prisma.forumSubCategory.findUnique({
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
        name: user.name,
        MainCategoryName: mainCategory ? mainCategory.name : null,
        SubCategoryName: subCategory ? subCategory.name : null,
        ...data,
      },
    });

    return res
      .status(201)
      .json(
        new ApiResponse(201, newQuotePost, 'QuotePost created successfully'),
      );
  } catch (error) {
    // Handle Prisma-specific errors
    if (error.code === 'P2003') {
      console.error(
        `Error in createQuotePost - Foreign key constraint failed:`,
        error,
      );
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

    // Handle known ApiError instances
    if (error instanceof ApiError) {
      console.error(`Error in createQuotePost - ${error.message}:`, error);
      return res.status(error.statusCode).json(error);
    }

    // Handle unexpected errors
    console.error('Error in createQuotePost - Unexpected error:', error);
    return res
      .status(500)
      .json(
        new ApiError(
          500,
          'Failed to create QuotePost due to server error',
          error.message,
        ),
      );
  }
};

// Create a new QuoteReply
module.exports.createQuoteReply = async (req, res) => {
  try {
    const { userId, postId, parentReplyId, ...data } = validateCreateQuoteReply(
      req.body,
    );

    // Verify user exists
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new ApiError(404, 'User not found');
    }

    // Verify post exists
    const post = await prisma.quotePost.findUnique({ where: { id: postId } });
    if (!post) {
      throw new ApiError(404, 'QuotePost not found');
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
        parentReply: parentReplyId
          ? { connect: { id: parentReplyId } }
          : undefined,
        ...data,
      },
    });

    return res
      .status(201)
      .json(
        new ApiResponse(201, newQuoteReply, 'QuoteReply created successfully'),
      );
  } catch (error) {
    // Handle Prisma-specific errors
    if (error.code === 'P2003') {
      console.error(
        `Error in createQuoteReply - Foreign key constraint failed:`,
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

    // Handle known ApiError instances
    if (error instanceof ApiError) {
      console.error(`Error in createQuoteReply - ${error.message}:`, error);
      return res.status(error.statusCode).json(error);
    }

    // Handle unexpected errors
    console.error('Error in createQuoteReply - Unexpected error:', error);
    return res
      .status(500)
      .json(
        new ApiError(
          500,
          'Failed to create QuoteReply due to server error',
          error.message,
        ),
      );
  }
};

// Create or remove a QuoteLike
module.exports.createQuoteLike = async (req, res) => {
  try {
    const { userId, postId } = validateCreateQuoteLike(req.body);

    // Verify user exists
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new ApiError(404, 'User not found');
    }

    // Verify post exists
    const post = await prisma.quotePost.findUnique({ where: { id: postId } });
    if (!post) {
      throw new ApiError(404, 'QuotePost not found');
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

      return res
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

      return res
        .status(201)
        .json(new ApiResponse(201, newQuoteLike, 'Like added successfully'));
    }
  } catch (error) {
    // Handle Prisma-specific errors
    if (error.code === 'P2003') {
      console.error(
        `Error in createQuoteLike - Foreign key constraint failed:`,
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
        `Error in createQuoteLike - Record not found for deletion:`,
        error,
      );
      return res
        .status(404)
        .json(new ApiError(404, 'Like not found for removal', error.message));
    }

    // Handle known ApiError instances
    if (error instanceof ApiError) {
      console.error(`Error in createQuoteLike - ${error.message}:`, error);
      return res.status(error.statusCode).json(error);
    }

    // Handle unexpected errors
    console.error('Error in createQuoteLike - Unexpected error:', error);
    return res
      .status(500)
      .json(
        new ApiError(
          500,
          'Failed to create or remove QuoteLike due to server error',
          error.message,
        ),
      );
  }
};

// Update an existing QuotePost
module.exports.updateQuotePost = async (req, res) => {
  try {
    const { postId, data } = validateUpdateQuotePost(req.params, req.body);

    // Verify post exists
    const post = await prisma.quotePost.findUnique({ where: { id: postId } });
    if (!post) {
      throw new ApiError(404, 'QuotePost not found');
    }

    // Verify main category exists if provided
    if (data.postMainCategory) {
      const mainCategory = await prisma.forumMainCategory.findUnique({
        where: { id: data.postMainCategory },
      });
      if (!mainCategory) {
        throw new ApiError(404, 'Main category not found');
      }
      data.mainCategory = { connect: { id: data.postMainCategory } };
      delete data.postMainCategory;
    }

    // Verify subcategory exists if provided
    if (data.postSubCategory) {
      const subCategory = await prisma.forumSubCategory.findUnique({
        where: { id: data.postSubCategory },
      });
      if (!subCategory) {
        throw new ApiError(404, 'Subcategory not found');
      }
      data.subCategory = { connect: { id: data.postSubCategory } };
      delete data.postSubCategory;
    }

    const updatedPost = await prisma.quotePost.update({
      where: { id: postId },
      data,
    });

    return res
      .status(200)
      .json(
        new ApiResponse(200, updatedPost, 'QuotePost updated successfully'),
      );
  } catch (error) {
    // Handle Prisma-specific errors
    if (error.code === 'P2025') {
      console.error(
        `Error in updateQuotePost - Record not found for update:`,
        error,
      );
      return res
        .status(404)
        .json(new ApiError(404, 'QuotePost not found', error.message));
    }
    if (error.code === 'P2003') {
      console.error(
        `Error in updateQuotePost - Foreign key constraint failed:`,
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

    // Handle known ApiError instances
    if (error instanceof ApiError) {
      console.error(`Error in updateQuotePost - ${error.message}:`, error);
      return res.status(error.statusCode).json(error);
    }

    // Handle unexpected errors
    console.error('Error in updateQuotePost - Unexpected error:', error);
    return res
      .status(500)
      .json(
        new ApiError(
          500,
          'Failed to update QuotePost due to server error',
          error.message,
        ),
      );
  }
};
// Zod schema for updateQuoteReply
const updateQuoteReplySchema = z.object({
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

// Update QuoteReply
module.exports.updateQuoteReply = async (req, res) => {
  try {
    // Validate input data
    const parseResult = updateQuoteReplySchema.safeParse({
      params: req.params,
      body: req.body,
    });
    if (!parseResult.success) {
      throw new ApiError(400, 'Invalid input data', parseResult.error.errors);
    }

    const { replyId } = parseResult.data.params;
    const { postId, parentReplyId, ...data } = parseResult.data.body;

    // Verify reply exists
    const reply = await prisma.quoteReply.findUnique({
      where: { id: replyId },
    });
    if (!reply) {
      throw new ApiError(404, 'QuoteReply not found');
    }

    // Prepare update data
    const updateData = { ...data };

    // Verify post exists if postId is provided
    if (postId) {
      const post = await prisma.quotePost.findUnique({ where: { id: postId } });
      if (!post) {
        throw new ApiError(404, 'QuotePost not found');
      }
      updateData.post = { connect: { id: postId } };
    }

    // Verify parent reply exists if parentReplyId is provided
    if (parentReplyId) {
      const parentReply = await prisma.quoteReply.findUnique({
        where: { id: parentReplyId },
      });
      if (!parentReply) {
        throw new ApiError(404, 'Parent QuoteReply not found');
      }
      updateData.parentReply = { connect: { id: parentReplyId } };
    } else if (parentReplyId === null) {
      updateData.parentReply = { disconnect: true };
    }

    // Update the reply
    const updatedReply = await prisma.quoteReply.update({
      where: { id: replyId },
      data: updateData,
    });

    return res
      .status(200)
      .json(
        new ApiResponse(200, updatedReply, 'QuoteReply updated successfully'),
      );
  } catch (error) {
    // Handle Prisma-specific errors
    if (error.code === 'P2025') {
      console.error('Record not found for update:', error);
      return res
        .status(404)
        .json(new ApiError(404, 'QuoteReply not found', error.message));
    }
    if (error.code === 'P2003') {
      console.error('Foreign key constraint failed:', error);
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
      console.error('Unique constraint violation:', error);
      return res
        .status(409)
        .json(
          new ApiError(
            409,
            'Unique constraint violation on QuoteReply',
            error.message,
          ),
        );
    }
    if (error.code === 'P2011') {
      console.error('Null constraint violation:', error);
      return res
        .status(400)
        .json(
          new ApiError(
            400,
            'Required field missing in QuoteReply update',
            error.message,
          ),
        );
    }

    // Handle known ApiError instances
    if (error instanceof ApiError) {
      console.error(`Error in updateQuoteReply: ${error.message}`, error);
      return res.status(error.statusCode).json(error);
    }

    // Handle unexpected errors
    console.error('Unexpected error in updateQuoteReply:', error);
    return res
      .status(500)
      .json(
        new ApiError(
          500,
          'Failed to update QuoteReply due to server error',
          error.message,
        ),
      );
  }
};

// --- General Fetching Functions ---

// Fetch draft QuotePosts for a specific user
module.exports.getDraftPosts = async (req, res) => {
  try {
    const userId = validateUserId(req.params);

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

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          draftPosts,
          'Draft QuotePosts fetched successfully',
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
          'Failed to fetch draft QuotePosts due to server error',
          error.message,
        ),
      );
  }
};

// Fetch all QuotePosts with status "pending"
module.exports.getPendingPosts = async (req, res) => {
  try {
    const pendingPosts = await prisma.quotePost.findMany({
      where: { status: 'pending' },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        mainCategory: true,
        subCategory: true,
        quoteReply: true,
      },
    });

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          pendingPosts,
          'Pending QuotePosts fetched successfully',
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
          'Failed to fetch pending QuotePosts due to server error',
          error.message,
        ),
      );
  }
};
// Fetch all QuotePosts with status "rejected"
module.exports.getRejectedPosts = async (req, res) => {
  try {
    const pendingPosts = await prisma.quotePost.findMany({
      where: { status: 'rejected' },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        mainCategory: true,
        subCategory: true,
        quoteReply: true,
      },
    });

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          pendingPosts,
          'Rejected QuotePosts fetched successfully',
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
          'Failed to fetch rejected QuotePosts due to server error',
          error.message,
        ),
      );
  }
};
// Fetch all QuotePosts with status "success"
module.exports.getSuccessPosts = async (req, res) => {
  try {
    const successPosts = await prisma.quotePost.findMany({
      where: { status: 'success' },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        mainCategory: true,
        subCategory: true,
        quoteReply: true,
        quoteLike: true,
      },
    });

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          successPosts,
          'Successful QuotePosts fetched successfully',
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
          'Failed to fetch successful QuotePosts due to server error',
          error.message,
        ),
      );
  }
};

// Fetch all QuoteReplies with status "pending"
module.exports.getPendingReplies = async (req, res) => {
  try {
    const pendingReplies = await prisma.quoteReply.findMany({
      where: { status: 'pending' },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        post: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                email: true,
              },
            },
            mainCategory: true,
            subCategory: true,
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
          'Pending QuoteReplies fetched successfully',
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
          'Failed to fetch pending QuoteReplies due to server error',
          error.message,
        ),
      );
  }
};

// --- Fetching by Specific Identifiers ---

// Fetch all QuotePosts for a specific user
module.exports.getPostsByUserId = async (req, res) => {
  try {
    const userId = validateUserId(req.params);

    // Verify user exists
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new ApiError(404, 'User not found');
    }

    const userPosts = await prisma.quotePost.findMany({
      where: { userId },
      include: {
        mainCategory: true,
        subCategory: true,
        quoteReply: true,
        quoteLike: true,
      },
    });

    return res
      .status(200)
      .json(
        new ApiResponse(200, userPosts, 'User QuotePosts fetched successfully'),
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
          'Failed to fetch user QuotePosts due to server error',
          error.message,
        ),
      );
  }
};

// Fetch all QuoteReplies for a specific QuotePost with status "success"
module.exports.getRepliesByPostId = async (req, res) => {
  try {
    const postId = validatePostId(req.params);

    // Verify post exists
    const post = await prisma.quotePost.findUnique({
      where: { id: postId },
    });
    if (!post) {
      throw new ApiError(404, 'QuotePost not found');
    }

    // Check post status
    if (post.status !== 'success') {
      throw new ApiError(400, 'QuotePost is not in success status');
    }

    const replies = await prisma.quoteReply.findMany({
      where: { postId },
    });

    return res
      .status(200)
      .json(new ApiResponse(200, replies, 'QuoteReplies fetched successfully'));
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
          'Failed to fetch QuoteReplies due to server error',
          error.message,
        ),
      );
  }
};

// Fetch the count of QuoteLikes and whether the user liked a specific QuotePost
module.exports.getLikesByPostId = async (req, res) => {
  try {
    const { postId, userId } = validateGetLikesByPostId(req.params, req.query);

    // Verify post exists
    const post = await prisma.quotePost.findFirst({
      where: { id: postId },
      include: {
        quoteLike: true,
      },
    });

    if (!post) {
      throw new ApiError(404, 'QuotePost not found');
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

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          { likesCount, hasLiked },
          'QuoteLikes fetched successfully',
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
          'Failed to fetch QuoteLikes due to server error',
          error.message,
        ),
      );
  }
};

// Fetch a specific QuotePost by postId
module.exports.getQuotePostByPostId = async (req, res) => {
  try {
    const postId = validatePostId(req.params);

    const post = await prisma.quotePost.findUnique({
      where: { id: postId },
      include: {
        user: true,
        mainCategory: true,
        subCategory: true,
        quoteReply: true,
        quoteLike: true,
      },
    });

    if (!post) {
      throw new ApiError(404, 'QuotePost not found');
    }

    return res
      .status(200)
      .json(new ApiResponse(200, post, 'QuotePost fetched successfully'));
  } catch (error) {
    // Handle known ApiError instances
    if (error instanceof ApiError) {
      console.error(`Error in getQuotePostByPostId - ${error.message}:`, error);
      return res.status(error.statusCode).json(error);
    }

    // Handle unexpected errors
    console.error('Error in getQuotePostByPostId - Unexpected error:', error);
    return res
      .status(500)
      .json(
        new ApiError(
          500,
          'Failed to fetch QuotePost due to server error',
          error.message,
        ),
      );
  }
};
