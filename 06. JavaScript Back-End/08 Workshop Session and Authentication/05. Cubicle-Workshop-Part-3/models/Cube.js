const { Schema, model, Types } = require("mongoose");

const cubeSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true, maxLength: 100 },
  imageUrl: {
    type: String,
    required: true,
    match: [/^https?:\/\//, "This is not a valid image URL"],
  },
  difficultyLevel: { type: Number, required: true, min: 1, max: 5 },
  accessories: { type: [Types.ObjectId], default: [], ref: "Accessory" },
  creatorrId: { type: String, ref: "User" },
});

const Cube = model("Cube", cubeSchema);

module.exports = Cube;
