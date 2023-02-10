const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

JWT_SECRET = "thisisveryverysecretforbookinguniproject";

exports.register = async (email, username, password) => {
  const existingEmail = await User.findOne({ email });
  if (existingEmail) {
    throw new Error("1Username or email is taken!");
  }
  const existingUsername = await User.findOne({ username });
  if (existingUsername) {
    throw new Error("Username or email is taken!");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({ email, username, hashedPassword });
  return createSession(user);
};

exports.login = async (username, password) => {
  const user = await User.findOne({ username });
  if (!user) {
    throw new Error("Invalid username or password!");
  }

  const hasmatch = await bcrypt.compare(password, user.hashedPassword);
  if (hasmatch == false) {
    throw new Error("Invalid username or password!");
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

exports.veryfyToken = (token) => {
  return jwt.verify(token, JWT_SECRET);
};
