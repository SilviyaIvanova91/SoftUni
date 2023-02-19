const express = require("express");
const expressConfig = require("./config/expressConfig");
const databaseConfig = require("./config/databasedConfig");
const routes = require("./config/routes");

const app = express();

expressConfig(app);

app.use(routes);

databaseConfig(app);

app.listen(3000, () => console.log("Server listening on port 3000..."));
