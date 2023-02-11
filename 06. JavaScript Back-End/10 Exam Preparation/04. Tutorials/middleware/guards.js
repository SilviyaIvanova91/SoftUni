const { getById } = require("../services/courseServices");

function hasUser() {
  return (req, res, next) => {
    if (req.user) {
      next();
    } else {
      res.redirect("/auth/login");
    }
  };
}

function isOwner() {
  return async (req, res, next) => {
    const course = await getById(req.params.id);
    if (req.user && course.owner == req.user._id) {
      res.locals.isOwner = true;
      next();
    } else {
      res.redirect("/");
    }
  };
}

module.exports = {
  hasUser,
  isOwner,
};
