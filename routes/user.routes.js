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
  otpVerification,
  resendOtp,
  editUserProfile,
} = require('../controllers/user.controllers');
const isAdmin = require('../middleware/isAdmin');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Working');
});

router.post('/signup', signupController);

router.post('/login', loginUser);

router.post('/logout', logoutUser);

router.get('/all', isAdmin, getUsers);

router.get('/admins', isAdmin, getAdmins);

router.patch('/change-role', isAdmin, changeUserRole);

router.post('/otp-verification', otpVerification);

router.post('/resend-otp', resendOtp);

router.put('/edit-user', editUserProfile);
// api/me route to check the token
router.get(
  '/me',
  isUserLoggedIn,
  asyncWrap(async (req, res) => {
    res.status(200).json(req.loggedInUser);
  }),
);

module.exports = router;
