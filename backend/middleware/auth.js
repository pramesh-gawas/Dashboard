const SignUp = require("../models/userschema");
const passport = require("passport");
const LocalPassport = require("passport-local").Strategy;

passport.use(
  new LocalPassport(async (USERNAME, password, done) => {
    try {
      const user = await SignUp.findOne({ username: USERNAME });
      if (!user) return done(null, false);

      const isPasswordMatch = user.password === password ? true : false;
      if (isPasswordMatch) {
        return done(null, user, { message: "success" });
      } else {
        return done(null, false, { message: "incorrect password" });
      }
    } catch (error) {
      return done({ error: "data not found" });
    }
  })
);

module.exports = passport;
