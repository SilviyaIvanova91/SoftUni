const { hasUser, isOwner } = require("../middleware/guards");
const {
  create,
  getAll,
  getUser,
  getById,
  edit,
  deletePet,
  comment,
} = require("../services/photosServices");
const { getErrorMessage } = require("../utils/errorUtils");

const router = require("express").Router();

router.get("/catalog", async (req, res) => {
  const photos = await getAll();

  res.render("photos/catalog", { title: "Catalog", photos });
});

router.get("/create", hasUser(), (req, res) => {
  res.render("photos/create", { title: "Create Publication" });
});

router.post("/create", hasUser(), async (req, res) => {
  try {
    const photos = {
      name: req.body.name,
      age: req.body.age,
      description: req.body.description,
      location: req.body.location,
      imageUrl: req.body.imageUrl,
      owner: req.user.username,
    };

    await create(photos);
    res.redirect("/photos/catalog");
  } catch (error) {
    console.log(error.message);
    res.render("photos/create", { error: getErrorMessage(error) });
  }
});

router.get("/details/:id", async (req, res) => {
  const photos = await getById(req.params.id);

  photos.isOwner = req.user && photos.owner == req.user.username ? true : false;

  const comment = photos.commentList;

  console.log(comment);
  res.render("photos/details", { title: "Details", photos });
});

router.get("/edit/:id", hasUser(), isOwner(), async (req, res) => {
  const photo = await getById(req.params.id);
  res.render("photos/edit", { title: "Edit Pets", photo });
});

router.post("/edit/:id", hasUser(), isOwner(), async (req, res) => {
  try {
    const { name, age, description, location, imageUrl } = req.body;

    await edit(req.params.id, {
      name,
      age,
      description,
      location,
      imageUrl,
    });

    res.redirect(`/photos/details/${req.params.id}`);
  } catch (error) {
    const photos = await getById(req.params.id);

    console.log(error.message);
    res.render("photos/edit", { error: getErrorMessage(error), photos });
  }
});

router.post("/comment/:id", hasUser(), async (req, res) => {
  const photos = await getById(req.params.id);

  try {
    if (photos.owner == req.user._id) {
      photos.isOwner = true;
      return res.render(`photos/details`, {
        photos,
        error: "Cannot comment your own photos",
      });
    }

    await comment(req.params.id, {
      username: req.user.username,
      comment: req.body.comment,
    });

    res.redirect(`/photos/details/${req.params.id}`);
  } catch (error) {
    console.log(error.message);
    res.render("photos/details", { error: getErrorMessage(error) });
  }
});

router.get("/delete/:id", hasUser(), isOwner(), async (req, res) => {
  try {
    await deletePet(req.params.id);
    res.redirect("/photos/catalog");
  } catch (error) {
    console.log(error);
    return res.render(`photos/details/${req.params.id}`, {
      error: getErrorMessage(error),
    });
  }
});

module.exports = router;
