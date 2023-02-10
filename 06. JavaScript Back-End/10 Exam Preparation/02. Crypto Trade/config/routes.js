const router = require("express").Router();

const homeController = require("../controllers/homeControllers");
const authController = require("../controllers/authController");
const cryptoController = require("../controllers/cryptoController");
const searchController = require("../controllers/searchController");

router.use(homeController);
router.use("/auth", authController);
router.use("/crypto", cryptoController);
router.use(searchController);

module.exports = router;
