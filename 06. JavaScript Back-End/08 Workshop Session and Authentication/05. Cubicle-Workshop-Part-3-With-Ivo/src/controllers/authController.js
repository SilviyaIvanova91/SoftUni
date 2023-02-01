const router = require("express").Router();

const authSrevices = require("../services/authServices");

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
    console.log(error);
  }

  res.redirect("/");
});

router.get("/register", (req, res) => {
  res.render("auth/register");
});

router.post("/register", async (req, res) => {
  const { username, password, repeatPassword } = req.body;

  if (password != repeatPassword) {
    return res.redirect("/404");
  }

  const existingUser = await authSrevices.getUserByUsername(username);

  if (existingUser) {
    return res.redirect("/404");
  }

  const user = await authSrevices.register(username, password);
  console.log(user);
  res.redirect("/login");
});

router.get("/logout", (req, res) => {
  res.clearCookie("auth");

  res.redirect("/");
});

module.exports = router;
