const cron = require('node-cron');
const prisma = require('../models/prismaClient');

const archiveOldEvents = async () => {
  const todaysdate = new Date();
  cron.schedule('0 0 * * *', async () => {
    const events = await prisma.event.updateMany({
      where: {
        endDate: {
          lt: todaysdate,
        },
        isArchived: false,
      },
      data: {
        isArchived: true,
      },
    });
  });
};

module.exports = { archiveOldEvents };
