const { Schema, model, Types } = require("mongoose");

const cubeSchema = new Schema({
  id: { type: Number },
  name: { type: String, require: true },
  description: { type: String, require: true, maxLength: 100 },
  imageUrl: {
    type: String,
    require: true,
    validate: {
      validator: /^https?/g,
      message: "This is not a valid image URL",
    },
  },
  difficultyLevel: { type: Number, require: true, min: 0, max: 5 },
  // accessories: { type: [Types.ObjectId],default: [], ref:'Accessory'}
});

const Cube = model("Cube", cubeSchema);

module.exports = Cube;
