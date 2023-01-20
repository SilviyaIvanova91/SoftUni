const express = require("express");
const hbs = require("express-handlebars").create({ extname: "hbs" });

const routes = require("./routes");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use("/static", express.static("static" || "/views/images"));

app.use(routes);

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");

app.listen(3000, () => console.log(`Listening on port 3000...`));
