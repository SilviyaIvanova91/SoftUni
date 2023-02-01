const jwt = require("../lib/jsonwebtoken");
const config = require("../config");

exports.authentication = async (req, res, next) => {
  const token = req.cookies["auth"];

  if (token) {
    //private user
    try {
      const decodedToken = await jwt.verify(token, config.SECRET);

      req.user = decodedToken;
      req.isAuthenticated = true;

      res.locals.username = decodedToken.username;
      res.locals.isAuthenticated = true;
    } catch (error) {
      console.log(error.message);
      res.clearCookie("auth");
      res.redirect("/404");
    }
  }

  next();
};

exports.isAuthenticated = (req, res, next) => {
  if (!req.isAuthenticated) {
    return res.redirect("/login");
  }

  next();
};
