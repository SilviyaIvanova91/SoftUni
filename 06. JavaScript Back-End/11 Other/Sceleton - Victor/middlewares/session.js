const { verifyToken } = require("../services/userService");

module.exports = () => (req, res, next) => {
  const token = req.cookies.token;
  if (token) {
    try {
      const userData = verifyToken(token);
      req.user = userData;
    } catch (err) {
      console.log("Invalid token");
      res.clearCookie("token");
      res.redirect("/auth/login");
      return;
    }
  }

  next();
};
