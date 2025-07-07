const express = require('express');
const router = express.Router();
const { isUserLoggedIn } = require('../middleware/isUserLoggedIn');
const {
  createRating,
  getAllRatingsByCourseId,
  getIndividualRatingById,
} = require('../controllers/rating.controller');

router.post('/create/:courseId', isUserLoggedIn, createRating);
router.get('/:courseId', getAllRatingsByCourseId);
router.get('/user/:courseId', isUserLoggedIn, getIndividualRatingById);

module.exports = router;
