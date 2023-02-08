const { Schema, model, Types } = require("mongoose");

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  hashedPassword: { type: String, required: true },

  wishingList: { type: [Types.ObjectId], ref: "Book" },
});

const User = model("User", userSchema);

module.exports = User;
