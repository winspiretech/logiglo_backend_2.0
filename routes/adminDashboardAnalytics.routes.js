const express = require('express');
const router = express.Router();
const isAdmin = require('../middleware/isAdmin.js');
const {
  getNewUsersInDefinedTime,
  getTotalUsersOverTime,
  trackDailyActivity,
  getOnlineUsersOverTime
} = require('../controllers/adminAnalytics.controllers.js');

router.get('/periodic-signups', isAdmin, getNewUsersInDefinedTime);
router.get('/periodic-usersData', isAdmin, getTotalUsersOverTime);
router.get('/periodic-activeUsers', isAdmin, getOnlineUsersOverTime);

module.exports = router;
