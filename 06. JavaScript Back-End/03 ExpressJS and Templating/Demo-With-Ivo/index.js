const express = require("express");
const handlebars = require("express-handlebars");

const loggerMiddleware = require("./loggerMiddleware");

const app = express();

app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));
app.use(loggerMiddleware);

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/old", (req, res) => {
  res.send(`
  <html>
    <head>
        <link rel="stylesheet" href="/css/style.css" />
    </head>
    <body>
        <h1>Hello from express</h1>
        <a href="/cats">cats</a>
    </body>
  </html>
  `);
});

app.get("/cats", (req, res) => {
  //  res.send("<h1>Cats Page</h1>");

  const cats = [
    { name: "Navcho", breed: "Persian", age: 7 },
    { name: "Sisa", breed: "Angora", age: 12 },
    { name: "Zuza", breed: "UlichnaPrevyzhodna", age: 8 },
  ];

  res.render("cats", { cats });
});

app.get("/cats/1", (req, res) => {
  res.download("./cat.jpg");
});

let validateCatMiddleware = (req, res, next) => {
  let catId = Number(req.params.catId);

  if (!catId) {
    return res.send("Invalid CatId!!");
    // return res.redirect('/404')
  }

  req.catId = catId;

  next();
};

app.get("/cats/:catId", validateCatMiddleware, (req, res) => {
  console.log(req.params);
  // res.send(`<h1>Individual Cat Page - catId=${req.params.catId}</h1>`);
  res.render("cat", { id: req.params.catId, isOdd: req.catId % 2 != 0 });
});

app.get("/dogs", (req, res) => {
  res.send("<h1>Dogs Page</h1>");
});

app.post("/cat", (req, res) => {
  res.send("cat recieved");
});

app.put("/cat", (req, res) => {
  res.send("cat is updated!");
});

app.delete("/cat", (req, res) => {
  res.send("cat is deleted!");
});

app.get("/json", (req, res) => {
  res.json({ ok: true, message: "hello from json!" });
});

app.get("/redirect", (req, res) => {
  res.redirect("/redirected");
});

app.get("/redirected", (req, res) => {
  res.send("This is redirected page!");
});

app.get("*", (req, res) => {
  res.send("404");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000...");
});
