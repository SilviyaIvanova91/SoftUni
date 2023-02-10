const { Schema, model, Types } = require("mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  hashedPassword: { type: String, required: true },
  bookedHotel: { type: [Types.ObjectId], ref: "Hotel" },
  offeredHotel: { type: [Types.ObjectId], ref: "Hotel" },
});

const User = model("User", userSchema);

module.exports = User;
