const router = require("express").Router();

const homeController = require("../controllers/homeController");
const authController = require("../controllers/authController");
const auctionController = require("../controllers/auctionController");
const closeActionController = require("../controllers/closedAuctionController");

router.use(homeController);
router.use("/auth", authController);
router.use("/auction", auctionController);
router.use(closeActionController);

module.exports = router;
