const { Schema, model, Types } = require("mongoose");

const photoSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minLength: [2, "name must be at least 2 characters long"],
  },
  imageUrl: {
    type: String,
    required: [true, "Image is required"],
    match: [/^https?.\/\//, "Image must be a valid URL!"],
  },
  age: {
    type: Number,
    required: [true, "Age is required"],
    minLength: [1, "Age must be at least 1 characters long"],
    maxLength: [100, "Age must be no longer than 100 characters"],
  },
  description: {
    type: String,
    required: [true, "Description is required!"],
    minLength: [5, "Description must be at least 5 characters"],
    maxLength: [50, "Description must be no longer than 50 characters"],
  },
  location: {
    type: String,
    required: [true, "Location is required"],
    minLength: [5, "Location must be at least 5 characters"],
    maxLength: [50, "Location must be no longer than 50 characters"],
  },
  owner: { type: String, ref: "User" },
  commentList: [{ type: Object, ref: "User" }],
});

const Photo = model("Photo", photoSchema);
module.exports = Photo;
