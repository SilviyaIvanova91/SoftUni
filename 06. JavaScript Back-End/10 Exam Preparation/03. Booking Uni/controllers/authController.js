const { register, login } = require("../services/authServices");
const { body, validationResult } = require("express-validator");

const router = require("express").Router();

router.get("/register", (req, res) => {
  res.render("auth/register");
});

router.post(
  "/register",
  body("email", "Email is required!")
    .isEmail()
    .withMessage("Invalid email!")
    .isLength({ min: 10 })
    .withMessage("Email must be at least 10 characters long!"),
  body("username", "Username is required!")
    .isLength({ min: 4 })
    .withMessage("Username must be at least 4 characters long!"),
  body("password", "Password is required!")
    .isLength({ min: 3 })
    .withMessage("Password must be at least 3 characters long!"),
  body("rePass", "Repeat password, please!").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Passwords don't match!");
    }
    return true;
  }),
  async (req, res) => {
    const { email, username, password, rePass } = req.body;
    const { errors } = validationResult(req);

    try {
      if (errors.length > 0) {
        throw new Error(
          Object.values(errors)
            .map((e) => e.msg)
            .join("\n")
        );
      }
      console.log(errors);

      if (email == "" || username == "" || password == "" || rePass == "") {
        throw new Error("All fields are required");
      }

      if (password !== rePass) {
        throw new Error("Password missmatch!");
      }
      console.log(email, username, password, rePass);

      const token = await register(email, username, password);
      res.cookie("token", token);
      res.redirect("/");
    } catch (error) {
      console.log(error.message);
      return res.render("auth/register", { error: error.message });
    }
  }
);

router.get("/login", (req, res) => {
  res.render("auth/login");
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    if (username == "" || password == "") {
      throw new Error("All fields are required");
    }
    console.log(username, password);
    const token = await login(username, password);
    res.cookie("token", token);
    res.redirect("/");
  } catch (error) {
    console.log(error.message);
    return res.render("auth/login", { error: error.message });
  }
});

router.get("/logout", (req, res) => {
  res.session = null;
  res.clearCookie("token");
  res.clearCookie("token.sig");
  res.redirect("/");
});

module.exports = router;
