const { getById } = require("../services/auctionServices");

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
    const auction = await getById(req.params.id);
    if (req.user && auction.author == req.user._id) {
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
