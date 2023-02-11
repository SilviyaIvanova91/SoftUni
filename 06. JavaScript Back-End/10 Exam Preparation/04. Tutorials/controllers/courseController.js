const router = require("express").Router();
const { hasUser, isOwner } = require("../middleware/guards");
const {
  create,
  getById,
  enrollCourse,
  edit,
  deleteCourse,
} = require("../services/courseServices");
const { getErrorMessage } = require("../util/errorUtils");

router.get("/create", hasUser(), (req, res) => {
  res.render("course/create", { title: "Create Course Page" });
});

router.post("/create", hasUser(), async (req, res) => {
  try {
    const course = {
      title: req.body.title,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
      duration: req.body.duration,
      owner: req.user._id,
    };
    await create(course);
    res.redirect("/");
  } catch (error) {
    console.log(error);
    return res.render("course/create", { error: getErrorMessage(error) });
  }
});

router.get("/details/:id", async (req, res) => {
  const course = await getById(req.params.id);

  if (!course) {
    throw new Error("Course not found!");
  }

  if (!course.enrolled) {
    course.enrolled = [];
  }

  course.isOwner = req.user && course.owner == req.user._id ? true : false;

  course.isEnroll =
    req.user &&
    course.enrolled.map((c) => c.toString()).includes(req.user._id.toString())
      ? true
      : false;

  res.render("course/details", { title: "Details Page", course });
});

router.get("/enroll/:id", hasUser(), async (req, res) => {
  const course = await getById(req.params.id);

  try {
    if (course.owner == req.user._id) {
      course.isOwner = true;
      return res.render(`hotel/details`, {
        hotel,
        error: "Cannot book your own hotel",
      });
    }

    await enrollCourse(req.params.id, req.user._id);
    res.redirect(`/course/details/${req.params.id}`);
  } catch (error) {
    return res.render(`hotel/details`, {
      hotel,
      error: getErrorMessage(error),
    });
  }
});

router.get("/edit/:id", isOwner(), hasUser(), async (req, res) => {
  const course = await getById(req.params.id);
  res.render("course/edit", { title: "Edit Course Page", course });
});

router.post("/edit/:id", isOwner(), hasUser(), async (req, res) => {
  const { title, description, imageUrl, duration } = req.body;
  await edit(req.params.id, { title, description, imageUrl, duration });

  res.redirect(`/course/details/${req.params.id}`);
});

router.get("/delete/:id", isOwner(), hasUser(), async (req, res) => {
  await deleteCourse(req.params.id);

  res.redirect("/");
});

module.exports = router;
