const { z } = require('zod');

const ContactUsSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email'),
  phoneNo: z.string().min(7, 'Phone number is too short'),
  city: z.string().min(1, 'City is required'),
  message: z.string().min(1, 'Message is required'),
});

module.exports = ContactUsSchema;
