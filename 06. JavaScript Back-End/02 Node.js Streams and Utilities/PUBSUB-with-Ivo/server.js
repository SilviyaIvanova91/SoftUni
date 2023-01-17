const http = require("http");

const eventBus = require("./eventBus");

const server = http.createServer((req, res) => {
  eventBus.publish("request", { method: req.method, url: req.url });

  res.end();
});

server.listen(3000);
console.log("Server is listening on port 3000");
