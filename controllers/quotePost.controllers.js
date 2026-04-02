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
// Old email templates - no longer needed
// const {
//   quotePostAcceptedTemplate,
//   quotePostRejectedTemplate,
//   quotePostCreatedTemplate,
//   quoteReplyAcceptedTemplate,
//   quoteReplyRejectedTemplate,
// } = require('../utils/emailTemplates');
const { notifyUser } = require('./notification.controller.js');
const incotermDescriptions = {
  EXW: 'Seller delivers when goods are placed at the disposal of the buyer, not cleared for export and not loaded on any collecting vehicle.',
  FCA: 'Seller delivers the goods, cleared for export, to the carrier nominated by the buyer at the named place.',
  FAS: 'Seller delivers when the goods are placed alongside the vessel at the named port of shipment.',
  FOB: "Seller delivers when the goods pass the ship's rail at the named port of shipment.",
  CFR: "Seller delivers when the goods pass the ship's rail at the port of shipment and must pay the costs and freight to bring the goods to the named port of destination.",
  CIF: "Seller delivers when the goods pass the ship's rail at the port of shipment, pays the costs, freight, and insurance to bring the goods to the named port of destination.",
  CPT: 'Seller delivers the goods to the carrier at an agreed place and pays the costs of carriage to the named destination.',
  CIP: 'Seller delivers the goods to the carrier at an agreed place, pays the costs of carriage, and insurance to the named destination.',
  DPU: 'Seller delivers the goods at the disposal of the buyer at the named place of destination, unloaded but not cleared for import.',
  DAP: 'Seller delivers the goods at the disposal of the buyer at the named place of destination, not unloaded, cleared for export but not for import.',
  DDP: 'Seller delivers the goods to the buyer, cleared for import, at the named place of destination, bearing all costs and risks.',
};

// --- Creation Functions ---

