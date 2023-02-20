const Photo = require("../models/Photo");

exports.getOwnerPhotos = (userUsername) => {
  return Photo.find({ owner: userUsername }).lean();
};
