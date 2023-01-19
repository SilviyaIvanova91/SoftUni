const router = require("express").Router();

const homeController = require("./controllers/homeController");
const createController = require("./controllers/createController");

router.get("/", homeController.getHomePage);
router.get("/about", homeController.getAboutPage);
router.get("/404", homeController.getErrorPage);

router.get("/create", createController.getCube);
router.post("/create", createController.createCube);
router.get("/details/:id", createController.getDetails);

module.exports = router;