// Create a new QuotePost
module.exports.createQuotePost = async (req, res) => {
  try {
    const validatedData = validateCreateQuotePost(req.body);
    const {
      userId,
      postMainCategory,
      postSubCategory,
      formId,
      postFieldValues,
      ...data
    } = validatedData;

    // 1. Validate user
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new ApiError(404, 'User not found');

    // 2. Validate main category
    let mainCategory = null;
    if (postMainCategory) {
      mainCategory = await prisma.forumMainCategory.findUnique({
        where: { id: postMainCategory },
      });
      if (!mainCategory) throw new ApiError(404, 'Main category not found');
    }

    // 3. Validate sub category
    let subCategory = null;
    if (postSubCategory) {
      subCategory = await prisma.forumSubCategory.findUnique({
        where: { id: postSubCategory },
      });
      if (!subCategory) throw new ApiError(404, 'Subcategory not found');
    }

    // 4. Validate form and fields
    let form = null;
    if (formId) {
      form = await prisma.form.findUnique({
        where: { id: formId },
        include: { sections: { include: { fields: true } } },
      });
      if (!form) throw new ApiError(404, 'Form not found');
    }

    // 5. Inject incoterm info if applicable
    if (data.incoterm) {
      const incotermInfo = incotermDescriptions[data.incoterm];
      if (!incotermInfo) throw new ApiError(400, 'Invalid Incoterm provided');
      data.incotermInfo = incotermInfo;
    }

    // 6. Create QuotePost with PostFieldValues in transaction
    const newQuotePost = await prisma.$transaction(async (tx) => {
      const post = await tx.quotePost.create({
        data: {
          user: { connect: { id: userId } },
          mainCategory: postMainCategory
            ? { connect: { id: postMainCategory } }
            : undefined,
          subCategory: postSubCategory
            ? { connect: { id: postSubCategory } }
            : undefined,
          form: formId ? { connect: { id: formId } } : undefined,
          name: user.name,
          ...data,
        },
      });

      if (postFieldValues && form) {
        const validFieldIds = form.sections.flatMap((section) =>
          section.fields.map((field) => field.id),
        );

        for (const { fieldId, value } of postFieldValues) {
          if (!validFieldIds.includes(fieldId)) {
            throw new ApiError(
              404,
              `Field ${fieldId} not found in form ${formId}`,
            );
          }

          const field = await tx.field.findUnique({
            where: { id: fieldId },
            include: { section: true },
          });

          if (!field || field.section.formId !== formId) {
            throw new ApiError(
              404,
              `Field ${fieldId} not associated with form ${formId}`,
            );
          }

          // Type checks
          if (field.type === 'NUMBER' && isNaN(parseFloat(value))) {
            throw new ApiError(400, `Field ${field.label} must be a number`);
          }
          if (field.type === 'DATE' && !Date.parse(value)) {
            throw new ApiError(
              400,
              `Field ${field.label} must be a valid date`,
            );
          }
          if (
            ['DROPDOWN', 'RADIO', 'CHECKBOX'].includes(field.type) &&
            field.options.length > 0 &&
            !field.options.includes(value)
          ) {
            throw new ApiError(
              400,
              `Field ${field.label} must be one of: ${field.options.join(', ')}`,
            );
          }

          await tx.postFieldValue.create({
            data: {
              postId: post.id, // ✅ this is now unambiguous
              fieldId,
              value,
            },
          });
        }
      }

      return post;
    });

    // 7. Notify user
    const notificationType = 'QUOTE_POST_CREATED';
    const emailData = {
      title: newQuotePost.title,
      description: newQuotePost.description,
    };
    await notifyUser(
      userId,
      notificationType,
      { postId: newQuotePost.id },
      emailData,
    );

    // 8. Return success
    return res
      .status(201)
      .json(
        new ApiResponse(201, newQuotePost, 'QuotePost created successfully'),
      );
  } catch (error) {
    console.error('Error in createQuotePost:', error);

    if (error instanceof z.ZodError) {
      return res
        .status(400)
        .json(new ApiError(400, 'Invalid input data', error.errors));
    }

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
        .json(new ApiError(409, 'Unique constraint violation', error.message));
    }

    if (error instanceof ApiError) {
      return res.status(error.statusCode).json(error);
    }

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
    const validatedData = validateCreateQuoteReply(req.body);
    console.log('Validated data for createQuoteReply:', validatedData);
    const { userId, postId, parentReplyId, ...data } = validatedData;

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

    console.log('Data to create QuoteReply:', data);
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

    if (error instanceof z.ZodError) {
      console.error('Validation error in createQuoteReply:', error.errors);
      return res
        .status(400)
        .json(new ApiError(400, 'Invalid input data', error.errors));
    }

    if (error instanceof ApiError) {
      console.error(`Error in createQuoteReply - ${error.message}:`, error);
      return res.status(error.statusCode).json(error);
    }

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
    console.log('Received postFieldValues:', data.postFieldValues);

    const post = await prisma.quotePost.findUnique({ where: { id: postId } });
    if (!post) {
      throw new ApiError(404, 'QuotePost not found');
    }

    const updateData = { ...data };

    if (updateData.postMainCategory) {
      const mainCategory = await prisma.forumMainCategory.findUnique({
        where: { id: updateData.postMainCategory },
      });
      if (!mainCategory) {
        throw new ApiError(404, 'Main category not found');
      }
      updateData.mainCategory = {
        connect: { id: updateData.postMainCategory },
      };
      delete updateData.postMainCategory;
    }

    if (updateData.postSubCategory) {
      const subCategory = await prisma.forumSubCategory.findUnique({
        where: { id: updateData.postSubCategory },
      });
      if (!subCategory) {
        throw new ApiError(404, 'Subcategory not found');
      }
      updateData.subCategory = { connect: { id: updateData.postSubCategory } };
      delete updateData.postSubCategory;
    }

    if (updateData.formId) {
      const form = await prisma.form.findUnique({
        where: { id: updateData.formId },
      });
      if (!form) {
        throw new ApiError(404, 'Form not found');
      }
      updateData.form = { connect: { id: updateData.formId } };
      delete updateData.formId;
    } else if (updateData.formId === null) {
      updateData.form = { disconnect: true };
    }

    if (updateData.postFieldValues) {
      updateData.postFieldValues = {
        deleteMany: { postId },
        create: updateData.postFieldValues.map(({ fieldId, value }) => ({
          field: { connect: { id: fieldId } },
          value,
        })),
      };
    }

    if (updateData.incoterm) {
      const incotermInfo = incotermDescriptions[updateData.incoterm];
      if (!incotermInfo) {
        throw new ApiError(400, 'Invalid Incoterm provided');
      }
      updateData.incotermInfo = incotermInfo;
    }

    const filteredUpdateData = Object.fromEntries(
      Object.entries({
        updatedAt: new Date(),
        title: updateData.title ?? post.title,
        description: updateData.description ?? post.description,
        fromPostalCode: updateData.fromPostalCode ?? post.fromPostalCode,
        toPostalCode: updateData.toPostalCode ?? post.toPostalCode,
        fromCity: updateData.fromCity ?? post.fromCity,
        toCity: updateData.toCity ?? post.toCity,
        fromCountry: updateData.fromCountry ?? post.fromCountry,
        toCountry: updateData.toCountry ?? post.toCountry,
        fromAddress: updateData.fromAddress ?? post.fromAddress,
        toAddress: updateData.toAddress ?? post.toAddress,
        fromState: updateData.fromState ?? post.fromState,
        toState: updateData.toState ?? post.toState,
        incoterm: updateData.incoterm ?? post.incoterm,
        incotermInfo: updateData.incotermInfo ?? post.incotermInfo,
        mainCategory: updateData.mainCategory,
        subCategory: updateData.subCategory,
        form: updateData.form,
        postFieldValues: updateData.postFieldValues,
        status: updateData.status ?? post.status,
        rejectionReason: updateData.rejectionReason ?? post.rejectionReason,
        acceptReason: updateData.acceptReason ?? post.acceptReason,
        viewCount: updateData.viewCount ?? post.viewCount,
      }).filter(([_, value]) => value !== undefined),
    );

    const updatedPost = await prisma.quotePost.update({
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
        notificationType = 'QUOTE_POST_ACCEPTED';
        emailData = {
          title: updatedPost.title,
          description: updatedPost.description,
          postId: updatedPost.id,
        };
      } else if (filteredUpdateData.status === 'rejected') {
        notificationType = 'QUOTE_POST_REJECTED';
        emailData = {
          title: updatedPost.title,
          description: updatedPost.description,
          rejectionReason: Array.isArray(updatedPost.rejectionReason)
            ? updatedPost.rejectionReason.join(', ')
            : updatedPost.rejectionReason || 'No reason provided',
        };
      }

      if (notificationType && emailData) {
        await notifyUser(userId, notificationType, { postId }, emailData);
      }
    }

    return res
      .status(200)
      .json(
        new ApiResponse(200, updatedPost, 'QuotePost updated successfully'),
      );
  } catch (error) {
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
            'Invalid foreign key reference (main category, subcategory, or form)',
            error.message,
          ),
        );
    }
    if (error.code === 'P2002') {
      console.error(
        `Error in updateQuotePost - Unique constraint violation:`,
        error,
      );
      return res
        .status(409)
        .json(
          new ApiError(
            409,
            'Unique constraint violation on QuotePost',
            error.message,
          ),
        );
    }
    if (error instanceof ApiError) {
      console.error(`Error in updateQuotePost - ${error.message}:`, error);
      return res.status(error.statusCode).json(error);
    }
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
    quotePrice: z.number().optional(),
    email: z.string().email('Invalid email format').optional(),
    status: z.string().optional(),
    rejectionReason: z.string().optional(),
  }),
});

