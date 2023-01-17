const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
  author: String,
  content: { type: String, required: true },
});

const Comment = model("Article", commentSchema);

module.exports = Comment;
