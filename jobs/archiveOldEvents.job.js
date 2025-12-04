const cron = require('node-cron');
const prisma = require('../models/prismaClient'); // adjust if your export differs
const logger = console;

let scheduledTask = null;

const performArchiveForCron = async () => {
  const now = new Date();
  try {
    const result = await prisma.event.updateMany({
      where: {
        endDate: { lte: now },
        isArchived: false,
      },
      data: { isArchived: true },
    });

    logger.info(`[archiveOldEvents:prod] ${result.count} event(s) archived at ${now.toISOString()}`);
    return result;
  } catch (err) {
    logger.error('[archiveOldEvents:prod] error while archiving events:', err);
    throw err;
  }
};

/**
 * Start scheduled prod job.
 * Default schedule: '0 0 * * *' (midnight daily). Do NOT run anything immediately.
 */
const archiveOldEvents = ({ schedule = '0 0 * * *', timezone= 'Asia/Kolkata' } = {}) => {
  if (scheduledTask) {
    logger.warn('[archiveOldEvents:prod] job already scheduled. Skipping duplicate scheduling.');
    return scheduledTask;
  }

  scheduledTask = cron.schedule(
    schedule,
    async () => {
      try {
        await performArchiveForCron();
      } catch (err) {
        logger.error('[archiveOldEvents:prod] scheduled run failed:', err);
      }
    },
    { scheduled: true, timezone }
  );

  logger.info(`[archiveOldEvents:prod] scheduled job (cron: "${schedule}").`);
  return scheduledTask;
};

/**
 * Stop the scheduled job (optional).
 */
const stopArchiveJob = () => {
  if (scheduledTask) {
    scheduledTask.stop();
    scheduledTask = null;
    logger.info('[archiveOldEvents:prod] scheduled job stopped.');
  }
};

module.exports = { archiveOldEvents, stopArchiveJob };