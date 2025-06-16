const express = require('express');
const router = express.Router();
const {
  createContactUs,
  getAllContactUs,
} = require('../controllers/contact.controller');

router.post('/create', createContactUs);
router.get('/all-data', getAllContactUs);

module.exports = router;
