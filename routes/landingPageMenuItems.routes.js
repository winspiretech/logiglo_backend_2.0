const express = require('express');
const router = express.Router();
const menuItemsController = require('../controllers/landingPageMenuItems.controller');

router.get(
  '/getLandingPageMenuItems',
  menuItemsController.getLandingPageMenuItems,
);
router.post(
  '/updateLandingPageMenuItems',
  menuItemsController.updateLandingPageMenuItems,
);
router.post(
  '/addLandingPageMenuItems',
  menuItemsController.addLandingPageMenuItems,
);
router.get(
  '/getLandingPageMenuItemsAdmin',
  menuItemsController.getLandingPageMenuItemsAdmin,
);

module.exports = router;
