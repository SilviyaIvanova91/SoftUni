const router = require("express").Router();
const homeController = require("../controllers/homeController");
const authController = require("../controllers/authController");
const galleryController = require("../controllers/galleryController");
const profileControler = require("../controllers/profileController");

router.use(homeController);
router.use("/auth", authController);
router.use("/gallery", galleryController);
router.use(profileControler);

router.get("*", (req, res) => {
  res.render("404");
});

module.exports = router;
