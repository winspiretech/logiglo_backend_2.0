const express = require('express');
const router = express.Router();
const {
  createEventInterset,
  getAllEventIntrested,
  getInterestedDataByEventId,
} = require('../controllers/eventInterseted.Controllers.js');
const isAdmin = require('../middleware/isAdmin.js');
const { isUserLoggedIn } = require('../middleware/isUserLoggedIn.js');

router.get('/all-data', isAdmin, getAllEventIntrested);
router.post('/create/:eventId', isUserLoggedIn, createEventInterset);
router.get('/:eventId', isAdmin, getInterestedDataByEventId);

module.exports = router;
