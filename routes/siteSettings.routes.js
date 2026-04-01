const express = require('express');
const router = express.Router();
const {
  test,
  getCareersIframeUrl,
  updateCareersIframeUrl,
} = require('../controllers/siteSettings.controllers');
const isAdmin = require('../middleware/isAdmin');

router.get('/test', test);
router.get('/careers-iframe', getCareersIframeUrl); // public - user frontend uses this
router.patch('/careers-iframe', isAdmin, updateCareersIframeUrl); // admin only

module.exports = router;
