const { z } = require('zod');

const ratingSchema = z.object({
  rating: z
    .number()
    .min(0)
    .max(9.9)
    .refine((val) => /^\d(\.\d)?$/.test(val.toFixed(1)), {
      message: 'Rating must have at most 1 decimal place',
    }),
});

module.exports = { ratingSchema };
