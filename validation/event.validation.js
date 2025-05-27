const { z, string } = require('zod');

const EventSchema = z
  .object({
    eventTitle: z.string(),
    organizer: z.string(),
    countryCode: z.string(),
    contactNumber: z.string(),
    emailAddress: z.string().email(),
    location: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date(),
    coverImages: z.array(z.string()).optional(),
  })
  .refine((data) => data.endDate >= data.startDate, {
    // For checking endDate should be greater than startDate
    message: 'End date must be after start date',
    path: ['endDate'],
  });

module.exports = EventSchema;
