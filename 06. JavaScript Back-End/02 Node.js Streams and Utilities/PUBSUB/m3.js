const emitter = require("./observer");

let runningTotal;

emitter.on("message", (data) => {
  runningTotal += data;
  console.log("Current running total is ", runningTotal);
});
