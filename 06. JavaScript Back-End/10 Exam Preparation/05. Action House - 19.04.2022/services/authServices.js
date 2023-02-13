const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "thisisverysecretforauctionproject";

exports.register = async (email, firstName, lastName, password) => {
  const existingEmail = await User.findOne({ email });
  if (existingEmail) {
    throw new Error("Email is taken!");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    email,
    firstName,
    lastName,
    hashedPassword,
  });

  return createSession(user);
};

exports.login = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Invalid username or password!");
  }

  const hasMatch = await bcrypt.compare(password, user.hashedPassword);

  if (!hasMatch) {
    throw new Error("Invalid username or password!");
  }

  return createSession(user);
};

function createSession({ _id, email, firstName, lastName }) {
  const payload = { _id, email, firstName, lastName };

  return jwt.sign(payload, JWT_SECRET);
}

exports.verifyToken = (token) => {
  return jwt.verify(token, JWT_SECRET);
};
