const { z } = require('zod');

const AdSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  bannerImage: z.string().url('Invalid target URL').optional(),
  boxImage: z.string().url('Invalid target URL').optional(),
  targetUrl: z.string().url('Invalid target URL'),
  type: z.enum(['banner', 'box']),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  status: z.enum(['active', 'inactive']),
  impressions: z.number().int().optional(),
  clicks: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  sections: z.array(z.string().uuid()),
});

module.exports = AdSchema;
