const express = require('express');
const createCourse = require('../controllers/Education/courseController');
const upload = require('../middelwares/upload.middelware');
const router = express.Router();

router.post(
  '/createCourse',
  upload.fields([
    { name: 'logo', maxCount: 1 },
    { name: 'brochure', maxCount: 1 },
  ]),
  createCourse,
);

module.exports = router;
