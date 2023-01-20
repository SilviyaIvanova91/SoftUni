const catBreed = require("../data/breeds.json");
const fs = require("fs");
const path = require("path");

exports.getBreedPage = (req, res) => {
  res.render("addBreed", { catBreed });
};

exports.createBreed = (req, res) => {
  const { breed } = req.body;

  catBreed.push(breed);

  const json = JSON.stringify(catBreed, null, 2);
  fs.writeFileSync(path.resolve(__dirname, "../data/breeds.json"), json);

  res.redirect("/cats/add-breed");
};
