const { getById } = require("../services/postServices");

function hasUser() {
  return (req, res, next) => {
    if (req.user) {
      next();
    } else {
      res.redirect("/404");
    }
  };
}

function isGuest() {
  return (req, res, next) => {
    if (req.user) {
      res.redirect("/");
    } else {
      next();
    }
  };
}

function isOwner() {
  return async (req, res, next) => {
    const post = await getById(req.params.id);
    if (req.user && post.author == req.user._id) {
      res.locals.isOwner = true;
      next();
    } else {
      res.redirect("/404");
    }
  };
}

module.exports = {
  hasUser,
  isGuest,
  isOwner,
};
