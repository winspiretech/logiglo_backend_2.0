const cron = require('node-cron');
const prisma = require('../models/prismaClient');

const archiveOldBlogs = async () => {
  const sixtyDaysBackFromToday = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000);
  cron.schedule('0 0 * * *', async () => {
    const blogs = await prisma.blog.updateMany({
      where: {
        createdAt: {
          lte: sixtyDaysBackFromToday,
        },
        isArchived: false,
      },
      data: {
        isArchived: true,
      },
    });
  });
};

module.exports = { archiveOldBlogs };
