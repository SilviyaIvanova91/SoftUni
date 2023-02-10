function hasUser() {
  return (req, res, next) => {
    if (req.user) {
      next();
    } else {
      res.redirect("/404");
    }
  };
}

function isOwner() {
  return (req, res, next) => {
    if (
      req.user &&
      res.locals.crypto.owner.toString() == req.user._id.toString()
    ) {
      res.locals.isOwner = true;
      next();
    } else {
      res.redirect("/404");
    }
  };
}

module.exports = {
  hasUser,
  isOwner,
};
