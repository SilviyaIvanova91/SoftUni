const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "thiscryptosecretkeyforvalidaition";

exports.regiter = async (email, username, password) => {
  const existingUsername = await User.findOne({ username });
  if (existingUsername) {
    throw new Error("Username or email is taken!");
  }

  const existingEmail = await User.findOne({ email });
  if (existingEmail) {
    throw new Error("Username or email is taken!");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({ username, email, hashedPassword });
  return createSession(user);
};

exports.login = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Incorect username or passwrod");
  }

  const hasMatch = await bcrypt.compare(password, user.hashedPassword);
  if (hasMatch == false) {
    throw new Error("Incorect username or passwrod");
  }

  return createSession(user);
};

function createSession({ _id, email, username }) {
  const payload = {
    _id,
    email,
    username,
  };

  return jwt.sign(payload, JWT_SECRET);
}

exports.verifyToken = (token) => {
  return jwt.verify(token, JWT_SECRET);
};
