const router = require("express").Router();
const { hasUser, isOwner } = require("../middleware/guards");
const {
  create,
  getAll,
  getById,
  getByCreateUser,
  aplyyJob,
  getAppliedUser,
  edit,
  deleteAuction,
} = require("../services/jobsServices");
const { getErrorMessage } = require("../utils/errorUtils");

router.get("/catalog", async (req, res) => {
  const ads = await getAll();

  res.render("jobs/catalog", { title: "Catalog Page", ads });
});

router.get("/create", hasUser(), (req, res) => {
  res.render("jobs/create", { title: "Create Page" });
});

router.post("/create", hasUser(), async (req, res) => {
  try {
    const ad = {
      headline: req.body.headline,
      location: req.body.location,
      companyName: req.body.companyName,
      companyDescription: req.body.companyDescription,
      author: req.user._id,
    };

    await create(ad);
    res.redirect("/jobs/catalog");
  } catch (error) {
    console.log(error.message);
    res.render("jobs/create", { error: getErrorMessage(error) });
  }
});

router.get("/details/:id", async (req, res) => {
  const job = await getById(req.params.id);

  const user = await getByCreateUser(job.author);
  const email = Object.assign(user.map((u) => u.email));

  job.isOwner = req.user && job.author == req.user._id ? true : false;
  job.isApply =
    req.user &&
    job.ussersApplied.map((c) => c.toString()).includes(req.user._id.toString())
      ? true
      : false;

  const length = job.ussersApplied.length > 0 ? true : false;

  const applyUser = await getAppliedUser(job.ussersApplied);
  console.log(applyUser);

  res.render("jobs/details", {
    title: "Details Page",
    job,
    email,
    length,
    applyUser,
  });
});

router.get("/apply/:id", hasUser(), async (req, res) => {
  const ad = await getById(req.params.id);
  const userInfo = req.user;
  try {
    if (ad.author == req.user._id) {
      ad.isOwner = true;
      return res.render(`jobs/details`, {
        ad,
        error: "Cannot aplly for your own job",
      });
    }

    await aplyyJob(req.params.id, req.user._id, userInfo);
    res.redirect(`/jobs/details/${req.params.id}`);
  } catch (error) {
    return res.render(`jobs/details`, {
      ad,
      error: getErrorMessage(error),
    });
  }
});

router.get("/edit/:id", hasUser(), isOwner(), async (req, res) => {
  const job = await getById(req.params.id);
  res.render("jobs/edit", { title: "Edit Page", job });
});

router.post("/edit/:id", hasUser(), isOwner(), async (req, res) => {
  const { headline, location, companyName, companyDescription } = req.body;
  try {
    await edit(req.params.id, {
      headline,
      location,
      companyName,
      companyDescription,
    });

    res.redirect(`/jobs/details/${req.params.id}`);
  } catch (error) {
    return res.render(`jobs/details/${req.params.id}`, {
      error: getErrorMessage(error),
    });
  }
});

router.get("/delete/:id", hasUser(), async (req, res) => {
  try {
    await deleteAuction(req.params.id);

    res.redirect("/jobs/catalog");
  } catch (error) {
    console.log(error);
    return res.render(`jobs/details/${req.params.id}`, {
      error: getErrorMessage(error),
    });
  }
});

module.exports = router;
