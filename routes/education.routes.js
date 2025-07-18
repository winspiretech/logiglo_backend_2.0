const express = require('express');
/* course imports */
const {
  createCourse,
  getAllCourses,
  editCourse,
  deleteCourse,
  getCourseById,
  validateCourseById,
  getExpiringCourses,
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
  getRequestById,
} = require('../controllers/RequestToConnect.js');
const router = express.Router();
const { authenticateAdmin } = require('../middleware/authMiddleware.js');
const isAdmin = require('../middleware/isAdmin.js');

// imports for course enquiries
const {
  handleCourseEnquiry,
  getAllEnquiries,
  getEnquiryById,
  updateEnquiryStatus,
} = require('../controllers/courseEnquiryController');

// routes for course management
router.post('/createcourse', isAdmin, createCourse);
router.put('/editCourse/:id', editCourse);
router.delete('/deleteCourse/:id', deleteCourse);
router.get('/getAllCourses', getAllCourses);
router.get('/getCourseById/:id', getCourseById);
router.patch('/validateCourse/:id', validateCourseById);
router.get('/getExpiringCourses', getExpiringCourses);

// routes for course modules
router.post('/courses/:courseId/modules', createCourseModule);
router.put('/modules/:moduleId', editCourseModule);
router.delete('/modules/:moduleId', deleteCourseModule);
router.get('/courses/:courseId/modules', getCourseModules);

// POST route for submitting a course enquiry
router.post('/doEnquire', handleCourseEnquiry);
router.get('/getAllEnquiries', getAllEnquiries);
router.get('/course-enquiry/:id', getEnquiryById);
router.patch('/course-enquiry/:id/status', updateEnquiryStatus);

// routes of request to connect
router.post('/requests', createRequest);
router.get('/requests', getAllRequests);
router.patch('/requests/:id/status', updateRequestStatus);
router.get('/request/:id', getRequestById);

module.exports = router;
