const Cube = require("../models/Cube");
const {
  create,
  getById,
  generateOptions,
  edit,
} = require("../services/cubeServices");
let Accessory = require("../models/Accessory");

exports.getCreateCube = (req, res) => {
  res.render("create");
};

exports.postCreateCube = async (req, res) => {
  try {
    let result = await create(req.body);
    // console.log(result);
    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.render("404", {
      titlle: "Request Error",
      body: req.body,
    });
  }
};

exports.getDetails = async (req, res) => {
  const cube = await Cube.findById(req.params.id)
    .populate("accessories")
    .lean();

  if (!cube) {
    return res.redirect("404");
  }

  res.render("details", { cube });
};

exports.getAttachAccessory = async (req, res) => {
  const cube = await Cube.findById(req.params.id).lean();
  const accessories = await Accessory.find({
    _id: { $nin: cube.accessories },
  }).lean();

  //console.log(accessories);
  res.render("attachAccessory", { cube, accessories });
};

exports.postAttachAccessory = async (req, res) => {
  const cube = await Cube.findById(req.params.id);
  const accessorryId = req.body.accessory;

  cube.accessories.push(accessorryId);
  await cube.save();

  res.redirect(`/details/${cube._id}`);
};

exports.getEditcube = async (req, res) => {
  const cube = await getById(req.params.id);

  cube.options = generateOptions(cube.difficultyLevel);

  res.render("edit", { cube });
};

exports.postEditcube = async (req, res) => {
  // const edited = {
  //   name: req.body.name,
  //   description: req.body.description,
  //   imageUrl: req.body.imageUrl,
  //   difficultyLevel: req.body.difficultyLevel,
  // };
  const { name, description, imageUrl, difficultyLevel } = req.body;
  await edit(req.params.id, { name, description, imageUrl, difficultyLevel });

  res.redirect(`/details/${req.params.id}`);
};
