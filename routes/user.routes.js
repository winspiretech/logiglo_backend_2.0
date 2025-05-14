const express = require('express');
const { asyncWrap } = require('../utils/asyncWrap');
const {
  signupController,
  loginUser,
} = require('../controllers/user.controllers');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Working');
});

router.post('/signup', signupController);

router.post('/login', loginUser);

module.exports = router;
