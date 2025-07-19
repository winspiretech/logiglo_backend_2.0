const express = require('express');
const router = express.Router();
const isAdmin = require('../middleware/isAdmin.js');
const {
  getNewUsersInDefinedTime,
  getTotalUsersOverTime,
  trackDailyActivity,
  getOnlineUsersOverTime,
  getUsersFromEachCountry
} = require('../controllers/adminAnalytics.controllers.js');

router.get('/periodic-signups', isAdmin, getNewUsersInDefinedTime);
router.get('/periodic-usersData', isAdmin, getTotalUsersOverTime);
router.get('/periodic-activeUsers', isAdmin, getOnlineUsersOverTime);
router.get('/countrywise-users', isAdmin, getUsersFromEachCountry);

module.exports = router;
