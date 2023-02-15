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

exports.aplyyJob = async (jobsId, userId) => {
  const ad = await Ad.findById(jobsId);
  const user = await User.findById(ad.author);
  console.log(ad);
  console.log(user);
  ad.ussersApplied.push(userId);
  user.adds.push(jobsId);

  ad.save();
  user.save();
};

exports.getAppliedUser = async (userId) => {
  return User.find({ _id: userId }).lean();
};

exports.edit = async (id, job) => {
  const existingAd = await Ad.findByIdAndUpdate(id, job);

  existingAd.headline = job.headline;
  existingAd.location = job.location;
  existingAd.companyName = job.companyName;
  existingAd.companyDescription = job.companyDescription;

  await existingAd.save();
};

exports.deleteAuction = async (id) => {
  await Ad.findByIdAndDelete(id);
};
