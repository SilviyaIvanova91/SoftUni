const { Schema, model } = require("mongoose");

const accessorySchema = new Schema({
  name: { type: String, required: true },
  imageUrl: {
    type: String,
    required: true,
    // match: [/^https?:\/\//, "This is not a valid image URL"],
  },
  description: { type: String, required: true, maxLength: 100 },
});

const Accessory = model("Accessory", accessorySchema);

module.exports = Accessory;
