//const { publish } = require("./observer");
const emitter = require("./observer");

let counter = 0;

setInterval(() => {
  emitter.emit("message", counter);
  counter++;
}, 2000);
