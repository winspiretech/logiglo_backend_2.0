const { z } = require('zod');

// Zod schema for GeneralPost
const generalPostSchema = z.object({
  id: z.string().uuid().optional(),
  title: z.string().nullable().optional(),
  description: z.string().nullable().optional(),
  userId: z.string().uuid(),
  createdBy: z.string().nullable().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  viewCount: z.number().nullable().optional(),
  likesCount: z.number().nullable().optional(),
  commentsCount: z.number().nullable().optional(),
  status: z.string().optional(),
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
    viewCount: z.number().nullable().optional(),
    likesCount: z.number().nullable().optional(),
    commentsCount: z.number().nullable().optional(),
    status: z.string().optional(),
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
  status: z.string().optional(),
  rejectionReason: z.string().nullable().optional(),
});

// Zod schema for GeneralLike
const generalLikeSchema = z.object({
  id: z.string().uuid().optional(),
  userId: z.string().uuid(),
  postId: z.string().uuid(),
});

module.exports = {
  generalPostSchema,
  updateGeneralPostSchema,
  generalReplySchema,
  generalLikeSchema,
};
