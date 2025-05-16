const express = require('express');
const { asyncWrap } = require('../utils/asyncWrap');
const {
  signupController,
  loginUser,
  logoutUser,
} = require('../controllers/user.controllers');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Working');
});

router.post('/signup', signupController);

router.post('/login', loginUser);

router.post('/logout', logoutUser);

module.exports = router;
