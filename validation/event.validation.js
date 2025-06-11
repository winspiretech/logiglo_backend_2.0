const { z, string } = require('zod');

const EventSchema = z
  .object({
    eventTitle: z.string(),
    organizer: z.string(),
    countryCode: z.string().optional(),
    contactNumber: z.string().optional(),
    emailAddress: z.string().email().optional(),
    description: z.string(),
    mode: z.enum(['offline', 'online', 'hybrid']),
    location: z.string().optional(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date(),
    coverImages: z.array(z.string()).optional(),
    videoUrl: z.string(),
    brochure : z.string() 
  })
  .refine((data) => data.endDate >= data.startDate, {
    message: 'End date must be after start date',
    path: ['endDate'],
  })
  .refine(
    (data) =>
      (data.contactNumber && data.contactNumber.trim() !== '') ||
      (data.emailAddress && data.emailAddress.trim() !== ''),
    {
      message: 'Either contact number or email address must be provided',
      path: [],
    },
  )
  .refine(
    (data) =>
      !data.contactNumber ||
      data.contactNumber.trim() === '' ||
      (data.countryCode && data.countryCode.trim() !== ''),
    {
      message: 'Country code is required when contact number is provided',
      path: ['countryCode'],
    },
  )
  .refine(
    (data) =>
      (data.mode === 'offline' &&
        data.location &&
        data.location.trim() !== '') ||
      (data.mode === 'online' &&
        (!data.location || data.location.trim() === '')) ||
      data.mode === 'hybrid',
    {
      message:
        'Location is required for offline events and must be empty for online events',
      path: ['location'],
    },
  );

module.exports = EventSchema;
