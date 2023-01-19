const data = require("../services/database.json");

exports.getHomePage = (req, res) => {
  let cubes = data.cubes;
  const { search, from, to } = req.query;

  if (search) {
    cubes = cubes.filter((c) =>
      c.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (from) {
    cubes = cubes.filter((c) => c.difficultyLevel >= Number(from));
  }

  if (to) {
    cubes = cubes.filter((c) => c.difficultyLevel <= Number(to));
  }

  res.render("home", { cubes });
};

exports.getAboutPage = (req, res) => {
  res.render("about");
};

exports.getErrorPage = (req, res) => {
  res.render("404");
};
