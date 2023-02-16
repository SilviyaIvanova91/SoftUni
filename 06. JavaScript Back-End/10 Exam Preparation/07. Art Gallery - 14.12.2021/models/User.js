const { Schema, model, Types } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username is required!"],
    minLength: [4, "Username should be at least 4 characters long"],
  },
  hashedPassword: { type: String, required: [true, "Password is required!"] },
  adress: {
    type: String,
    required: [true, "Adress is required!"],
    maxLength: [20, "Adress should be maximum 20 characters long"],
  },
  publications: [{ type: Types.ObjectId, ref: "Publications" }],
});

const User = model("User", userSchema);
module.exports = User;
