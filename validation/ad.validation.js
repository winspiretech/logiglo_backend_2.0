const { z } = require("zod");

const isValidUrl = (value) => {
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
};

const AdSchema = z
  .object({
    title: z.string().min(1, 'Title is required'),
    bannerImage: z.any().optional(),
    boxImage: z.any().optional(),
    targetUrl: z.string().url('Invalid target URL'),
    type: z.enum(['banner', 'box', 'both']),
    startDate: z.coerce.date(),
    endDate: z.coerce.date(),
    status: z.enum(['active', 'inactive']),
    impressions: z.number().int().optional(),
    clicks: z.number().int().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    sections: z.array(z.string().uuid()),
    subSections: z.array(z.string().uuid()).optional(),
  })
  .refine((data) => {
    if (data.type === 'banner') return isValidUrl(data.bannerImage);
    if (data.type === 'box') return isValidUrl(data.boxImage);
    if (data.type === 'both') return isValidUrl(data.bannerImage) && isValidUrl(data.boxImage);
    return true;
  }, {
    message: 'Provide valid image URLs based on selected ad type',
    path: ['type'],
  });

module.exports = AdSchema;
