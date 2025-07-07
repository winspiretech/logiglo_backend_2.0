// src/routes/notification.routes.js
const router = require('express').Router();
const notificationController = require('../controllers/notification.controller.js');

// Notification Preferences Routes
router.get(
  '/preferences/:userId',
  notificationController.getNotificationPreferences,
);
router.patch(
  '/preferences/:userId',
  notificationController.updateNotificationPreferences,
);

// Email Server Configuration Routes (admin only)
router.get('/email-config', notificationController.getEmailServerConfig);
router.post('/email-config', notificationController.updateEmailServerConfig);

// Send Notification Route
router.post('/send', notificationController.sendNotification);

module.exports = router;

// const express = require('express');
// const router = express.Router();
// const notificationController = require('../controllers/notification.controller');

// // Create a notification (single or broadcast)
// router.post('/', notificationController.createNotification);

// // Get notifications for a specific user
// router.get('/:userId', notificationController.getUserNotifications);

// module.exports = router;
