const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "thisisstupidpasswordforjobadssproject";

exports.register = async (email, password, skills) => {
  const existingEmail = await User.findOne({ email });
  if (existingEmail) {
    throw new Error("Email is taken!");
  }
  console.log(email, password, skills);
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({ email, hashedPassword, skills });

  return createSession(user);
};

exports.login = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Invalid email or password!");
  }

  const hasMatch = await bcrypt.compare(password, user.hashedPassword);
  if (hasMatch == false) {
    throw new Error("Invalid email or password!");
  }

  return createSession(user);
};

function createSession({ _id, email }) {
  const payload = {
    _id,
    email,
  };

  return jwt.sign(payload, JWT_SECRET);
}

exports.veryfyToken = (token) => {
  return jwt.verify(token, JWT_SECRET);
};
