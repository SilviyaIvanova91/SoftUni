const mongoose = require("mongoose");

module.exports = async (app) => {
  mongoose.set("strictQuery", false);
  mongoose.connect("mongodb://localhost:27017/art-gallery", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
};
