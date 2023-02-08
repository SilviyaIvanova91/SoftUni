const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const JWT_SECRET = "thisisbooksecretkeyforvalidation";

async function register(email, username, password) {
  const existingUsername = await User.findOne({ username }).collation({
    locale: "en",
    strength: 2,
  });
  if (existingUsername) {
    return res.render("auth/register", { error: "Username or Email is taken" });
  }

  const existingEmail = await User.findOne({ email }).collation({
    locale: "en",
    strength: 2,
  });
  if (existingEmail) {
    return res.render("auth/register", { error: "Username or Email is taken" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({ email, username, hashedPassword });

  return createSession(user);
}

async function login(email, password) {
  const user = await User.findOne({ email }).collation({
    locale: "en",
    strength: 2,
  });
  if (!user) {
    return res.render("auth/login", {
      error: "Incorect username or password!",
    });
  }

  const hasMatch = await bcrypt.compare(password, user.hashedPassword);
  if (hasMatch == false) {
    return res.render("auth/login", {
      error: "Incorect username or password!",
    });
  }

  return createSession(user);
}

function createSession({ _id, email, username }) {
  const payload = {
    _id,
    email,
    username,
  };

  return jwt.sign(payload, JWT_SECRET);
}

function verifyToken(token) {
  return jwt.verify(token, JWT_SECRET);
}

module.exports = {
  register,
  login,
  verifyToken,
};
