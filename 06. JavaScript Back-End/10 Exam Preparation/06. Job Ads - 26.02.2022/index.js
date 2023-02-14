const express = require("express");
const expressConfig = require("./config/expressConfing");
const dataBaseConfig = require("./config/dataBaseConfig");
const routes = require("./config/routes");

const app = express();

expressConfig(app);

app.use(routes);

dataBaseConfig(app);

app.listen(3000, () => console.log("Listening on port 3000..."));
