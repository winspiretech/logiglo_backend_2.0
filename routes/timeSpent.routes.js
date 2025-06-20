const express = require('express');
const router = express.Router();
const {
  upsertAdTimeSpent,
  getTotalTimeSpentOnSection,
  getUserTimeSpentOnSection,
  getTimeSpentOnEachAd,
  getTimeSpentOnEachAdByUser,
} = require('../controllers/timeSpent.controller.js');
const isAdmin = require('../middleware/isAdmin.js');
const { isUserLoggedIn } = require('../middleware/isUserLoggedIn.js');

router.post('/upsert', isUserLoggedIn, upsertAdTimeSpent);
router.get('/total/:sectionName', isUserLoggedIn, getTotalTimeSpentOnSection);
router.get('/user/:sectionName', isUserLoggedIn, getUserTimeSpentOnSection);
router.get('/ad/:adId', isAdmin, getTimeSpentOnEachAd);
router.get('/ad/user/:adId', isUserLoggedIn, getTimeSpentOnEachAdByUser);

module.exports = router;
