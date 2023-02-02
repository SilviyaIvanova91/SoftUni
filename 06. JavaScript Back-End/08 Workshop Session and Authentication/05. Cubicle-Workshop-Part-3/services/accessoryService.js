let Accessory = require("../models/Accessory");

async function createAccessory(accessoryData) {
  const accessory = {
    name: accessoryData.name,
    imageUrl: accessoryData.imageUrl,
    description: accessoryData.description,
  };

  console.log(accessory);
  let missing = Object.entries(accessory).filter(([k, v]) => !v);
  if (missing.length > 0) {
    throw new Error(missing.map((m) => `${m[0]} is required!`).join("\n"));
  }

  let result = await Accessory.create(accessory);

  return result;
}

module.exports = {
  createAccessory,
};
