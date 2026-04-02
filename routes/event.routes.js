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
  addUnarchiveEventReason,
  getRequiredAmountEvents,
  filterEvents,
  checkDuplicateEvent,
} = require('../controllers/event.controllers');
const isAdmin = require('../middleware/isAdmin');

router.get('/test', test);
router.post('/create', isAdmin, addEvents);
router.post('/check-duplicate', isAdmin, checkDuplicateEvent);
router.get('/landing-page/limit', getRequiredAmountEvents);
router.get('/admin-events', isAdmin, getAdminEvents);
router.get('/', getAllEvents);
router.get('/filter', filterEvents);
router.get('/archived', isAdmin, getArchivedEvents);
router.get('/:id', getEvent);
router.patch('/:id', isAdmin, updateEvent);
router.delete('/:id', isAdmin, deleteEvent);
router.patch('/archive/:eventId', isAdmin, archiveEvent);
router.post('/unarchive-reason/:eventId', isAdmin, addUnarchiveEventReason);

module.exports = router;
