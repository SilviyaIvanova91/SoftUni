const express = require("express");
const dataBase = require("./config/dataBase");
const expressConf = require("./config/express");
const routesConf = require("./config/routes");

async function start() {
  const app = express();

  await dataBase(app);
  expressConf(app);
  routesConf(app);

  app.listen(3000, () =>
    console.log(`Listening on port 3000! Now its up to you...`)
  );
}

start();
