const fs = require("fs");
const fsp = require("fs/promises");

// Synchronous reading from file
const text = fs.readFileSync("./data.txt", { encoding: "utf-8" });
console.log("Read from file");
console.log(text);

// Asynchronous reading from file
const asyncText = fs.readFile(
  "./data.txt",
  { encoding: "utf-8" },
  (err, data) => {
    if (err) {
      return;
    }

    console.log(data);
  }
);

// Asynchronous reading with promises
fsp.readFile("./data.txt", { encoding: "utf-8" }).then((result) => {
  console.log(result);
});
console.log("Read from file");
