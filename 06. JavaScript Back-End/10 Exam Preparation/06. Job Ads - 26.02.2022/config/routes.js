const router = require("express").Router();

const homeController = require("../controllers/homeController");
const authController = require("../controllers/authController");
const jobsController = require("../controllers/jobController");
const searchController = require("../controllers/searchController");

router.use(homeController);
router.use("/auth", authController);
router.use("/jobs", jobsController);
router.use(searchController);

router.all("*", (req, res) => {
  res.render("404", { title: "Error Page" });
});

module.exports = router;
