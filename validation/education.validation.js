// validations/education.validation.js
const { z } = require('zod');

const CourseSchema = z.object({
  institutionName: z.string(),
  logo: z.string().url(),
  title: z.string(),
  brochure: z.string().url(),
  description: z.string(),
  instructorName: z.string(),
  thumbnail: z.string().url(),
  previewVideoUrl: z.string().url(),
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
  duration: z.string(),
  createdById: z.string().uuid(), // assumes Prisma uses UUID for user ID
});

module.exports = { CourseSchema };
