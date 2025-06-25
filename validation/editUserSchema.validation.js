const { z } = require('zod');

const EditUserSchema = z.object({
  userId: z.string({ required_error: 'User ID is required' }), // required to identify user
  name: z.string().optional(),
  email: z.string().email().optional(),
  password: z.string().min(6).optional(),
  verified: z.boolean().optional(),
  role: z.enum(['user', 'admin', 'moderator']).optional(),
  mobileNo: z.string().optional(),
  country: z.string().optional(),
  city: z.string().optional(),
  address: z.string().optional(),
  postalCode: z.string().optional(),
  profilePic: z.string().optional(),
  bio: z.string().optional(),
  online: z.boolean().optional(),
  lastSeen: z
    .preprocess((val) => (val ? new Date(val) : undefined), z.date())
    .optional(),
  rating: z.number().optional(),
  accountType: z.enum(['personal', 'business']).optional(),
  createdAt: z
    .preprocess((val) => (val ? new Date(val) : undefined), z.date())
    .optional(),
  updatedAt: z
    .preprocess((val) => (val ? new Date(val) : undefined), z.date())
    .optional(),
});

module.exports = EditUserSchema;
