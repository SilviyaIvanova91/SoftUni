const Post = require("../models/Post");
const User = require("../models/User");

exports.getMyPosts = (userId) => {
  return Post.find({ author: userId }).lean();
};
