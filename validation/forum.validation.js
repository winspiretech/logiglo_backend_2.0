const { z } = require('zod');

// Validation schemas
const forumMainCategorySchema = z.object({
  name: z.string().nullable().optional(),
  enabled: z.boolean().nullable().optional(),
});

const forumSubCategorySchema = z.object({
  name: z.string().nullable().optional(),
  enabled: z.boolean().nullable().optional(),
  mainCategoryId: z.string().uuid(),
});

const updateForumMainCategorySchema = z
  .object({
    name: z.string().nullable().optional(),
    enabled: z.boolean().nullable().optional(),
  })
  .refine((data) => Object.keys(data).length > 0, {
    message: 'At least one field must be provided for update',
  });

const updateForumSubCategorySchema = z
  .object({
    name: z.string().nullable().optional(),
    enabled: z.boolean().nullable().optional(),
    mainCategoryId: z.string().uuid().optional(),
  })
  .refine((data) => Object.keys(data).length > 0, {
    message: 'At least one field must be provided for update',
  });

module.exports = {
  forumMainCategorySchema,
  forumSubCategorySchema,
  updateForumMainCategorySchema,
  updateForumSubCategorySchema,
};
