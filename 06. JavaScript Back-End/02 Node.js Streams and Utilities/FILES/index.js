const { createServer } = require("http");
const { handleRequest } = require("./main");

const server = createServer(handleRequest);

server.listen(3000);
