const Ad = require("../models/Ad");
const User = require("../models/User");

exports.getAll = () => {
  return Ad.find({}).lean();
};

exports.getById = (id) => {
  return Ad.findById(id).lean();
};

exports.create = async (jobsData) => {
  return await Ad.create(jobsData);
};

exports.getByCreateUser = async (userId) => {
  return User.find(userId);
};

exports.getTopAds = (size) => {
  return Ad.find({}).limit(size).lean();
};
