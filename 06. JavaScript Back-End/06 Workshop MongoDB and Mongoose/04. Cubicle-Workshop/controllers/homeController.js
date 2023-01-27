const { getAll } = require("../services/cubeServices");
const router = require("express").Router();

router.get("/", async (req, res) => {
  let cube = await getAll();
  console.log(cube);

  res.render("home", { cube });
});

router.get("/about", (req, res) => {
  res.render("about");
});

module.exports = router;
