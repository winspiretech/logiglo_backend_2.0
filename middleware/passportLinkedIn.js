const passport = require("passport");
const LinkedInStrategy = require("passport-linkedin-oauth2").Strategy;

passport.use(new LinkedInStrategy({
  clientID: "86bv26n5h5bvsl",
  clientSecret: "hoIhsj0h3NxlgyzH",
  callbackURL: "http://localhost:3000/auth/linkedin/callback",  // UPDATE in prod later
  scope: ['r_emailaddress', 'r_liteprofile'],
}, (accessToken, refreshToken, profile, done) => {
  return done(null, profile);  // You can store/access profile here
}));

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((obj, done) => {
  done(null, obj);
});
