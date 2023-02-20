const { getById } = require("../services/photosServices");

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
    const photos = await getById(req.params.id);
    if (req.user && photos.owner == req.user.username) {
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
