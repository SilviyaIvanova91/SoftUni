const dataCats = require("../data/cats.json");
const catBreed = require("../data/breeds.json");
const fs = require("fs");
const path = require("path");
const Cat = require("../models/Cats");

exports.getCatPage = (req, res) => {
  res.render("addCat", { catBreed });
};

exports.createCat = (req, res) => {
  const id = dataCats.cats[dataCats.cats.length - 1].id + 1;
  const { name, description, upload, breed } = req.body;
  let cat = new Cat(id, name, description, upload, breed);

  dataCats.cats.push(cat);

  const json = JSON.stringify(dataCats, null, 2);
  fs.writeFileSync(path.resolve(__dirname, "../data/cats.json"), json);

  res.redirect("/");
};

exports.getCatsDetails = (req, res) => {
  const catId = Number(req.params.id);
  if (!catId) {
    return res.redirect("404");
  }

  let cats = dataCats.cats.find((c) => c.id === catId);
  if (!cats) {
    return res.redirect("404");
  }

  res.render("editCat", { cats, catBreed });
};

exports.editCatDetails = (req, res) => {
  const catId = Number(req.params.id);
  let cat = dataCats.cats.find((c) => c.id === catId);
  const catIndex = dataCats.cats.indexOf(cat);

  const { name, description, upload, breed } = req.body;

  const editedCat = new Cat(catId, name, description, upload, breed);
  console.log(req.body);
  dataCats.cats.splice(catIndex, 1, editedCat);

  const json = JSON.stringify(dataCats, null, 2);
  fs.writeFileSync(path.resolve(__dirname, "../data/cats.json"), json);

  res.redirect(`/`);
};

exports.getShelterCats = (req, res) => {
  const catId = Number(req.params.id);
  if (!catId) {
    return res.redirect("404");
  }

  let cats = dataCats.cats.find((c) => c.id === catId);
  if (!cats) {
    return res.redirect("404");
  }

  res.render("catShelter", { cats, catBreed });
};

exports.shelterCatDetails = (req, res) => {
  const catId = Number(req.params.id);
  let cat = dataCats.cats.find((c) => c.id === catId);
  const catIndex = dataCats.cats.indexOf(cat);
  console.log(catId);
  console.log(cat);
  console.log(catIndex);
  dataCats.cats.splice(catIndex, 1);

  const json = JSON.stringify(dataCats, null, 2);
  fs.writeFileSync(path.resolve(__dirname, "../data/cats.json"), json);

  res.redirect(`/`);
};
