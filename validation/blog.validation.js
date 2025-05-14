const { z } = require('zod');

const BlogSchema = z.object({
  title: z.string(),
  status: z.string(),
  category: z.string(),
});

module.exports = BlogSchema;
