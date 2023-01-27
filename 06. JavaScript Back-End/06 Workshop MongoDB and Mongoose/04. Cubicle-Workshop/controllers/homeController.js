const { getAll } = require("../services/cubeServices");

exports.getHomePage = async (req, res) => {
  let cube = await getAll();
  console.log(cube);

  res.render("home", { cube });
};

exports.getAboutPage = (req, res) => {
  res.render("about");
};
