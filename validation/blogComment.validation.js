const { z } = require('zod');

const BlogCommentSchema = z.object({
  comment: z.string(),
  status: z.enum(['pending', 'rejected', 'accepted']).optional(),
});

module.exports = BlogCommentSchema;
