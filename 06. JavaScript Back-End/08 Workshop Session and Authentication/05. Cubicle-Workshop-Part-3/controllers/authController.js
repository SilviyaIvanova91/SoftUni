const { register, login } = require("../services/userService");

const router = require("express").Router();

router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  //console.log(req.body);

  try {
    if (username == "" || password == "") {
      throw new Error("All fields are required!");
    }

    const token = login(username, password);
    res.cookie("token", token);
    res.redirect("/");
  } catch (error) {
    console.log(error.message);
    res.redirect("/404");
  }
});

router.get("/register", (req, res) => {
  res.render("register");
});

router.post("/register", async (req, res) => {
  const { username, password, repeatPassword } = req.body;
  //console.log(req.body);

  try {
    if (username == "" || password == "" || repeatPassword == "") {
      throw new Error("All fields are required!");
    }
    if (password !== repeatPassword) {
      throw new Error("Passwords don't match");
    }

    const token = await register(username, password);
    // console.log(token);

    res.cookie("token", token);
    res.redirect("/login");
  } catch (error) {
    console.log(error.message);
    res.redirect("/404");
  }
});

router.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.redirect("/");
});

module.exports = router;
