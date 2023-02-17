const { Schema, model, Types } = require("mongoose");

const userSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "First name is required!"],
    minLength: [3, "First name should be at least 3 characters long"],
  },
  lastName: {
    type: String,
    required: [true, "Last name is required!"],
    minLength: [5, "Last name should be at least 5 characters long"],
  },
  email: {
    type: String,
    required: [true, "Email is required!"],
    match: [/^[A-Za-z]+@[A-Za-z]+\.[A-Za-z]+?/, "Invalid email!"],
  },
  hashedPassword: { type: String, required: [true, "Password is required!"] },
  posts: [{ type: Object, ref: "Post" }],
});

const User = model("User", userSchema);
module.exports = User;
