const { loginAdmin } = require('../controllers/admin.controllers');

const express = require('express');

const router = express.Router();

router.post('/login', loginAdmin);

module.exports = router;
