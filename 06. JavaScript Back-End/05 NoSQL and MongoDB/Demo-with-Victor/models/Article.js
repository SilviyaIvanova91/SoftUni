const { Schema, model, Types } = require("mongoose");

const articleSchema = new Schema({
  author: String,
  title: { type: String, required: true, minLength: 10 },
  content: { type: String, required: true, minLength: 10 },
  comments: { type: [Types.ObjectId], default: [], ref: "Comment" },
});

const Article = model("Article", articleSchema);

module.exports = Article;
