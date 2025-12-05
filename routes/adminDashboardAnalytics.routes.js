const express = require('express');
const router = express.Router();
const isAdmin = require('../middleware/isAdmin.js');
const {
  getNewUsersInDefinedTime,
  getTotalUsersOverTime,
  trackDailyActivity,
  getOnlineUsersOverTime,
  getUsersFromEachCountry,
  getRealtimeUserSummary,
  getTopBlogsAndEvents,
  getAllTopModulesByPageView,
} = require('../controllers/adminAnalytics.controllers.js');

router.get('/periodic-signups', isAdmin, getNewUsersInDefinedTime);
router.get('/periodic-usersData', isAdmin, getTotalUsersOverTime);
router.get('/periodic-activeUsers', isAdmin, getOnlineUsersOverTime);
router.get('/countrywise-users', isAdmin, getUsersFromEachCountry);
router.get('/realtime-active-users', isAdmin, getRealtimeUserSummary);
router.get('/top-read-articles', isAdmin, getTopBlogsAndEvents);
router.get('/top-performing-modules', isAdmin, getAllTopModulesByPageView);

module.exports = router;
