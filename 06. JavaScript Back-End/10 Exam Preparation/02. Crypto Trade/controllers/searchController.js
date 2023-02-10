const { getAll } = require("../services/cryptoServices");
const { searchCrypto } = require("../services/searchServices");

const router = require("express").Router();

router.get("/search", async (req, res) => {
  let crypto = await getAll();
  res.render("search", { crypto });
});

router.post("/search", async (req, res) => {
  let { name, payment } = req.body;
  let crypto = await searchCrypto(name, payment);
  res.render("search", { crypto });
});

module.exports = router;
