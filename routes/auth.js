// const express = require('express');
// const passport = require('passport');
// const router = express.Router();

// // Step 1: Redirect user to LinkedIn
// router.get('/auth/linkedin', passport.authenticate('linkedin'));

// // Step 2: Handle callback from LinkedIn after login
// router.get(
//   '/auth/linkedin/callback',
//   passport.authenticate('linkedin', {
//     failureRedirect: 'http://localhost:3001/login',
//   }),
//   (req, res) => {
//     const user = req.user;
//     const userData = {
//       firstName: user.name?.givenName || '',
//       lastName: user.name?.familyName || '',
//       email: user.emails?.[0]?.value || '',
//       profileUrl: user._json?.vanityName || '',
//     };

//     const encodedData = encodeURICompon`ent(JSON.stringify(userData));

//     // Redirect to signup page on frontend with prefilled LinkedIn data
//     res.redirect(`http://localhost:3001/signup?linkedin_data=${encodedData}`);
//   },
// );

// module.exports = router;
