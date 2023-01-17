const fs = require("fs");

fs.writeFile("./otput.txt", "Pesho", () => {
  console.log("file created!");
});
