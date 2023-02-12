const router = require("express").Router();

const homeController = require("../controllers/homeController");
const authController = require("../controllers/authController");
const auctionController = require("../controllers/auctionController");

router.use(homeController);
router.use("/auth", authController);
router.use("/auction", auctionController);

module.exports = router;
