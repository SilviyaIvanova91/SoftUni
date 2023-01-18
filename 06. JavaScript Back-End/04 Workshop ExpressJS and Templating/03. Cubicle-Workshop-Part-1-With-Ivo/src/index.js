const express = require("express");

const routes = require("./routes");
const config = require("./config");
const setupViewEngine = require("./config/viewEngine");

const app = express();
setupViewEngine(app);
//require("./config/viewEngine")(app);

app.use(express.static("src/public"));
app.use(express.urlencoded({ extended: false })); //return middleware which create cube
app.use(routes);

app.listen(config.PORT, () =>
  console.log(`Server is running on port ${config.PORT}...`)
);
