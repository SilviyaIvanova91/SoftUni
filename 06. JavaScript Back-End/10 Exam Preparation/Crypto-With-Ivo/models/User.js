const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      requires: [true, "Username is required"],
      minLength: 5,
    },
    email: {
      type: String,
      requires: [true, "Email is required"],
      minLength: 10,
    },
    password: {
      type: String,
      requires: [true, "Password is required"],
    },
  }
  // {
  //   //поле което го има, но не се запазва в базата данни
  //   virtuals: {
  //     repeatPassword: {
  //       set(value) {
  //         if (this.password !== value) {
  //           throw new mongoose.Error("Password missmatch!");
  //         }
  //       },
  //     },
  //   },
  // }
);

// userSchema.virtual('repeatPassword').set

const User = mongoose.model("User", userSchema);

module.exports = User;
