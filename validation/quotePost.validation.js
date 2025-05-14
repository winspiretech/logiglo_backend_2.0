const { z } = require('zod');

// Zod schema for QuotePost
const quotePostSchema = z.object({
  id: z.string().uuid().optional(),
  title: z.string().nullable().optional(),
  description: z.string().nullable().optional(),
  userId: z.string().uuid(),
  name: z.string().nullable().optional(),
  categoryId: z.string().uuid().nullable().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  totalNetWeight: z.number().nullable().optional(),
  totalGrossWeight: z.number().nullable().optional(),
  volumetricWeight: z.number().nullable().optional(),
  transitInsurance: z.boolean().nullable().optional(),
  width: z.number().nullable().optional(),
  height: z.number().nullable().optional(),
  length: z.number().nullable().optional(),
  viewCount: z.number().nullable().optional(),
  likesCount: z.number().nullable().optional(),
  commentsCount: z.number().nullable().optional(),
  dangerousGoods: z.boolean().nullable().optional(),
  status: z.string().optional(),
  rejectionReason: z.string().nullable().optional(),
  fromPostalCode: z.string().nullable().optional(),
  toPostalCode: z.string().nullable().optional(),
  fromCity: z.string().nullable().optional(),
  toCity: z.string().nullable().optional(),
  fromCountry: z.string().nullable().optional(),
  toCountry: z.string().nullable().optional(),
  fromAddress: z.string().nullable().optional(),
  toAddress: z.string().nullable().optional(),
  fromState: z.string().nullable().optional(),
  toState: z.string().nullable().optional(),
  postMainCategory: z.string().nullable().optional(),
  postSubCategory: z.string().nullable().optional(),
  shipmentType: z.string().nullable().optional(),
});

// Zod schema for updating QuotePost
const updateQuotePostSchema = z
  .object({
    title: z.string().nullable().optional(),
    description: z.string().nullable().optional(),
    name: z.string().nullable().optional(),
    categoryId: z.string().uuid().nullable().optional(),
    totalNetWeight: z.number().nullable().optional(),
    totalGrossWeight: z.number().nullable().optional(),
    volumetricWeight: z.number().nullable().optional(),
    transitInsurance: z.boolean().nullable().optional(),
    width: z.number().nullable().optional(),
    height: z.number().nullable().optional(),
    length: z.number().nullable().optional(),
    dangerousGoods: z.boolean().nullable().optional(),
    status: z.string().optional(),
    rejectionReason: z.string().nullable().optional(),
    fromPostalCode: z.string().nullable().optional(),
    toPostalCode: z.string().nullable().optional(),
    fromCity: z.string().nullable().optional(),
    toCity: z.string().nullable().optional(),
    fromCountry: z.string().nullable().optional(),
    toCountry: z.string().nullable().optional(),
    fromAddress: z.string().nullable().optional(),
    toAddress: z.string().nullable().optional(),
    fromState: z.string().nullable().optional(),
    toState: z.string().nullable().optional(),
    postCategory: z.string().nullable().optional(),
    shipmentType: z.string().nullable().optional(),
    shipmentMode: z.string().nullable().optional(),
  })
  .refine((data) => Object.keys(data).length > 0, {
    message: 'At least one field must be provided for update',
  });

// Zod schema for QuoteReply
const quoteReplySchema = z.object({
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

// Zod schema for QuoteLike
const quoteLikeSchema = z.object({
  id: z.string().uuid().optional(),
  userId: z.string().uuid(),
  postId: z.string().uuid(),
});

module.exports = {
  quotePostSchema,
  updateQuotePostSchema,
  quoteReplySchema,
  quoteLikeSchema,
};
