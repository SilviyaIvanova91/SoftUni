const router = require("express").Router();

const authSrevices = require("../services/authServices");
const { parseMongooseError } = require("../utils/errorUtils");

router.get("/login", (req, res) => {
  res.render("auth/login");
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const token = await authSrevices.login(username, password);
    //console.log(token);

    res.cookie("auth", token, { httpOnly: true });
  } catch (error) {
    console.log(error.message);
    return res.render("auth/login", { error: error.message });
  }

  res.redirect("/");
});

router.get("/register", (req, res) => {
  res.render("auth/register");
});

router.post("/register", async (req, res, next) => {
  const { username, password, repeatPassword } = req.body;

  if (password != repeatPassword) {
    return next(new Error("Password missmatch!"));

    // return res.render("auth/register", { error: "Password missmatch!" });
    // return res.redirect("/404");
  }

  const existingUser = await authSrevices.getUserByUsername(username);

  if (existingUser) {
    return res.render("auth/register", { error: "User already exists!" });

    // return res.redirect("/404");
  }

  try {
    const user = await authSrevices.register(username, password);
    console.log(user);
  } catch (err) {
    console.log(err.message);
    const errors = parseMongooseError(err);

    return res.render("auth/register", { error: errors[0] });
    // return next(err);
  }

  res.redirect("/login");
});

router.get("/logout", (req, res) => {
  res.clearCookie("auth");

  res.redirect("/");
});

module.exports = router;
