const Ad = require("../models/Ad");
const User = require("../models/User");

exports.searchJob = async (search) => {
  const user = await User.find({
    email: { $regex: new RegExp(search, "i") },
  });

  return user;
};

exports.getNeededInfo = (userId) => {
  return Ad.find({ author: userId }).lean();
};
