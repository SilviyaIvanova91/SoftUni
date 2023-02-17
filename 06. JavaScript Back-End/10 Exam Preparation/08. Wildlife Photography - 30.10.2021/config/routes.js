const router = require("express").Router();
const homeController = require("../controller/homeController");
const authController = require("../controller/authController");
const postController = require("../controller/postController");
const myPostController = require("../controller/myPostController");

router.use(homeController);
router.use("/auth", authController);
router.use("/photography", postController);
router.use(myPostController);

router.get("*", (req, res) => {
  res.render("404");
});

module.exports = router;
