const router = require("express").Router();

const homeController = require("./controllers/homeControllers");
const autheController = require("./controllers/authController");
const cryptoController = require("./controllers/cryptoController");

router.use(homeController);
router.use(autheController); //router.use("/auth', autheController);
router.use("/crypto", cryptoController);

router.all("*", (req, res) => {
  res.render("home/404");
});

module.exports = router;
