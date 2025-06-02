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
  archiveEvent,
  getArchivedEvents,
} = require('../controllers/event.controllers');
const isAdmin = require('../middleware/isAdmin');

router.get('/test', test);
router.post('/create', isAdmin, addEvents);
router.get('/admin-events', isAdmin, getAdminEvents);
router.get('/', getAllEvents);
router.get('/archived', isAdmin, getArchivedEvents);
router.get('/:id', getEvent);
router.patch('/:id', isAdmin, updateEvent);
router.delete('/:id', isAdmin, deleteEvent);
router.patch('/archive/:eventId', isAdmin, archiveEvent);

module.exports = router;
