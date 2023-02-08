const { Schema, model, Types } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minLength: [4, "Username must be at least 4 characters long!"],
  },
  email: {
    type: String,
    required: true,
    minLength: [10, "Email must be at least 10 characters long!"],
  },
  hashedPassword: {
    type: String,
    required: true,
    minLength: [3, "Password must be at least 3 characters long!"],
  },
  // wishingList: { type: [Types.ObjectId], ref: "Book", default: [] },
});

const User = model("User", userSchema);

module.exports = User;
