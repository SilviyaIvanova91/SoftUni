const express = require("express");
const hbr = require("express-handlebars");

const app = express();

app.listen(3000);

//------------------------------------------
// const express = require("express");
// const catalogController = require("./catalogController");
// const createController = require("./createContoller");
// const logger = require("./logger");

// const app = express();

// app.use(express.static("static"));

// // app.get("/", (req, res) => {
// //   res.sendFile(__dirname + "/index.html");
// // });

// app.get("/img", (req, res) => {
//   res.sendFile(__dirname + "/Clipboard01.png");
// });

// app.use(logger());

// app.use("/create", createController);
// app.use("/catalog", catalogController);

// app.get("/data", (req, res) => {
//   res.json([
//     {
//       name: "Peter",
//       age: 25,
//     },
//     {
//       name: "John",
//       age: 31,
//     },
//   ]);
// });

// app.all("*", (req, res) => {
//   res.status(404).send("404 No Found (Custom Page)");
// });

// app.listen(3000);

//----or-----
//require("express")().listen(3000);
