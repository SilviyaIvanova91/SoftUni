const mongoose = require("mongoose");

module.exports = async (app) => {
  mongoose.set("strictQuery", false);
  await mongoose.connect("mongodb://localhost:27017/job-ads", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
};
