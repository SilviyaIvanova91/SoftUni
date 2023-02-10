const router = require("express").Router();
const homeController = require("../controllers/homeController");
const authController = require("../controllers/authController");
const hotelController = require("../controllers/hotelController");
const profileController = require("../controllers/profileController");

router.use(homeController);
router.use("/auth", authController);
router.use("/hotel", hotelController);
router.use(profileController.profileController);

module.exports = router;
