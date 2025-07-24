const express = require('express');
const router = express.Router();
const dashboardAnalyticsController = require('../controllers/dashboardAnalytics.controller');
// --- Dashboard Analytics Routes ---

// Fetch top 10 most liked QuotePosts and GeneralPosts
router.get('/top-liked-posts', dashboardAnalyticsController.getTopLikedPosts);

// Fetch top 10 performing users
router.get(
  '/top-performing-users',
  dashboardAnalyticsController.getTopPerformingUsers,
);


module.exports = router;
