const express = require('express');
const router = express.Router();
const isAdmin = require('../middleware/isAdmin.js');
const { getNewUsersInDefinedTime } = require("../controllers/adminAnalytics.controllers.js")

router.get('/periodic-signups', isAdmin, getNewUsersInDefinedTime);

module.exports = router;
