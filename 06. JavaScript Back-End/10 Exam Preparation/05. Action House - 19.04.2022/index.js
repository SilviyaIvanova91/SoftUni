const express = require("express");
const expressConfig = require("./config/expessConfig");
const router = require("./config/routes");
const database = require("./config/database");

const app = express();

expressConfig(app);

app.use(router);

database(app);

app.listen(3000, () => console.log("Listening on port 3000...."));
