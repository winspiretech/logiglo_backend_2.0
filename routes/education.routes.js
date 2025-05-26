const express = require('express');
const {
  createCourse,
  getAllCourses,
  editCourse,
  deleteCourse
} = require('../controllers/courseController');
const createCourseModule = require('../controllers/courseModuleController');
const router = express.Router();
const { authenticateAdmin } = require('../middleware/authMiddleware.js');
const isAdmin = require('../middleware/isAdmin.js');
const {
  handleCourseEnquiry,
} = require('../controllers/courseEnquiryController');

router.get('/getAllCourses', getAllCourses);

router.put('/courses/:id', editCourse);

router.post('/createcourse', isAdmin, createCourse);

router.post('/courses/:courseId/modules', isAdmin, createCourseModule);

router.post("/courses/:id", deleteCourse)

// POST route for submitting a course enquiry
router.post('/enquire', handleCourseEnquiry);

module.exports = router;
