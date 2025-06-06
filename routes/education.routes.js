const express = require('express');
/* course imports */
const {
  createCourse,
  getAllCourses,
  editCourse,
  deleteCourse,
  getCourseById,
  validateCourseById,
} = require('../controllers/courseController');

// modules imports
const {
  createCourseModule,
  editCourseModule,
  deleteCourseModule,
  getCourseModules,
} = require('../controllers/courseModuleController');

// request imports
const {
  createRequest,
  getAllRequests,
  updateRequestStatus,
} = require('../controllers/RequestToConnect.js');
const router = express.Router();
const { authenticateAdmin } = require('../middleware/authMiddleware.js');
const isAdmin = require('../middleware/isAdmin.js');

// imports for course enquiries
const {
  handleCourseEnquiry,
  getAllEnquiries,
} = require('../controllers/courseEnquiryController');

// routes for course management
router.post('/createcourse', isAdmin, createCourse);
router.put('/editCourse/:id', editCourse);
router.delete('/deleteCourse/:id', deleteCourse);
router.get('/getAllCourses', getAllCourses);
router.get('/getCourseById/:id', getCourseById);
router.patch('/validateCourse/:id', validateCourseById);

// routes for course modules
router.post('/courses/:courseId/modules', createCourseModule);
router.put('/modules/:moduleId', editCourseModule);
router.delete('/modules/:moduleId', deleteCourseModule);
router.get('/courses/:courseId/modules', getCourseModules);

// POST route for submitting a course enquiry
router.post('/enquire', handleCourseEnquiry);
router.get('/getAllEnquiries', getAllEnquiries);

// routes of request to connect
router.post('/requests', createRequest);
router.get('/requests', getAllRequests);
router.patch('/requests/:id/status', updateRequestStatus);

module.exports = router;
