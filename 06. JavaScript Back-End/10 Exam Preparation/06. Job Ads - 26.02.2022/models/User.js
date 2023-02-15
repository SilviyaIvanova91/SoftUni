const { Schema, model, Types } = require("mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    match: [/^[A-Za-z]+@[A-Za-z]+\.[A-Za-z]+?/, "Invalid email!"],
  },
  hashedPassword: {
    type: String,
    required: [true, "Password is required"],
  },
  skills: {
    type: String,
    required: [true, "Description is required"],
    maxLength: [
      40,
      "The description of skills should be maximumof 40 characters long",
    ],
  },
  adds: [
    {
      type: Types.ObjectId,
      ref: "Ad",
    },
  ],
});

const User = model("User", userSchema);
module.exports = User;
