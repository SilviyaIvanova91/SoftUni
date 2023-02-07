const { register, login } = require("../services/userService");

const router = require("express").Router();

router.get("/register", (req, res) => {
  res.render("register");
});

router.post("/register", async (req, res) => {
  //const { username, password, repeatPassword } = req.body;
  //console.log(req.body);

  try {
    if (
      req.body.username == "" ||
      req.body.password == "" ||
      req.body.repeatPassword == ""
    ) {
      return res.render("register", { error: "All fields are required!" });
      // throw new Error("All fields are required!");
    }
    if (req.body.password !== req.body.repeatPassword) {
      return res.render("register", { error: "Passwords don't match" });

      //throw new Error("Passwords don't match");
    }

    const token = await register(req.body.username, req.body.password);
    // console.log(token);

    res.cookie("token", token);
    res.redirect("/");
  } catch (error) {
    console.log(error.message);
    res.redirect("/404", { error: error.message });
  }
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login", async (req, res) => {
  //const { username, password } = req.body;
  //console.log(req.body);

  try {
    if (req.body.username == "" || req.body.password == "") {
      return res.render("login", { error: "All fields are required!" });

      // throw new Error("All fields are required!");
    }

    const token = await login(req.body.username, req.body.password);
    res.cookie("token", token);
    res.redirect("/");
  } catch (error) {
    console.log(error.message);
    res.redirect("/404", { error: error.message });
  }
});

router.get("/logout", (req, res) => {
  res.clearCookie("token", {
    sameSite: "none",
    secure: true,
  });
  res.redirect("/");
});

module.exports = router;
