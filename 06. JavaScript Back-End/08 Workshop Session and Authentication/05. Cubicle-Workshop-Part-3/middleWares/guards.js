const Cube = require("../models/Cube");

function hasUser() {
  return (req, res, next) => {
    if (req.user) {
      const token = req.cookies["token"];
      req.user = token["token"];
      next();
    } else {
      res.redirect("/login");
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
    if (req.user) {
      res.redirect("/login");
    } else {
      const cube = await Cube.findById(req.params.id).lean();
      if (cube.creatorrId === req.user._id) {
        next();
      } else {
        res.redirect("/");
      }
    }
  };
}

module.exports = {
  hasUser,
  isGuest,
  isOwner,
};
