const mongoose = require("mongoose");

module.exports = async (app) => {
  mongoose.set("strictQuery", false);
  await mongoose.connect("mongodb://localhost:27017/actionHouse", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
};
