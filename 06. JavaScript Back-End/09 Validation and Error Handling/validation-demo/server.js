const express = require("express");
const validator = require("validator");
const { body, validationResult } = require("express-validator");

const validators = require("./validators");
const { isEmail } = require("./middleware/validatorMiddleware");

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send(`
      <h1>Hello</h1>
      <p><a href="/login">Login</a></p>
      <p><a href="/register">Register</a></p>
      <p><a href="/profile">Profile</a></p>
      <p><a href="/logout">Logout</a></p>
      `);
});

app.get("/login", (req, res) => {
  res.send(`
    <h1>Sign in</h1>
  <form method="POST">
    <label for="username">Username</label>
    <input type="text" id="username" name="username" />
    <label for="password">Password</label>
    <input type="password" id="password" name="password" />
    <input type="submit" value="login" />
  </form>
      `);
});

app.post("/login", body("email").isEmail, (req, res) => {
  const { email, password } = req.body;

  // app.post("/login", body("email").isEmail, (req, res) => {
  //   const errors = validationResult(req);
  //   if (!errors.isEmpty()) {
  //     res.status(400).json(errors);
  //   }

  //   if (!validators.isEmail(email)) {
  //     return res.redirect("/404");
  //   }

  if (!validator.isStrongPassword(password, { minLength: 5 })) {
    return res.redirect("/404");
  }

  res.redirect("/");
});

app.get("/404", (req, res) => {
  res.send("Not found!");
});

app.listen(3000, () => console.log("Server is listening...."));
