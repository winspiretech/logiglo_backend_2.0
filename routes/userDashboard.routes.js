const express = require('express');
const { isUserLoggedIn } = require('../middleware/isUserLoggedIn');
const {
  getUserProfileWithCompletion,
  upcomingEventsInGiveDays,
  getLatestBlogPosts,
} = require('../controllers/userDashboard.controllers');
const router = express.Router();

router.get(
  '/user-profile-completion',
  isUserLoggedIn,
  getUserProfileWithCompletion,
);
router.get('/upcoming-events', isUserLoggedIn, upcomingEventsInGiveDays);
router.get('/latest-blogs', isUserLoggedIn, getLatestBlogPosts);

module.exports = router;
