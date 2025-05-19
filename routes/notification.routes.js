const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notification.controller');

// Create a notification (single or broadcast)
router.post('/', notificationController.createNotification);

// Get notifications for a specific user
router.get('/:userId', notificationController.getUserNotifications);

module.exports = router;
