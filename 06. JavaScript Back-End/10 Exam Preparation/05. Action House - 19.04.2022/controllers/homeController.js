const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("home", { title: "Home Page" });
});

router.get("/404", (req, res) => {
  res.render("404", { title: "Error Page" });
});

module.exports = router;
