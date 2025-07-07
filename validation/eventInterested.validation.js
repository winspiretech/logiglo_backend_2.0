const { z } = require('zod');

const eventInterseted = z.object({
  firstName: z.string(),
  lastName: z.string(),
  mobileNo: z.string(),
  email: z.string().email(),
});

module.exports = eventInterseted;
