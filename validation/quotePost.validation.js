const { z } = require('zod');
const { ApiError } = require('../utils/ApiError');

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

  viewCount: z.number().nullable().optional(),
  likesCount: z.number().nullable().optional(),
  commentsCount: z.number().nullable().optional(),
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
  postMainCategory: z.string().uuid().nullable().optional(),
  postSubCategory: z.string().uuid().nullable().optional(),
  shipmentType: z.enum(['SAMPLE', 'COMMERCIAL']).nullable().optional(),
  postType: z.enum(['DOCS', 'NON_DOCS']).nullable().optional(),
  serviceType: z.enum(['DTD', 'SELF']).nullable().optional(),
  viewCount: z.number().optional(),
  formId: z.string().uuid('Invalid form ID').optional(),
  postFieldValues: z
    .array(
      z.object({
        fieldId: z.string().uuid('Invalid field ID'),
        value: z.string().min(1, 'Field value is required'),
      }),
    )
    .optional(),
  incoterm: z
    .enum([
      'EXW',
      'FCA',
      'FAS',
      'FOB',
      'CFR',
      'CIF',
      'CPT',
      'CIP',
      'DPU',
      'DAP',
      'DDP',
    ])
    .nullable()
    .optional(),
  incotermInfo: z.string().nullable().optional(),
});

// Zod schema for QuoteReply creation
const quoteReplySchemaUpdate = z.object({
  params: z.object({
    replyId: z
      .string()
      .uuid({ message: 'replyId must be a valid UUID' })
      .nonempty({ message: 'replyId is required' }),
  }),
  body: z
    .object({
      postId: z
        .string()
        .uuid({ message: 'postId must be a valid UUID' })
        .optional(),
      parentReplyId: z
        .string()
        .uuid({ message: 'parentReplyId must be a valid UUID' })
        .optional()
        .nullable(),
      description: z
        .string({ message: 'description must be a string' })
        .optional()
        .nullable(),
      status: z
        .enum(['pending', 'approved', 'rejected', 'success'], {
          message: 'status must be one of pending, approved, rejected, success',
        })
        .optional(),
      rejectionReason: z
        .string({ message: 'rejectionReason must be a string' })
        .optional()
        .nullable(),
    })
    .refine((data) => Object.keys(data).length > 0, {
      message: 'At least one field must be provided in the request body',
      path: [],
    }),
});

// Zod schema for updating QuotePost
const updateQuotePostSchema = z
  .object({
    title: z.string().nullable().optional(),
    description: z.string().nullable().optional(),
    name: z.string().nullable().optional(),
    categoryId: z.string().uuid().nullable().optional(),
    status: z.string().optional(),
    rejectionReason: z.array(z.string()).optional(),
    acceptReason: z.string().nullable().optional(),
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
    postMainCategory: z.string().uuid().nullable().optional(),
    postSubCategory: z.string().uuid().nullable().optional(),
    shipmentType: z.enum(['SAMPLE', 'COMMERCIAL']).nullable().optional(),
    postType: z.enum(['DOCS', 'NON_DOCS']).nullable().optional(),
    serviceType: z.enum(['DTD', 'SELF']).nullable().optional(),
    viewCount: z.number().optional(),
    formId: z.string().uuid('Invalid form ID').optional(),
    postFieldValues: z
      .array(
        z.object({
          fieldId: z.string().uuid('Invalid field ID'),
          value: z.string().min(1, 'Field value is required'),
        }),
      )
      .optional(),
    incoterm: z
      .enum([
        'EXW',
        'FCA',
        'FAS',
        'FOB',
        'CFR',
        'CIF',
        'CPT',
        'CIP',
        'DPU',
        'DAP',
        'DDP',
      ])
      .nullable()
      .optional(),
    incotermInfo: z.string().nullable().optional(),
  })
  .refine((data) => Object.keys(data).length > 0, {
    message: 'At least one field must be provided for update',
  });

const quoteReplySchema = z.object({
  id: z.string().uuid().optional(),
  userId: z.string().uuid('Invalid user ID format'),
  postId: z.string().uuid('Invalid post ID format'),
  parentReplyId: z
    .string()
    .uuid('Invalid parent reply ID format')
    .nullable()
    .optional(),
  quotePrice: z
    .number({ message: 'Quote price must be a number' })
    .nullable()
    .optional(),
  email: z.string().email('Invalid email format').nullable().optional(),
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

// Validation functions
const validateCreateQuotePost = (body) => {
  const result = quotePostSchema.safeParse(body);
  if (!result.success) {
    throw new ApiError(400, 'Invalid quote post data', result.error.errors);
  }
  return result.data;
};

const validateCreateQuoteReply = (body) => {
  const result = quoteReplySchema.safeParse(body);
  if (!result.success) {
    throw new ApiError(400, 'Invalid quote reply data', result.error.errors);
  }
  return result.data;
};

const validateCreateQuoteLike = (body) => {
  const result = quoteLikeSchema.safeParse(body);
  if (!result.success) {
    throw new ApiError(400, 'Invalid quote like data', result.error.errors);
  }
  return result.data;
};

const validateUpdateQuotePost = (params, body) => {
  const postIdSchema = z.object({ postId: z.string().uuid() });
  const idResult = postIdSchema.safeParse(params);
  if (!idResult.success) {
    throw new ApiError(400, 'Invalid post ID', idResult.error.errors);
  }

  const bodyResult = updateQuotePostSchema.safeParse(body);
  if (!bodyResult.success) {
    throw new ApiError(
      400,
      'Invalid update quote post data',
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
  quotePostSchema,
  updateQuotePostSchema,
  quoteReplySchema,
  quoteLikeSchema,
  validateCreateQuotePost,
  validateCreateQuoteReply,
  validateCreateQuoteLike,
  validateUpdateQuotePost,
  validateUserId,
  validatePostId,
  validateGetLikesByPostId,
  quoteReplySchemaUpdate,
};
