let router = require("express").Router();

const homeController = require("../controllers/homeController");
const errorController = require("../controllers/errorController");
const createController = require("../controllers/createController");
const accessorryController = require("../controllers/accessorryController");
const authControler = require("../controllers/authController");

router.get("/", homeController.getHomePage);
router.get("/about", homeController.getAboutPage);
router.get("/404", errorController.getErrorPage);

router.use("/", authControler);

router.get("/create", createController.getCreateCube);
router.post("/create", createController.postCreateCube);
router.get("/details/:id", createController.getDetails);

router.get("/edit/:id", createController.getEditcube);
router.post("/edit/:id", createController.postEditcube);

router.get("/create/accessory", accessorryController.getAccessory);
router.post("/create/accessory", accessorryController.postAccessory);

router.get("/cubes/:id/attach", createController.getAttachAccessory);
router.post("/cubes/:id/attach", createController.postAttachAccessory);

module.exports = router;
