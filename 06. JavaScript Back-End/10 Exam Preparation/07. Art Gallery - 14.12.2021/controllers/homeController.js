const { getAll } = require("../services/galleryServices");

const router = require("express").Router();

router.get("/", async (req, res) => {
  const publications = await getAll();
  res.render("home", { title: "Home Page", publications });
});

module.exports = router;
