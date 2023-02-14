const router = require("express").Router();
const { hasUser } = require("../middleware/guards");
const {
  create,
  getAll,
  getById,
  getByCreateUser,
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
  res.render("jobs/details", { title: "Details Page", job, email });
});

module.exports = router;
