const { hasUser } = require("../middleware/guards");
const { create, getAll } = require("../services/houseServices");
const { getErrorMessage } = require("../utils/errorUtils");

const router = require("express").Router();

router.get("/catalog", async (req, res) => {
  const houses = await getAll();
  res.render("housing/catalog", { title: "Catalog", houses });
});

router.get("/create", async (req, res) => {
  res.render("housing/create", { title: "Create Publication" });
});

router.post("/create", hasUser(), async (req, res) => {
  try {
    const house = {
      name: req.body.name,
      type: req.body.type,
      year: req.body.year,
      city: req.body.city,
      imageUrl: req.body.imageUrl,
      description: req.body.description,
      pieces: req.body.pieces,
      owner: req.user._id,
    };

    await create(house);
    res.redirect("/estate/catalog");
  } catch (error) {
    console.log(error.message);
    res.render("housing/create", { error: getErrorMessage(error) });
  }
});

module.exports = router;
