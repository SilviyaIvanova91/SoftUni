const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const JWT_SECRET = "jdhbaljdbajbfcasecretkeyofwildlifrphotographydkjfcjaefn";

exports.register = async (username, email, password) => {
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    throw new Error("Email is taken");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    username,
    email,
    hashedPassword,
  });
  return createSession(user);
};

exports.login = async (username, password) => {
  const user = await User.findOne({ username });
  if (!user) {
    throw new Error("Invalid username or password!");
  }

  const hasMatch = await bcrypt.compare(password, user.hashedPassword);
  if (hasMatch == false) {
    throw new Error("Invalid username or password!");
  }

  return createSession(user);
};

function createSession({ _id, username, email }) {
  const payload = {
    _id,
    username,
    email,
  };

  return jwt.sign(payload, JWT_SECRET);
}

exports.verifyToken = (token) => {
  return jwt.verify(token, JWT_SECRET);
};
