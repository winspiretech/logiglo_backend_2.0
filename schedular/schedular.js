const cron = require('node-cron');
const {
  checkUpcomingEvents,
} = require('../controllers/notification.controller.js');

// Schedule to run daily at midnight
cron.schedule('0 0 * * *', async () => {
  console.log('Checking for upcoming events...');
  await checkUpcomingEvents();
});
