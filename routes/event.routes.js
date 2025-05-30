const express = require('express');
const router = express.Router();
const {
  test,
  addEvents,
  getAllEvents,
  getEvent,
  updateEvent,
  deleteEvent,
  getAdminEvents,
} = require('../controllers/event.controllers');
const isAdmin = require('../middleware/isAdmin');

router.get('/test', test);
router.post('/create', isAdmin, addEvents);
router.get('/admin-events', isAdmin, getAdminEvents);
router.get('/', getAllEvents);
router.get('/:id', getEvent);
router.patch('/:id', isAdmin, updateEvent);
router.delete('/:id', isAdmin, deleteEvent);

module.exports = router;
