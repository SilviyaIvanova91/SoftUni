const { Schema, model, Types } = require("mongoose");

const postSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minLength: [6, "Title must be at least 6 characters long"],
  },
  type: {
    type: String,
    required: [true, "Type is required"],
    enum: {
      values: ["Apartment", "Villa", "House"],
      message: 'Type must be value "Apartment", "Villa" or "House"',
    },
  },
  year: {
    type: Number,
    required: [true, "Year is required"],
    min: [1850, "Year should be between 1850 and 2021"],
    max: [2021, "Year should be between 1850 and 2021"],
  },
  city: {
    type: String,
    required: [true, "City is required"],
    minLength: [4, "City must be at least 4 characters long"],
  },
  imageUrl: {
    type: String,
    required: [true, "Image is required"],
    match: [/^https?.\/\//, "Image must be a valid URL!"],
  },
  description: {
    type: String,
    required: [true, "Description is required!"],
    maxLength: [60, "Description must be maximum 60 characters"],
  },
  pieces: {
    type: Number,
    required: [true, "Available pieces is required"],
    min: [0, "Available pieces should be positive number (from 0 to 10)"],
    max: [10, "Available pieces should be positive number (from 0 to 10)"],
  },
  rented: [{ type: Types.ObjectId, ref: "User" }],
  owner: { type: Types.ObjectId, ref: "User" },
});

const Post = model("Post", postSchema);
module.exports = Post;
