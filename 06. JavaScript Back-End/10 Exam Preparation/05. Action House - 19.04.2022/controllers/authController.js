const { register, login } = require("../services/authServices");
const { getErrorMessage } = require("../utils/errorUtils");

const router = require("express").Router();

router.get("/register", (req, res) => {
  res.render("auth/register", { title: "Register Page" });
});

router.post("/register", async (req, res) => {
  try {
    if (req.body.password != req.body.rePass) {
      throw new Error("Password don't match");
    }

    const token = await register(
      req.body.email,
      req.body.firstName,
      req.body.lastName,
      req.body.password
    );
    res.cookie("token", token);
    res.redirect("/");
  } catch (error) {
    return res.render("auth/register", { error: getErrorMessage(error) });
  }
});

router.get("/login", (req, res) => {
  res.render("auth/login", { title: "Login Page" });
});

router.post("/login", async (req, res) => {
  try {
    const token = await login(req.body.email, req.body.password);
    res.cookie("token", token);
    res.redirect("/");
  } catch (error) {
    return res.render("auth/login", { error: getErrorMessage(error) });
  }
});

router.get("/logout", (req, res) => {
  res.session = null;
  res.clearCookie("token");
  res.clearCookie("token.sig");
  res.redirect("/");
});

module.exports = router;
