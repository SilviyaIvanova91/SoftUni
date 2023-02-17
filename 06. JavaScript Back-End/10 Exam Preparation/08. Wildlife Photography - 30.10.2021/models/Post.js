const { Schema, model, Types } = require("mongoose");

const postSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    // minLength: [6, "Title must be at least 6 characters long"],
  },
  keyword: {
    type: String,
    required: [true, "Key word is required"],
    minLength: [6, "Key word must be at least 6 characters long"],
  },
  location: {
    type: String,
    required: [true, "Location is required"],
    maxLength: [15, "Location must be at least 15 characters long"],
  },
  date: {
    type: String,
    required: [true, "Date of createion name is required"],
    minLength: [10, "Date must be 10 characters long - '02.02.2021'"],
    maxLength: [10, "Date must be 10 characters long - '02.02.2021'"],
  },
  imageUrl: {
    type: String,
    required: [true, "Image is required"],
    match: [/^https?.\/\//, "Image must be a valid URL!"],
  },
  description: {
    type: String,
    required: [true, "Description is required!"],
    minLength: [8, "Description must be at least 8 characters"],
  },
  author: { type: Types.ObjectId, ref: "User" },
  votes: [{ type: String, ref: "User" }],
  rating: { type: Number, default: 0 },
});

const Post = model("Post", postSchema);
module.exports = Post;
