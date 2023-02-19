const router = require("express").Router();
const homeController = require("../controller/homeController");
const authController = require("../controller/authController");
const houseController = require("../controller/houseController");

router.use(homeController);
router.use("/auth", authController);
router.use("/estate", houseController);

router.get("*", (req, res) => {
  res.render("404");
});

module.exports = router;
