const express = require("express");
const hbr = require("express-handlebars");

const homeController = require("./controlers/homeController");
const catalogController = require("./controlers/cataloControllers");
const createController = require("./controlers/createController");
const deleteController = require("./controlers/deleteController");

const handlebars = hbr.create({
  extname: ".hbs",
});

const app = express();

app.engine(".hbs", handlebars.engine);
app.set("view engine", ".hbs");

app.use(express.urlencoded({ extended: false }));
app.use("/static", express.static("static"));

app.use("/", homeController);
app.use("/catalog", catalogController);
app.use("/create", createController);
app.use("/delete", deleteController);

app.listen(3000);

//--------------------------------------------------------
// app.get("/", (req, res) => {
//     //   res.locals.message = "Hello there";
//     //   res.locals.response = "General Kenobi";
//     //res.render("home");

//     res.render("home", {
//       username: "Peter",
//       title: "Handlebars Demo",
//       message: "Hello there",
//       product: {
//         name: "Product 1",
//         price: 19.5,
//         color: "Pink",
//       },
//       contacts: [
//         {
//           name: "Peter",
//           email: "peter@abv.bg",
//         },
//         {
//           name: "Mary",
//           email: "mary@abv.bg",
//         },
//         {
//           name: "John",
//           email: "john@abv.bg",
//         },
//       ],
//     });
//   });
