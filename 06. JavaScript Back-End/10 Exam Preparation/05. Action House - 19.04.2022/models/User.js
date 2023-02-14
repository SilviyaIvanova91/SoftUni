const { Schema, model, Types } = require("mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "Email is required!"],
    match: [/^[A-Za-z]+@[A-Za-z]+\.[A-Za-z]+?/, "Invalid email!"],
  },

  firstName: {
    type: String,
    required: [true, "First name is required!"],
    minLength: [1, "First name must be at least 1"],
  },
  lastName: {
    type: String,
    required: [true, "Last name is required!"],
    minLength: [1, "Last name must be at least 1"],
  },
  hashedPassword: {
    type: String,
    required: [true, "Password is required!"],
    minLength: [5, "Password must be at least 5"],
  },
  closedAuction: [{ type: Types.ObjectId, ref: "ClosedActions" }],
});

const User = model("User", userSchema);
module.exports = User;
