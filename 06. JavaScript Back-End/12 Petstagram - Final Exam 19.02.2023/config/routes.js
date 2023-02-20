const router = require("express").Router();
const homeController = require("../controller/homeController");
const authController = require("../controller/authController");
const photoController = require("../controller/photosController");
const profileController = require("../controller/profileController");

router.use(homeController);
router.use("/auth", authController);
router.use("/photos", photoController);
router.use(profileController);

router.get("*", (req, res) => {
  res.render("404");
});

module.exports = router;
