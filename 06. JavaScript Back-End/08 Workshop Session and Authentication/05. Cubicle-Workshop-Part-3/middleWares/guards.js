const Cube = require("../models/Cube");

function hasUser() {
  return (req, res, next) => {
    if (req.user) {
      if (req.user != undefined) {
        next();
      }
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

function isOwner(user, cube) {
  return cube._id == user;
}

module.exports = {
  hasUser,
  isGuest,
  isOwner,
};

// function isOwner() {
//   return async (req, res, next) => {
//     if (req.user) {
//       res.redirect("/login");
//     } else {
//       const cube = await Cube.findById(req.params.id).lean();
//       if (cube.creatorrId === req.user._id) {
//         next();
//       } else {
//         res.redirect("/");
//       }
//     }
//   };
// }
