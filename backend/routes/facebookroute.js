const express = require("express");
const facebookroute = express.Router();
const User = require("../mongomodals/Doctormodal");
const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
let userprofile = "";

const session = require("express-session");
const { deleteOne } = require("../mongomodals/Doctormodal");
facebookroute.use(session({ secret: "benjimen" }));
facebookroute.use(passport.initialize());
facebookroute.use(passport.session());
passport.serializeUser((user, cb) => cb(null, user));
passport.deserializeUser((user, cb) => cb(null, user));

facebookroute.get("/profile", (req, res) => {
  res.send(userprofile);
  userprofile = "";
});

passport.use(
  new FacebookStrategy(
    {
      clientID: "443314923550424",
      clientSecret: "33480d45b1dc8305c86dc3d4b60d036f",
      callbackURL:
        "https://guarded-bastion-92719.herokuapp.com/facebook/auth/facebook/callback",
      profileFields: ["name", "id", "email"],
    },
    function (accessToken, refreshToken, profile, cb) {
      userprofile = profile;
      return cb(null, profile);
    }
  )
);

facebookroute.get(
  "/auth/facebook",
  passport.authenticate("facebook", { scope: "email" })
);

facebookroute.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect:
      "https://guarded-bastion-92719.herokuapp.com/authpage/login",
    // successRedirect: "/facebook/profile",
    failureRedirect: "/error",
  })
);

module.exports = facebookroute;
