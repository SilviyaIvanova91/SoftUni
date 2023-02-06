const mongoose = require("mongoose");

const config = require("./index");

async function initDatabse() {
  mongoose.set("strictQuery", false);
  await mongoose.connect(config.DB_URI);

  console.log("DB connected");
}

module.exports = initDatabse;
