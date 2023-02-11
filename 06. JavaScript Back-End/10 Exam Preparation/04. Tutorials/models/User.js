const { Schema, model, Types } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username is required!"],
    unique: true,
  },
  hashedPassword: {
    type: String,
    required: [true, "Password is required!"],
  },
  enrollCourses: { type: [Types.ObjectId], ref: "Course", default: [] },
});

const User = model("User", userSchema);

module.exports = User;
