const Publications = require("../models/Publications");
const User = require("../models/User");

exports.getByUserId = (id) => {
  return User.findById(id);
};

exports.getSharePost = (userId) => {
  return Publications.find({ usersShare: userId });
};

exports.getAuthorPublic = (userId) => {
  return Publications.find({ author: userId });
};
