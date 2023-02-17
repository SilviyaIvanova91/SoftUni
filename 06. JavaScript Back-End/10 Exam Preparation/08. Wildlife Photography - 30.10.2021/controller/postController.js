const { hasUser, isOwner } = require("../middleware/guards");
const {
  getAll,
  create,
  getById,
  getUserData,
  edit,
  deletePublic,
  upVote,
  downVote,
  allUsersVote,
  allUser,
} = require("../services/postServices");
const { getErrorMessage } = require("../utils/errorUtils");

const router = require("express").Router();

router.get("/catalog", async (req, res) => {
  const post = await getAll();
  res.render("post/catalog", { title: "Catalog", post });
});

router.get("/create", hasUser(), async (req, res) => {
  res.render("post/create", { title: "Create Post" });
});

router.post("/create", hasUser(), async (req, res) => {
  try {
    const post = {
      title: req.body.title,
      keyword: req.body.keyword,
      location: req.body.location,
      date: req.body.date,
      imageUrl: req.body.imageUrl,
      description: req.body.description,
      author: req.user._id,
    };

    await create(post, req.user._id);

    res.redirect("/photography/catalog");
  } catch (error) {
    console.log(error.message);
    res.render("post/create", { error: getErrorMessage(error) });
  }
});

router.get("/details/:id", async (req, res) => {
  const post = await getById(req.params.id);

  post.isOwner = post.author == req.user?._id ? true : false;
  post.hasVote =
    req.user &&
    post.votes.map((c) => c.toString()).includes(req.user.email.toString());

  const createUser = await getUserData(post.author);
  const firstName = createUser.firstName;
  const lastName = createUser.lastName;

  res.render("post/details", {
    title: "Details Page",
    post,
    firstName,
    lastName,
  });
});

router.get("/edit/:id", hasUser(), isOwner(), async (req, res) => {
  const post = await getById(req.params.id);
  res.render("post/edit", { title: "Edit Post", post });
});

router.post("/edit/:id", hasUser(), isOwner(), async (req, res) => {
  try {
    const { title, keyword, location, date, imageUrl, description } = req.body;

    await edit(req.params.id, {
      title,
      keyword,
      location,
      date,
      imageUrl,
      description,
    });

    res.redirect(`/photography/details/${req.params.id}`);
  } catch (error) {
    const post = await getById(req.params.id);

    console.log(error.message);
    res.render("gallery/edit", { error: getErrorMessage(error), post });
  }
});

router.get("/delete/:id", hasUser(), isOwner(), async (req, res) => {
  try {
    await deletePublic(req.params.id);
    res.redirect("/photography/catalog");
  } catch (error) {
    console.log(error);
    return res.render(`post/details/${req.params.id}`, {
      error: getErrorMessage(error),
    });
  }
});

router.get("/upvote/:id", hasUser(), async (req, res) => {
  const post = await getById(req.params.id);

  try {
    if (post.author == req.user._id) {
      post.isOwner = true;
      return res.render(`post/details`, {
        post,
        error: "Cannot vote for your own post",
      });
    }

    await upVote(req.params.id, req.user.email);
    res.redirect(`/photography/details/${req.params.id}`);
  } catch (error) {
    console.log(error.message);
    res.render("post/details", { error: getErrorMessage(error) });
  }
});

router.get("/downvote/:id", hasUser(), async (req, res) => {
  const post = await getById(req.params.id);

  try {
    if (post.author == req.user._id) {
      post.isOwner = true;
      return res.render(`post/details`, {
        post,
        error: "Cannot vote for your own post",
      });
    }
    await downVote(req.params.id, req.user.email);
    res.redirect(`/photography/details/${req.params.id}`);
  } catch (error) {
    console.log(error.message);
    res.render("post/details", { error: getErrorMessage(error) });
  }
});

module.exports = router;
