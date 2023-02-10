const Hotel = require("../models/Hotel");
const { getById } = require("../services/hotelServices");
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
    const hotel = await getById(req.params.id);
    if (req.user && hotel.owner == req.user._id) {
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
