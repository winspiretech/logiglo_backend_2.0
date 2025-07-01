const express = require('express');
const passport = require('passport');
const router = express.Router();

// Start LinkedIn auth
router.get('/auth/linkedin', passport.authenticate('linkedin'));

// Callback from LinkedIn
router.get(
  '/auth/linkedin/callback',
  passport.authenticate('linkedin', {
    failureRedirect: 'http://localhost:3001/login',
  }),
  (req, res) => {
    const user = req.user;
    const userData = {
      firstName: user.name?.givenName || '',
      lastName: user.name?.familyName || '',
      email: user.emails?.[0]?.value || '',
      profileUrl: user._json?.vanityName || '',
    };

    const encodedData = encodeURIComponent(JSON.stringify(userData));

    // redirect to signup page on frontend
    res.redirect(`http://localhost:3001/signup?linkedin_data=${encodedData}`);
  },
);

module.exports = router;
