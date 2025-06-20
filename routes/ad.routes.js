const express = require('express');
const router = express.Router();
const {
  createAd,
  createDailyAdStatAnalytics,
  getAdAnalytics,
  getAllAds,
  getAdBySection,
  createSection,
  deleteSection,
  updateAd,
  getAllSections,
} = require('../controllers/adAnalytics.controllers.js');
const isAdmin = require('../middleware/isAdmin.js');

router.post('/create', isAdmin, createAd);
router.post('/:adId/:section/analytics', isAdmin, createDailyAdStatAnalytics);
router.get('/section/all-section', getAllSections);
router.get('/analytics/get-analytics/:adId', isAdmin, getAdAnalytics);
router.get('/all-ads', isAdmin, getAllAds);
router.get('/section/:section', getAdBySection);
router.post('/section/create', isAdmin, createSection);
router.delete('/section/:sectionId', isAdmin, deleteSection);
router.patch('/:adId', isAdmin, updateAd);

module.exports = router;
