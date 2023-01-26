const { Schema, model, Types } = require("mongoose");

const cubeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    maxLength: 50, //check real length
  },
  imageUrl: {
    type: String,
    required: true,
    //Add http/https validation
    //match: /^https?:\/\//,
    validate: {
      validator: function (value) {
        return value.startsWith("http://") || value.startsWith("https://");
      },
      message: "URL is invalid!",
    },
  },
  difficultyLevel: {
    type: Number,
    required: true,
    max: 6,
    min: 1,
  },
  accessories: [
    {
      type: Types.ObjectId,
      ref: "Accessory", //ref to Accesccory
    },
  ],
});

//cubeSchema.path('imageUrl').validate = ...  // other way to validate image

const Cube = model("Cube", cubeSchema);

module.exports = Cube;

//------old------------------------
// const fs = require("fs");
// const db = require("../db.json");
// const path = require("path");

// class Cube {
//   constructor(name, description, imageUrl, difficultyLevel) {
//     this.name = name;
//     this.description = description;
//     this.imageUrl = imageUrl;
//     this.difficultyLevel = difficultyLevel;
//   }

//   save() {
//     this.id = db.cubes[db.cubes.length - 1].id + 1;
//     db.cubes.push(this);
//     const jsonData = JSON.stringify(db, null, 2);
//     fs.writeFileSync(path.resolve(__dirname, "../db.json"), jsonData);
//   }
// }

// module.exports = Cube;

//----------------------------------------------
// const fs = require("fs");
// const db = require("../db.json");
// const path = require("path");

// class Cube {
//   constructor(name, description, imageUrl, difficultyLevel) {
//     this.name = name;
//     this.description = description;
//     this.imageUrl = imageUrl;
//     this.difficultyLevel = difficultyLevel;
//   }

//   static save(cube) {
//     cube.id = db.cubes[db.cubes.length - 1].id + 1;
//     db.cubes.push(cube);
//     const jsonData = JSON.stringify(db, null, 2);
//     fs.writeFileSync(path.resolve(__dirname, "../db.json"), jsonData);
//   }
// }

// module.exports = Cube;
