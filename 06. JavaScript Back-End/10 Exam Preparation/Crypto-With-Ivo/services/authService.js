const User = require("../models/User");
const bcrypt = require("bcrypt");

const jwt = require("../lib/jsonwebtoken");
const { SECRET } = require("../constants");

exports.findByUsedrname = (username) => User.findOne({ username });
exports.findByEmail = (email) => User.findOne({ email });

exports.register = async (username, email, password, repeatPassword) => {
  //Validate password
  if (password !== repeatPassword) {
    throw new Error("Password missmatch!");
  }

  // TODO: Check user exists
  const existingUser = await this.findByUsedrname(username);
  //const existingUser = await User.find({ $or: [{ email }, { username }] }); // or търси дали съществъва в имейл или юзър
  if (existingUser) {
    throw new Error("User exists!");
  }

  // TODO: Validate password  --> mongoos can't validate hashedPassword
  if (password.length < 4) {
    throw new Error("Password to short");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await User.create({ username, email, password: hashedPassword });

  // TODO login authomaticaly
  return this.login(email.password);
};

exports.login = async (email, password) => {
  // User exists
  const user = await this.findByEmail(email);
  if (!user) {
    throw new Error("Invalid email or password");
  }

  // Password is valid
  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    throw new Error("Invalid email or password");
  }

  //Generate token
  const payload = {
    _id: user._id,
    email,
    username: user.username,
  };

  const token = await jwt.sign(payload, SECRET);
  return token;
};
