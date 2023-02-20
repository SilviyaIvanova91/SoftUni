const Photo = require("../models/Photo");
const User = require("../models/User");

exports.getAll = () => {
  return Photo.find({}).lean();
};

exports.getById = (id) => {
  return Photo.findById(id).lean();
};

exports.create = async (photoBody) => {
  return Photo.create(photoBody);
};

exports.getUser = (id) => {
  return User.find(id);
};

exports.edit = async (photoId, photo) => {
  const oldPphotos = await Photo.findByIdAndUpdate(photoId, photo);

  oldPphotos.name = photo.name;
  oldPphotos.age = photo.age;
  oldPphotos.description = photo.description;
  oldPphotos.location = photo.location;
  oldPphotos.imageUrl = photo.imageUrl;

  await oldPphotos.save();
};

exports.deletePet = async (id) => {
  await Photo.findByIdAndDelete(id);
};

exports.comment = async (photosId, commentData) => {
  const photos = await Photo.findById(photosId);

  photos.commentList.push(commentData);
  photos.save();
};

exports.getComment = async (postId) => {
  return Photo.find({ commentList });
};
