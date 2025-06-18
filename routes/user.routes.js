const express = require('express');
const { asyncWrap } = require('../utils/asyncWrap');

const { isUserLoggedIn } = require('../middleware/isUserLoggedIn');
const {
  signupController,
  loginUser,
  logoutUser,
  getUsers,
  getAdmins,
  changeUserRole,
  otpVerification
} = require('../controllers/user.controllers');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Working');
});

router.post('/signup', signupController);

router.post('/login', loginUser);

router.post('/logout', logoutUser);

router.get('/all', getUsers);

router.get('/admins', getAdmins);

router.patch('/change-role', changeUserRole);

router.post('/otp-verification', otpVerification);

// api/me route to check the token
router.get(
  '/me',
  isUserLoggedIn,
  asyncWrap(async (req, res) => {
    res.status(200).json(req.loggedInUser);
  }),
);

module.exports = router;
