const { Schema, model, Types } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username name is required!"],
    minLength: [2, "Username name should be at least 2 characters long"],
  },
  email: {
    type: String,
    required: [true, "Email is required!"],
    minLength: [10, "Email should be at least 10 characters long"],
  },
  hashedPassword: { type: String, required: [true, "Password is required!"] },
});

const User = model("User", userSchema);
module.exports = User;
