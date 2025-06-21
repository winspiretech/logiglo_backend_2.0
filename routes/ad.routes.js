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
  getSectionAdAnalytics,
  createSubSection,
  deleteSubSection,
  toggleSectionVisibility,
  toggleSubSectionVisibility,
  getAllSectionsWithSubSections,
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
router.get('/section/:section/analytics', isAdmin, getSectionAdAnalytics);
router.post('/subsections', isAdmin, createSubSection);
router.delete('/subsections/:subSectionId', isAdmin, deleteSubSection);
router.get('/subsections', getAllSectionsWithSubSections);
router.patch('/sections/:sectionId/toggle', isAdmin, toggleSectionVisibility);
router.patch(
  '/subsections/:subSectionId/toggle',
  isAdmin,
  toggleSubSectionVisibility,
);

module.exports = router;
