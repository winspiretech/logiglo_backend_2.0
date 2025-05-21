const express = require('express');
const { asyncWrap } = require('../utils/asyncWrap');
const {
  signupController,
  loginUser,
  logoutUser,
  getUsers,
  getAdmins,
  changeUserRole,
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

module.exports = router;
