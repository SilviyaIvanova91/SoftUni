const data = require("../services/database.json");
const Cube = require("../services/Cube");
const fs = require("fs");
const path = require("path");

exports.getCube = (req, res) => {
  res.render("create");
};

exports.createCube = (req, res) => {
  const id = data.cubes[data.cubes.length - 1].id + 1;
  const { name, description, imageUrl, difficultyLevel } = req.body;

  let cube = new Cube(id, name, description, imageUrl, difficultyLevel);

  data.cubes.push(cube);
  const json = JSON.stringify(data, null, 2);
  fs.writeFileSync(path.resolve(__dirname, "../services/database.json"), json);

  res.redirect("/");
};

exports.getDetails = (req, res) => {
  const cubeId = Number(req.params.id);
  if (!cubeId) {
    return res.redirect("404");
  }

  let cube = data.cubes.find((c) => c.id === cubeId);
  if (!cube) {
    return res.redirect("404");
  }

  res.render("details", { cube });
};
