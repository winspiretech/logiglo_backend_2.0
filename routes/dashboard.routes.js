const express = require('express');
const router = express.Router();
const dashboardAnalyticsController = require('../controllers/dashboardAnalytics.controller');

// --- Dashboard Analytics Routes ---

// Fetch total user and post counts
router.get('/total-counts', dashboardAnalyticsController.getTotalCounts);

// Fetch top 10 most liked QuotePosts and GeneralPosts
router.get('/top-liked-posts', dashboardAnalyticsController.getTopLikedPosts);

// Fetch top 10 performing users
router.get(
  '/top-performing-users',
  dashboardAnalyticsController.getTopPerformingUsers,
);

module.exports = router;
