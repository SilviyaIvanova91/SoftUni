const { getTopAds } = require("../services/jobsServices");

const router = require("express").Router();

router.get("/", async (req, res) => {
  const ads = await getTopAds(3);
  res.render("home", { title: "Home Page", ads });
});

module.exports = router;
