const Post = require("../models/Post");
const User = require("../models/User");

exports.getAll = () => {
  return Post.find({}).lean();
};

exports.getById = (id) => {
  return Post.findById(id).lean();
};

exports.create = async (postDate, userId) => {
  const user = await User.findById(userId);
  user.posts.push(postDate);
  user.save();
  return Post.create(postDate);
};

exports.getUserData = (id) => {
  return User.findById(id);
};

exports.edit = async (postId, post) => {
  const oldPost = await Post.findByIdAndUpdate(postId, post);

  oldPost.title = post.title;
  oldPost.keyword = post.keyword;
  oldPost.location = post.location;
  oldPost.date = post.date;
  oldPost.imageUrl = post.imageUrl;
  oldPost.description = post.description;

  await oldPost.save();
};

exports.deletePublic = async (id) => {
  await Post.findByIdAndDelete(id);
};

exports.upVote = async (postId, userId) => {
  const post = await Post.findById(postId);

  post.votes.push(userId);
  post.rating++;

  post.save();
};

exports.downVote = async (postId, email) => {
  const post = await Post.findById(postId);

  post.votes.push(email);
  post.rating--;

  post.save();
};

exports.allUser = async (userId) => {
  return User.find(userId);
};
