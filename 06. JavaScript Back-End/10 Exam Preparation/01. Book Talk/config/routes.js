let router = require("express").Router();

const homeController = require("../controllers/homeController");
const authController = require("../controllers/authController");
const bookController = require("../controllers/booksController");

router.get("/", homeController.getHomePage);
router.get("/404", homeController.getErrorPage);

router.use("/", authController);

router.get("/catalog", bookController.getCatalogBooks);

router.get("/book/create", bookController.getCreateBook);
router.post("/book/create", bookController.postCreateBook);

module.exports = router;
