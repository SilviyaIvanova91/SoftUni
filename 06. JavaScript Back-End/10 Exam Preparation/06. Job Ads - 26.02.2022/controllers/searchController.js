const { searchJob, getNeededInfo } = require("../services/searchServices");

const router = require("express").Router();

router.get("/search", async (req, res) => {
  const { search } = req.query;
  const found = await searchJob(search);
  const jobs = await getNeededInfo(found).lean();

  res.render("search", { title: "Searching Page", jobs });
});

module.exports = router;
