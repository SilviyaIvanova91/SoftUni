const { regiter, login } = require("../services/authServices");
const User = require("../models/User");

const router = require("express").Router();

router.get("/register", (req, res) => {
  res.render("auth/register");
});

router.post("/register", async (req, res) => {
  try {
    if (
      req.body.email == "" ||
      req.body.username == "" ||
      req.body.password == "" ||
      req.body.rePass == ""
    ) {
      return res.render("auth/register", { error: "All fields are required!" });
    }

    if (req.body.password != req.body.rePass) {
      return res.render("auth/register", { error: "Passwords don/'t match" });
    }

    const token = await regiter(
      req.body.email,
      req.body.username,
      req.body.password
    );
    res.cookie("token", token);
    res.redirect("/");
  } catch (error) {
    console.log(error.message);
    return res.render("auth/register", { error: error.message });
  }
});

router.get("/login", (req, res) => {
  res.render("auth/login");
});

router.post("/login", async (req, res) => {
  try {
    if (req.body.email == "" || req.body.password == "") {
      return res.render("auth/login", { error: "All fields are required!" });
    }

    const token = await login(req.body.email, req.body.password);

    res.cookie("token", token);
    res.redirect("/");
  } catch (error) {
    console.log(error.message);
    return res.render("auth/login", { error: error.message });
  }
});

router.get("/logout", async (req, res) => {
  req.session = null;
  res.clearCookie("token");
  res.clearCookie("token.sig");
  res.redirect("/");
});

module.exports = router;
