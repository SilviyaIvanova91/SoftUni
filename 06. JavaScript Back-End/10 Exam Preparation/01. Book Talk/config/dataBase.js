const mongoose = require("mongoose");

module.exports = async (app) => {
  mongoose.set("strictQuery", false);
  await mongoose.connect("mongodb://localhost:27017/bookTalk", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("Databased connected..");
};
