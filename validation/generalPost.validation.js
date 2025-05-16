const { z } = require('zod');
const { ApiError } = require('../utils/ApiError');

// Valid statuses for GeneralPost and GeneralReply
const validStatuses = ['pending', 'success', 'draft', 'rejected'];

// Zod schema for GeneralPost
const generalPostSchema = z.object({
  id: z.string().uuid().optional(),
  title: z.string().nullable().optional(),
  description: z.string().nullable().optional(),
  userId: z.string().uuid(),
  createdBy: z.string().nullable().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  viewCount: z.number().int().nullable().optional(),
  likesCount: z.number().int().nullable().optional(),
  commentsCount: z.number().int().nullable().optional(),
  status: z.enum(validStatuses).default('pending').optional(),
  rejectionReason: z.string().nullable().optional(),
  generalPostMainCategory: z.string().uuid().nullable().optional(),
  generalPostSubCategory: z.string().uuid().nullable().optional(),
});

// Zod schema for updating GeneralPost
const updateGeneralPostSchema = z
  .object({
    title: z.string().nullable().optional(),
    description: z.string().nullable().optional(),
    createdBy: z.string().nullable().optional(),
    viewCount: z.number().int().nullable().optional(),
    likesCount: z.number().int().nullable().optional(),
    commentsCount: z.number().int().nullable().optional(),
    status: z.enum(validStatuses).optional(),
    rejectionReason: z.string().nullable().optional(),
    generalPostMainCategory: z.string().uuid().nullable().optional(),
    generalPostSubCategory: z.string().uuid().nullable().optional(),
  })
  .refine((data) => Object.keys(data).length > 0, {
    message: 'At least one field must be provided for update',
  });

// Zod schema for GeneralReply
const generalReplySchema = z.object({
  id: z.string().uuid().optional(),
  userId: z.string().uuid(),
  postId: z.string().uuid(),
  description: z.string().nullable().optional(),
  parentReplyId: z.string().uuid().nullable().optional(),
  createdAt: z
    .date()
    .default(() => new Date())
    .optional(),
  status: z.enum(validStatuses).default('pending').optional(),
  rejectionReason: z.string().nullable().optional(),
});

// Zod schema for GeneralLike
const generalLikeSchema = z.object({
  id: z.string().uuid().optional(),
  userId: z.string().uuid(),
  postId: z.string().uuid(),
});

// Validation functions
const validateCreateGeneralPost = (body) => {
  const result = generalPostSchema.safeParse(body);
  if (!result.success) {
    throw new ApiError(400, 'Invalid GeneralPost data', result.error.errors);
  }
  return result.data;
};

const validateCreateGeneralReply = (body) => {
  const result = generalReplySchema.safeParse(body);
  if (!result.success) {
    throw new ApiError(400, 'Invalid GeneralReply data', result.error.errors);
  }
  return result.data;
};

const validateCreateGeneralLike = (body) => {
  const result = generalLikeSchema.safeParse(body);
  if (!result.success) {
    throw new ApiError(400, 'Invalid GeneralLike data', result.error.errors);
  }
  return result.data;
};

const validateUpdateGeneralPost = (params, body) => {
  const postIdSchema = z.object({ postId: z.string().uuid() });
  const idResult = postIdSchema.safeParse(params);
  if (!idResult.success) {
    throw new ApiError(400, 'Invalid post ID', idResult.error.errors);
  }

  const bodyResult = updateGeneralPostSchema.safeParse(body);
  if (!bodyResult.success) {
    throw new ApiError(
      400,
      'Invalid GeneralPost update data',
      bodyResult.error.errors,
    );
  }

  return { postId: idResult.data.postId, data: bodyResult.data };
};

const validateUserId = (params) => {
  const schema = z.object({ userId: z.string().uuid() });
  const result = schema.safeParse(params);
  if (!result.success) {
    throw new ApiError(400, 'Invalid user ID', result.error.errors);
  }
  return result.data.userId;
};

const validatePostId = (params) => {
  const schema = z.object({ postId: z.string().uuid() });
  const result = schema.safeParse(params);
  if (!result.success) {
    throw new ApiError(400, 'Invalid post ID', result.error.errors);
  }
  return result.data.postId;
};

const validateGetLikesByPostId = (params, query) => {
  const schema = z.object({
    postId: z.string().uuid(),
    userId: z.string().uuid().optional(),
  });
  const result = schema.safeParse({
    postId: params.postId,
    userId: query.userId,
  });
  if (!result.success) {
    throw new ApiError(400, 'Invalid post ID or user ID', result.error.errors);
  }
  return result.data;
};

module.exports = {
  generalPostSchema,
  updateGeneralPostSchema,
  generalReplySchema,
  generalLikeSchema,
  validateCreateGeneralPost,
  validateCreateGeneralReply,
  validateCreateGeneralLike,
  validateUpdateGeneralPost,
  validateUserId,
  validatePostId,
  validateGetLikesByPostId,
};