// Update QuoteReply

module.exports.updateQuoteReply = async (req, res) => {
  try {
    const parseResult = updateQuoteReplySchema.safeParse({
      params: req.params,
      body: req.body,
    });
    if (!parseResult.success) {
      throw new ApiError(400, 'Invalid input data', parseResult.error.errors);
    }

    const { replyId } = parseResult.data.params;
    const { postId, parentReplyId, ...data } = parseResult.data.body;

    const reply = await prisma.quoteReply.findUnique({
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
      throw new ApiError(404, 'QuoteReply not found');
    }

    const updateData = { ...data };

    if (postId) {
      const post = await prisma.quotePost.findUnique({
        where: { id: postId },
      });
      if (!post) {
        throw new ApiError(404, 'QuotePost not found');
      }
      updateData.post = { connect: { id: postId } };
    }

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

    const updatedReply = await prisma.quoteReply.update({
      where: { id: replyId },
      data: updateData,
    });

    if (updateData.status && updateData.status !== reply.status) {
      const userId = reply.userId;
      let emailData = null;
      let notificationType = null;

      if (!reply.user || !reply.post) {
        console.warn(
          `Missing data for QuoteReply ${replyId}: user=${!!reply.user}, post=${!!reply.post}, userId=${userId}. Skipping notification.`,
        );
      } else {
        if (updateData.status === 'success') {
          notificationType = 'QUOTE_REPLY_ACCEPTED';
          emailData = {
            postTitle: reply.post.title,
            postId: reply.post.id,
            quotePrice: updatedReply.quotePrice,
            contactEmail: updatedReply.email,
          };
        } else if (updateData.status === 'rejected') {
          notificationType = 'QUOTE_REPLY_REJECTED';
          emailData = {
            postTitle: reply.post.title,
            postId: reply.post.id,
            quotePrice: updatedReply.quotePrice,
            contactEmail: updatedReply.email,
            rejectionReason: updatedReply.rejectionReason,
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
        new ApiResponse(200, updatedReply, 'QuoteReply updated successfully'),
      );
  } catch (error) {
    console.error('Error in updateQuoteReply:', error);
    if (error.code === 'P2025') {
      return res
        .status(404)
        .json(new ApiError(404, 'QuoteReply not found', error.message));
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
            'Unique constraint violation on QuoteReply',
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
            'Required field missing in QuoteReply update',
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
      where: {
        userId,
        status: {
          not: 'draft',
        },
      },
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
      where: { postId, status: 'success' },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
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
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        mainCategory: true,
        subCategory: true,
        form: {
          include: {
            sections: {
              include: {
                fields: { include: { optionSet: true } },
              },
            },
          },
        },
        postFieldValues: {
          include: { field: true },
        },
        quoteReply: {
          where: { status: 'success' },
          select: {
            id: true,
            quotePrice: true,
            email: true,
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
    if (error instanceof ApiError) {
      console.error(`Error in getQuotePostByPostId - ${error.message}:`, error);
      return res.status(error.statusCode).json(error);
    }
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
