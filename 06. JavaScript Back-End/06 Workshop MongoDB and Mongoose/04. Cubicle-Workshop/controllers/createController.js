const { create } = require("../services/cubeServices");

let router = require("express").Router();

router.get("/", (req, res) => {
  res.render("create");
});

router.post("/", async (req, res) => {
  try {
    let result = await create(req.body);
    console.log(result);
    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.render("404", {
      titlle: "Request Error",
      body: req.body,
    });
  }
});

// exports.getDetails = (req, res) => {
//   const cubeId = Number(req.params.id);
//   if (!cubeId) {
//     return res.redirect("404");
//   }

//   let cube = data.cubes.find((c) => c.id === cubeId);
//   if (!cube) {
//     return res.redirect("404");
//   }

//   res.render("details", { cube });
// };

module.exports = router;
