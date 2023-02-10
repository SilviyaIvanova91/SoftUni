const { getAll } = require("../services/hotelServices");

const router = require("express").Router();

router.get("/", async (req, res) => {
  const hotels = await getAll();
  res.render("home", { hotels });
});

module.exports = router;
