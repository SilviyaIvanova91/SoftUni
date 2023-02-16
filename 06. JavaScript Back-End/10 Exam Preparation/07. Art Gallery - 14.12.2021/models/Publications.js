const { Schema, model, Types } = require("mongoose");

const publicationsSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required!"],
    minLength: [6, "Title should be minmum 6 characters long"],
  },
  technique: {
    type: String,
    required: [true, "Technique is required!"],
    maxLength: [15, "Painting technique should be maximum 15 characters long"],
  },
  imageUrl: {
    type: String,
    required: [true, "Art picture is required!"],
    match: [/^https?:\/\//, "Image must be a valid URL!"],
  },
  certificate: {
    type: String,
    required: [true, "Art picture is required!"],
    enum: {
      values: ["Yes", "No"],
      message: 'Certificate of authenticy must be value "Yes" or "No"',
    },
  },
  author: { type: Types.ObjectId, ref: "User" },
  usersShare: [{ type: Types.ObjectId, ref: "User" }],
});

const Publications = model("Publications", publicationsSchema);
module.exports = Publications;
