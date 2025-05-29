// validations/education.validation.js
const { z } = require('zod');

const CourseSchema = z.object({
  institutionName: z.string(),
  logo: z.string().url().optional(),
  title: z.string(),
  brochure: z.string().url().optional(),
  description: z.string().optional(),
  instructorName: z.string(),
  thumbnail: z.string().url().optional(),
  previewVideoUrl: z.string().url().optional(),
  educationLevel: z.enum([
    'HIGH_SCHOOL',
    'UNDERGRADUATE',
    'POSTGRADUATE',
    'DOCTORATE',
    'OTHER',
  ]),
  difficulty: z.enum(['BEGINNER', 'INTERMEDIATE', 'ADVANCED']),
  mode: z.enum(['ONLINE', 'OFFLINE', 'HYBRID']),
  currency: z.enum(['INR', 'USD', 'EUR']),
  price: z.number().nonnegative().default(0),
  duration: z.string(),
  validUntil: z.string().datetime().optional(),
  isActive: z.boolean().optional(),
  createdById: z.string().uuid(),
});

module.exports = { CourseSchema };
