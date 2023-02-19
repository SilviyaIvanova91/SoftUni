const { Schema, model, Types } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required!"],
    match: [
      /^[A-Za-z]+ [A-Za-z]+$/gm,
      "Name must be a valid - 'Alexandur Petrov'!",
    ],
  },
  username: {
    type: String,
    required: [true, "Username is required!"],
    minLength: [5, "Username should be at least 5 characters long"],
  },
  hashedPassword: { type: String, required: [true, "Password is required!"] },
});

const User = model("User", userSchema);
module.exports = User;
