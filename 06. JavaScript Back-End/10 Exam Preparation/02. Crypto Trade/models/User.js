const { Schema, model, Types } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minLength: [5, "Name must be at least 5 characters long!"],
  },
  email: {
    type: String,
    required: true,
    minLength: [10, "Email must be at least 10 characters long!"],
  },
  hashedPassword: { type: String, required: true },
});

const User = model("User", userSchema);
module.exports = User;
