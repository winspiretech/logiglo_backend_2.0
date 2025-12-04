// const cron = require('node-cron');
// const prisma = require('../models/prismaClient');

// const archiveOldBlogs = async () => {
//   const sixtyDaysBackFromToday = new Date(
//     Date.now() - 90 * 24 * 60 * 60 * 1000,
//   );
//   cron.schedule('0 0 * * *', async () => {
//     const blogs = await prisma.blog.updateMany({
//       where: {
//         createdAt: {
//           lte: sixtyDaysBackFromToday,
//         },
//         isArchived: false,
//       },
//       data: {
//         isArchived: true,
//       },
//     });
//   });
// };

// module.exports = { archiveOldBlogs };

// jobs/archiveOldBlogs.prod.job.js
const cron = require('node-cron');
const prisma = require('../models/prismaClient'); // adjust path if needed
const logger = console;

let scheduledTask = null;

/**
 * Internal function used by cron. Always computes fresh cutoff time.
 */
const performArchiveForCron = async () => {
  const now = new Date();
  const sixtyDaysMs = 60 * 24 * 60 * 60 * 1000;
  // const testDaysMs = 10 * 60 * 1000;
  const cutoff = new Date(now.getTime() - sixtyDaysMs);

  try {
    const result = await prisma.blog.updateMany({
      where: {
        createdAt: { lte: cutoff },
        isArchived: false,
      },
      data: { isArchived: true },
    });

    logger.info(
      `[archiveOldBlogs:prod] ${result.count} blog(s) archived at ${now.toISOString()} (cutoff: ${cutoff.toISOString()})`,
    );
    return result;
  } catch (err) {
    logger.error('[archiveOldBlogs:prod] error while archiving blogs:', err);
    throw err;
  }
};

/**
 * Start cron-only job. Default schedule: '0 0 * * *' (daily at midnight).
 * Does NOT expose a one-off helper.
 */
const archiveOldBlogs = ({
  schedule = '0 0 * * *',
  timezone = 'Asia/Kolkata',
} = {}) => {
  if (scheduledTask) {
    logger.warn(
      '[archiveOldBlogs:prod] job already scheduled. Skipping duplicate scheduling.',
    );
    return scheduledTask;
  }

  scheduledTask = cron.schedule(
    schedule,
    async () => {
      try {
        await performArchiveForCron(); // fresh Date() inside
      } catch (err) {
        logger.error('[archiveOldBlogs:prod] scheduled run failed:', err);
      }
    },
    { scheduled: true, timezone },
  );

  logger.info(`[archiveOldBlogs:prod] scheduled job (cron: "${schedule}").`);
  return scheduledTask;
};

const stopArchiveJob = () => {
  if (scheduledTask) {
    scheduledTask.stop();
    scheduledTask = null;
    logger.info('[archiveOldBlogs:prod] scheduled job stopped.');
  }
};

module.exports = { archiveOldBlogs, stopArchiveJob };
