const express = require("express");
const expressConfig = require("./config/express");
const dataBaseConfig = require("./config/dataBase");
const routes = require("./config/routes");

const app = express();

expressConfig(app);

//app.use(express.static("src/public"));
app.use(express.urlencoded({ extended: false }));
app.use(routes);

dataBaseConfig(app);

app.listen(3000, () => console.log("Listening on port 3000..."));
