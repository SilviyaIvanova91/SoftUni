const { hasUser, isOwner } = require("../middleware/guards");
const {
  create,
  getAll,
  getById,
  createUser,
  sharedArt,
  edit,
  deletePublic,
} = require("../services/galleryServices");
const { getErrorMessage } = require("../utils/errorUtils");

const router = require("express").Router();

router.get("/catalog", async (req, res) => {
  const publication = await getAll();
  res.render("gallery/catalog", { title: "Catalog", publication });
});

router.get("/create", hasUser(), (req, res) => {
  res.render("gallery/create", { title: "Create Publication" });
});

router.post("/create", hasUser(), async (req, res) => {
  try {
    const publication = {
      title: req.body.title,
      technique: req.body.technique,
      imageUrl: req.body.imageUrl,
      certificate: req.body.certificate,
      author: req.user._id,
    };

    await create(publication);
    res.redirect("/gallery/catalog");
  } catch (error) {
    console.log(error.message);
    res.render("gallery/create", { error: getErrorMessage(error) });
  }
});

router.get("/details/:id", async (req, res) => {
  const publication = await getById(req.params.id);

  const user = await createUser(publication.author);
  const username = Object.assign(user.map((u) => u.username));

  publication.isOwner = publication.author == req.user?._id ? true : false;
  publication.isShared =
    req.user &&
    publication.usersShare
      .map((c) => c.toString())
      .includes(req.user._id.toString());

  res.render("gallery/details", { title: "Details", publication, username });
});

router.get("/share/:id", hasUser(), async (req, res) => {
  const public = await getById(req.params.id);

  try {
    if (public.author == req.user._id) {
      public.isOwner = true;
      return res.render(`gallery/details`, {
        public,
        error: "Cannot share for your own publication",
      });
    }

    await sharedArt(req.params.id, req.user._id);
    res.redirect(`/gallery/details/${req.params.id}`);
  } catch (error) {
    console.log(error.message);
    res.render("gallery/details", { error: getErrorMessage(error) });
  }
});

router.get("/edit/:id", hasUser(), isOwner(), async (req, res) => {
  const publication = await getById(req.params.id);
  res.render("gallery/edit", { title: "Edit Publication", publication });
});

router.post("/edit/:id", hasUser(), isOwner(), async (req, res) => {
  try {
    const { title, technique, imageUrl, certificate } = req.body;

    await edit(req.params.id, {
      title,
      technique,
      imageUrl,
      certificate,
    });

    res.redirect(`/gallery/details/${req.params.id}`);
  } catch (error) {
    const publication = await getById(req.params.id);

    console.log(error.message);
    res.render("gallery/edit", { error: getErrorMessage(error), publication });
  }
});

router.get("/delete/:id", hasUser(), isOwner(), async (req, res) => {
  try {
    await deletePublic(req.params.id);
    res.redirect("/gallery/catalog");
  } catch (error) {
    console.log(error);
    return res.render(`gallery/details/${req.params.id}`, {
      error: getErrorMessage(error),
    });
  }
});

module.exports = router;
