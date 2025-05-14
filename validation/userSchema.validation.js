const { z } = require('zod');

const UserSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  email: z.string().email(), // validate email format
  password: z.string().min(6), // password with minimum length of 6
  verified: z.boolean().default(false), // default to false
  role: z.enum(['user', 'admin', 'moderator']).default('user'), // allowed roles
  mobileNo: z.string().optional(),
  country: z.string(),
  city: z.string(),
  address: z.string().optional(),
  postalCode: z.string().optional(),
  profilePic: z.string().optional(),
  bio: z.string().optional(),
  online: z.boolean().default(false), // default to false
  lastSeen: z
    .date()
    .transform((val) => new Date(val))
    .optional(), // optional, but should be a valid timestamp
  rating: z.number().optional(), // default to 0
  accountType: z.enum(['personal', 'business']).default('personal'), // allowed account types
  createdAt: z
    .date()
    .transform((val) => new Date(val))
    .default(() => new Date()), // default to current timestamp
  updatedAt: z
    .date()
    .transform((val) => new Date(val))
    .default(() => new Date()), // default to current timestamp
});

module.exports = UserSchema;
