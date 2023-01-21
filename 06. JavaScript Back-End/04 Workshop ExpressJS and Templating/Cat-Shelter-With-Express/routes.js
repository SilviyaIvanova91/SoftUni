const router = require("express").Router();

const homeController = require("./controllers/homeController");
const addBreedController = require("./controllers/breedController");
const addCatController = require("./controllers/catsController");

router.get("/", homeController.getHomePage);

router.get("/cats/add-breed", addBreedController.getBreedPage);
router.post("/cats/add-breed", addBreedController.createBreed);

router.get("/cats/add-cat", addCatController.getCatPage);
router.post("/cats/add-cat", addCatController.createCat);
router.get("/edit/:id", addCatController.getCatsDetails);
router.post("/edit/:id", addCatController.editCatDetails);
router.get("/delete/:id", addCatController.getShelterCats);
router.post("/delete/:id", addCatController.shelterCatDetails);

module.exports = router;
