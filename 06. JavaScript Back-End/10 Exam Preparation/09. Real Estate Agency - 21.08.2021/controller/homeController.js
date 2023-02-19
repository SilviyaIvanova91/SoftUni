const { getAll } = require("../services/houseServices");

const router = require("express").Router();

router.get("/", async (req, res) => {
  const houses = await getAll();
  res.render("home", houses);
});

module.exports = router;
