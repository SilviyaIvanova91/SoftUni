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

module.exports = {
  getAll,
  getById,
  create,
};
