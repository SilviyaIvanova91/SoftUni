const fs = require("fs");

function createImage(req, res) {
  const data = [];
  const boundary = req.headers['content-type'].split('boundary=')[1].trim()
  
  req.on("data", (chunk) => data.push(chunk).toString('binary');
  req.on("end", async () => {
    const body = data.join("");

    const lineIndex = body.indexOf("\n");
  
    const fileData = body.slice(lineIndex, body.indexOf(boundary, lineIndex));

    const pattern = /filename="(.+)"/;
    const filename = pattern.exec(fileData)[1];
    console.log(filename);

    const windowsPattern = /\r\n\r\n/;
    const linuxPattern = /\n\n/;
    let match = windowsPattern.exec(fileData);
    if (match == null) {
      match = linuxPattern.exec(fileData);
    }

    if (match) {
      const file = fileData.slice(match.index).trim();
      const prefix = (("00000" + Math.random() * 9999999) | 0).slice(-5);
      await fs.writeFile(`./img/${prefix}_${filename}`, file, "binary");
    }

    res.writeHead(301, {
      Location: "/",
    });
    res.end();
  });
}

module.exports = {
  createImage,
};
