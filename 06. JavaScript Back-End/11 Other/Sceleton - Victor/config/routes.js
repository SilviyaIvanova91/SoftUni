const authController = require("../controllers/authController");
const homeController = require("../controllers/homeController");

module.exports = (app) => {
  app.use("/", homeController);
  app.use("/auth", authController);

  // app.get("/error", (req, res, next) => {
  //   next(new Error("propagating error"));
  //   // throw new Error("propagating error");
  // });

  // app.use((err, req, res, next) => {
  //   console.log("Global error handling");
  //   console.log(err.message);
  //   res.redirect("/");
  // });
};
