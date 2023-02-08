const router = require("express").Router();

const homeController = require("./controllers/homeControllers");
const autheController = require("./controllers/authController");

router.use(homeController);
router.use(autheController); //router.use("/auth', autheController);

module.exports = router;
