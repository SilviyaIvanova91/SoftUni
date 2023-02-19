const mongoose = require("mongoose");

module.exports = async (app) => {
  mongoose.set("strictQuery", false);
  mongoose.connect("mongodb://localhost:27017/real-estate", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
};
