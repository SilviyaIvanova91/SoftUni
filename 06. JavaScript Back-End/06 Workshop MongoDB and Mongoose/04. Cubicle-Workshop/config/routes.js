let router = require("express").Router();

const homeController = require("../controllers/homeController");
const errorController = require("../controllers/errorController");
const createController = require("../controllers/createController");
const accessorryController = require("../controllers/accessorryController");

router.get("/", homeController.getHomePage);
router.get("/about", homeController.getAboutPage);
router.get("/404", errorController.getErrorPage);

router.get("/create", createController.getCreateCube);
router.post("/create", createController.postCreateCube);
router.get("/details/:id", createController.getDetails);

router.get("/create/accessory", accessorryController.getAccessory);
router.post("/create/accessory", accessorryController.postAccessory);

router.get("/cubes/:id/attach", createController.getAttachAccessory);
router.post("/cubes/:id/attach", createController.postAttachAccessory);

module.exports = router;
