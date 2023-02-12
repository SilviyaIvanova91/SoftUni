const { register, login } = require("../services/authServices");
const { getErrorMessage } = require("../util/errorUtils");
const { body, validationResult } = require("express-validator");

const router = require("express").Router();

router.get("/register", (req, res) => {
  res.render("auth/register", { title: "Register Page" });
});

router.post(
  "/register",
  body("username")
    .isLength({ min: 5 })
    .withMessage("Username must be at least 5 characters long")
    .isAlphanumeric()
    .withMessage("Username should consist only english letters and digits"),
  body("password")
    .isLength({ min: 5 })
    .withMessage("Username must be at least 5 characters long")
    .isAlphanumeric()
    .withMessage("Username should consist only english letters and digits"),
  async (req, res) => {
    try {
      if (errors.length > 0) {
        throw new Error(
          Object.values(errors)
            .map((e) => e.message)
            .join("\n")
        );
      }
      console.log(errors);
      if (req.body.password != req.body.rePass) {
        throw new Error("Password don't match");
      }

      const token = await register(req.body.username, req.body.password);
      res.cookie("token", token);
      res.redirect("/");
    } catch (error) {
      return res.render("auth/register", { error: getErrorMessage(error) });
    }
  }
);

router.get("/login", (req, res) => {
  res.render("auth/login", { title: "Login Page" });
});

router.post("/login", async (req, res) => {
  try {
    const token = await login(req.body.username, req.body.password);
    res.cookie("token", token);
    res.redirect("/");
  } catch (error) {
    return res.render("auth/register", { error: getErrorMessage(error) });
  }
});

router.get("/logout", (req, res) => {
  res.session = null;
  res.clearCookie("token");
  res.clearCookie("token.sig");
  res.redirect("/");
});

module.exports = router;
