const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/auth/linkedin', passport.authenticate('linkedin'));

router.get(
  '/auth/linkedin/callback',
  passport.authenticate('linkedin', {
    failureRedirect: 'http://localhost:3001/login',
    session: false,
  }),
  (req, res) => {
    const { name, email } = req.user;

    const userData = {
      firstName: name?.given_name || '',
      lastName: name?.family_name || '',
      email: email || '',
    };

    const encodedData = encodeURIComponent(JSON.stringify(userData));
    res.redirect(`http://localhost:3001/signup?linkedin_data=${encodedData}`);
  },
);

module.exports = router;
