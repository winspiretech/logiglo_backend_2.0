const express = require('express');
const { isUserLoggedIn } = require('../middleware/isUserLoggedIn');
const {
  getUserProfileWithCompletion,
  upcomingEventsInGiveDays,
} = require('../controllers/userDashboard.controllers');
const router = express.Router();

router.get(
  '/user-profile-completion',
  isUserLoggedIn,
  getUserProfileWithCompletion,
);
router.get('/upcoming-events', isUserLoggedIn, upcomingEventsInGiveDays);

module.exports = router;
