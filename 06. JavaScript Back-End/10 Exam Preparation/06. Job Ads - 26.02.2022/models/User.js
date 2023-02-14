const { Schema, model, Types } = require("mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  hashedPassword: {
    type: String,
    required: [true, "Password is required"],
  },
  skills: {
    type: String,
    required: [true, "Description is required"],
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
