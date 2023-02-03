let Cube = require("../models/Cube");

function getAll() {
  return Cube.find({}).lean();
}

function getById(id) {
  return Cube.findById(id).lean();
}

async function create(cubeData) {
  const cube = {
    name: cubeData.name,
    description: cubeData.description,
    imageUrl: cubeData.imageUrl,
    difficultyLevel: Number(cubeData.difficultyLevel),
  };

  console.log(cube);
  let missing = Object.entries(cube).filter(([k, v]) => !v);
  if (missing.length > 0) {
    throw new Error(missing.map((m) => `${m[0]} is required!`).join("\n"));
  }

  const result = await Cube.create(cube);

  return result;
}

async function edit(id, cube) {
  const existingCube = await Cube.findByIdAndUpdate(id, cube);

  existingCube.name = cube.name;
  existingCube.description = cube.description;
  existingCube.imageUrl = cube.imageUrl;
  existingCube.difficultyLevel = cube.difficultyLevel;

  await existingCube.save();
}

function generateOptions(category) {
  return [
    { content: "1 - Very Easy", value: "1" },
    { content: "2 - Easy", value: "2" },
    { content: "3 - Medium (Standard 3x3)", value: "3" },
    { content: "4 - Intermediate", value: "4" },
    { content: "5 - Expert", value: "5" },
    { content: "6 - Hardcore", value: "6" },
  ].map((x, i) => (x.value == category ? { ...x, selected: "selected" } : x));
}

module.exports = {
  getAll,
  getById,
  create,
  edit,
  generateOptions,
};
