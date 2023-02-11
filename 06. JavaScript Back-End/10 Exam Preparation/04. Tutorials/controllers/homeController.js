const { getAllByDate, getRecent } = require("../services/courseServices");
//const { getAll } = require("../services/courseServices");

const router = require("express").Router();

router.get("/", async (req, res) => {
  let view;
  let courses = [];

  if (req.user) {
    view = "home/user-home";
    courses = await getAllByDate(req.query.search);
    console.log(req.query.search);
  } else {
    view = "home/guest-home";
    courses = await getRecent();
  }

  res.render(view, {
    title: "Home Page",
    courses,
    search: req.query.serach,
  });
});

// router.get("/", async (req, res) => {
//   console.log("From the homeController >>>");
//   // console.log(req.user);
//   const course = await getAll();
//   // console.log(tutorials);
//   let courses;

//   if (req.user) {
//     courses = course.sort((a, b) => Number(a.createdAt) - Number(b.createdAt));

//     for (const cour of courses) {
//       let timestamp = Number(cour.createdAt);
//       let date1 = new Date(timestamp).toDateString().slice(0, -5);
//       let date2 = new Date(timestamp).toTimeString().slice(0, 8);

//       cour.toShow = date1 + " " + date2;
//     }
//   } else {
//     courses = course
//       .sort((a, b) => b.usersEnrolled.length - a.usersEnrolled.length)
//       .slice(0, 3);

//     for (const cour of courses) {
//       cour.toShow = cour.enrollCourses.length;
//     }
//   }

//   res.render("home/home", { title: "Home Page", courses });
// });

module.exports = router;
