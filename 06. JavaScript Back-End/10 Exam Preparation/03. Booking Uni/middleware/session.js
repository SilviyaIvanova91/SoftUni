const { veryfyToken } = require("../services/authServices");

module.exports = () => (req, res, next) => {
  const token = req.cookies.token;
  if (token) {
    try {
      const userData = veryfyToken(token);

      req.user = userData;
      res.locals.user = userData;
    } catch (error) {
      console.log("Invalid token!");
      res.clearCookie("token");
      res.redirect("/auth/login");
      return;
    }
  }
  next();
};
