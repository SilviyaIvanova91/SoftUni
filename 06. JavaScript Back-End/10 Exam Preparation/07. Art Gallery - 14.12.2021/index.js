const express = require("express");
const expressConfig = require("./config/expressConfig");
const routes = require("./config/routes");
const databaseConfig = require("./config/databaseConfig");

const app = express();

expressConfig(app);

app.use(routes);

databaseConfig(app);

app.listen(3000, () => console.log("Server listening on port 3000..."));
