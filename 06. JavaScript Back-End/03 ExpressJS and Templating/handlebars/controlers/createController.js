const { create } = require("../services/productService");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("create");
});

router.post("/", async (req, res, next) => {
  console.log("Handling POST");
  console.log(req.body);

  try {
    await create(req.body.name, Number(req.body.price));
  } catch (err) {
    next(err);
  }

  res.redirect("/catalog");
});

module.exports = router;
