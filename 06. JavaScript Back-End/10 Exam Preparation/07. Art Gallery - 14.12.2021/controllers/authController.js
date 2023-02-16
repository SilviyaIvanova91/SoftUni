const { register, login } = require("../services/authServices");
const { getErrorMessage } = require("../utils/errorUtils");

const router = require("express").Router();

router.get("/register", (req, res) => {
  res.render("auth/register", { title: "Register Page" });
});

router.post("/register", async (req, res) => {
  try {
    if (req.body.password != req.body.rePass) {
      throw new Error("Passwords don't match!");
    }
    if (req.body.password.length < 3) {
      throw new Error("Password should be at least 3 characters long");
    }

    const token = await register(
      req.body.username,
      req.body.password,
      req.body.adress
    );

    res.cookie("token", token);
    res.redirect("/");
  } catch (error) {
    console.log(error.message);
    res.render("auth/register", { error: getErrorMessage(error) });
  }
});

router.get("/login", (req, res) => {
  res.render("auth/login", { title: "Login Page" });
});

router.post("/login", async (req, res) => {
  try {
    const token = await login(req.body.username, req.body.password);

    res.cookie("token", token);
    res.redirect("/");
  } catch (error) {
    console.log(error.message);
    res.render("auth/login", { error: getErrorMessage(error) });
  }
});

router.get("/logout", async (req, res) => {
  req.session = null;
  res.clearCookie("token");
  res.clearCookie("token.sig");
  res.redirect("/");
});

module.exports = router;
