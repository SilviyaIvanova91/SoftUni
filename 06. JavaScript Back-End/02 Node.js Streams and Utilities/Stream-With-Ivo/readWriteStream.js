const fs = require("fs");

const readStream = fs.createReadStream("./data.txt");
const writeStream = fs.createWriteStream("./data-copy.txt");

readStream.on("data", (chunk) => {
  console.log("write chunk");
  writeStream.write(chunk);
});

readStream.on("close", () => {
  writeStream.end();
});
