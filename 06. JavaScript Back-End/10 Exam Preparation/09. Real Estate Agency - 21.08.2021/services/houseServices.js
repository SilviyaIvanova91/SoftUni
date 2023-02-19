const Housing = require("../models/Housing");
const User = require("../models/User");

exports.getAll = () => {
  return Housing.find({}).lean();
};

exports.getById = (id) => {
  return Housing.findById(id).lean();
};

exports.create = async (houseBody) => {
  return Housing.create(houseBody);
};
