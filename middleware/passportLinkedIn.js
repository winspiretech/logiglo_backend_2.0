// const passport = require('passport');
// const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;

// passport.use(
//   new LinkedInStrategy(
//     {
//       clientID: '86e4waizk5juyx', // ✅ Your new personal app client ID
//       clientSecret: 'WPL_AP1.ZMj6EqGFUJVjVsoH.G2OplQ==', // ✅ Your new personal secret
//       callbackURL: 'http://localhost:3000/auth/linkedin/callback', // For local testing
//       scope: ['r_emailaddress', 'r_liteprofile'],
//     },
//     (accessToken, refreshToken, profile, done) => {
//       return done(null, profile);
//     },
//   ),
// );

// passport.serializeUser((user, done) => {
//   done(null, user);
// });

// passport.deserializeUser((obj, done) => {
//   done(null, obj);
// });
