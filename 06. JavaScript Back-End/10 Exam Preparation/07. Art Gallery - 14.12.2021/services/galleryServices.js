const Publications = require("../models/Publications");
const User = require("../models/User");

exports.getAll = () => {
  return Publications.find({}).lean();
};

exports.getById = (id) => {
  return Publications.findById(id).lean();
};

exports.create = async (artBody) => {
  return Publications.create(artBody);
};

exports.createUser = async (id) => {
  return User.find(id);
};

exports.sharedArt = async (publicId, userId) => {
  const public = await Publications.findById(publicId);
  const user = await User.findById(userId);

  public.usersShare.push(userId);
  user.publications.push(publicId);

  public.save();
  user.save();
};

exports.edit = async (artId, public) => {
  const oldPublic = await Publications.findByIdAndUpdate(artId, public);

  oldPublic.title = public.title;
  oldPublic.technique = public.technique;
  oldPublic.imageUrl = public.imageUrl;
  oldPublic.certificate = public.certificate;

  await oldPublic.save();
};

exports.deletePublic = async (id) => {
  await Publications.findByIdAndDelete(id);
};
