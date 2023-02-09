let router = require("express").Router();

const homeController = require("../controllers/homeController");
const authController = require("../controllers/authController");
const bookController = require("../controllers/booksController");
const profileController = require("../controllers/profileController");

const { hasUser } = require("../middlewares/guards");

router.get("/", homeController.getHomePage);
router.get("/404", homeController.getErrorPage);

router.use("/", authController);

router.get("/catalog", bookController.getCatalogBooks);

router.get("/book/create", hasUser(), bookController.getCreateBook);
router.post("/book/create", hasUser(), bookController.postCreateBook);
router.get("/book/details/:id", bookController.getDetails);

router.get("/book/edit/:id", hasUser(), bookController.getEditBook);
router.post("/book/edit/:id", hasUser(), bookController.postEditBook);

router.get("/book/delete/:id", hasUser(), bookController.getDeleteBook);

router.get("/book/wish/:id", hasUser(), bookController.wishingBook);

router.get("/profile", hasUser(), profileController.userController);

module.exports = router;
