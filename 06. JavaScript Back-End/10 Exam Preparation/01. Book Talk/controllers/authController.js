const { register, login } = require("../services/authServices");

const router = require("express").Router();

router.get("/auth/register", (req, res) => {
  res.render("auth/register");
});

router.post("/auth/register", async (req, res) => {
  try {
    if (
      req.body.email == "" ||
      req.body.username == "" ||
      req.body.password == "" ||
      req.body.rePass == ""
    ) {
      res.render("auth/register", { error: "All fields are required!" });
      return;
    }

    if (req.body.password != req.body.rePass) {
      return res.render("auth/register", { error: "Passwords don/'t match" });
    }

    const token = await register(
      req.body.email,
      req.body.username,
      req.body.password
    );

    res.cookie("token", token);
    res.redirect("/");
  } catch (error) {
    console.log(error.message);
    res.redirect("/404", { error: error.message });
  }
});

router.get("/auth/login", (req, res) => {
  res.render("auth/login");
});

router.post("/auth/login", async (req, res) => {
  try {
    if (req.body.email == "" || req.body.password == "") {
      return res.render("auth/login", { error: "All fields are required!" });
    }

    const token = await login(req.body.email, req.body.password);
    res.cookie("token", token);
    res.redirect("/");
  } catch (error) {
    console.log(error.message);
    res.redirect("/404", { error: error.message });
  }
});

router.get("/auth/logout", async (req, res) => {
  req.session = null;
  res.clearCookie("token");
  res.clearCookie("token.sig");
  return res.redirect("/");
  // res.clearCookie("token");
  // res.redirect("/");
});

module.exports = router;
