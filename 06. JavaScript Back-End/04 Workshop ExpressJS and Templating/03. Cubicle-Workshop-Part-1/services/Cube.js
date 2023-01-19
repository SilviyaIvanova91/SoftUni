const fs = require("fs");
const data = require("./database.json");
const path = require("path");

class Cube {
  constructor(id, name, description, imageUrl, difficultyLevel) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl;
    this.difficultyLevel = difficultyLevel;
  }

  // static save(cube) {
  //   data.cubes.push(cube);
  //   const json = JSON.stringify(data, null, 2);
  //   fs.writeFileSync(path.resolve(__dirname, "./database.json"), json);
  // }
}

module.exports = Cube;
