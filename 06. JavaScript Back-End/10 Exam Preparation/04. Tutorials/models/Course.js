const { Schema, model, Types } = require("mongoose");

const courseSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required!"],
    unique: true,
    minLength: [4, "Title must be at least 4 characters"],
  },
  description: {
    type: String,
    required: [true, "Description is required!"],
    minLength: [20, "Title must be at least 4 characters"],
    maxLength: [50, "Description must be less than 50 symbols"],
  },
  imageUrl: {
    type: String,
    required: [true, "Image is required!"],
    match: [/^https?/, "Image must be a valid URL!"],
  },
  duration: {
    type: String,
    required: [true, "Duration is required!"],
  },
  createdAt: {
    type: String,
    default: () => new Date().toISOString().slice(0, 10),
  },
  enrolled: {
    type: [Types.ObjectId],
    ref: "User",
    default: [],
  },
  userCount: { type: Number, default: 0 },
  owner: {
    type: Types.ObjectId,
    required: [true, "Owner is required!"],
    ref: "User",
  },
});

const Course = model("Course", courseSchema);

module.exports = Course;
