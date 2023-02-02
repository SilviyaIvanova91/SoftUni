const express = require("express");
const routes = require("./config/routes");
const dataBase = require("./config/dataBase");
const expressConf = require("./config/express");

const app = express();

expressConf(app);

app.use(express.static("src/public"));
app.use(express.urlencoded({ extended: false })); //return middleware which create cube
app.use(routes);

dataBase();

app.listen(3000, () =>
  console.log(`Listening on port 3000! Now its up to you...`)
);
