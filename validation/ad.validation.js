const { z } = require('zod');

const AdSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  imageUrl: z.string().url('Invalid image URL'),
  targetUrl: z.string().url('Invalid target URL'),
  location: z.enum(['left', 'right', 'middle']),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  status: z.enum(['Active', 'Inactive']),
  impressions: z.number().int().optional(),
  clicks: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  sections: z.array(z.string().uuid()),
});

module.exports = AdSchema;
