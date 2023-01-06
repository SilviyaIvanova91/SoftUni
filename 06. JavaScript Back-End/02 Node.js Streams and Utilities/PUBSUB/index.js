//---------Writeble Stream----------------
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.method == "GET") {
    let path = req.url;
    if (path == "/") {
      path = "/index.html";
    }

    fs.stat(`./static${path}`, (err, stat) => {
      if (err != null || stat.isFile() != true) {
        res.writeHead("404");
        res.write("404 Not Found");
        res.end();
      } else {
        /*
        res.writeHead(200, {
          "Content-Type": "text/html",
        });
        */
        fs.createReadStream(`./static${path}`).pipe(res);
      }
    });

    /*   ----> second way
      const fileStream = fs.createReadStream(".static/index.html");

      res.writeHead(200, {
        "Content-Type": "text/html",
      });

      fileStream.on("data", (chunk) => res.write(chunk));
      fileStream.om("end", () => res.end());
      */

    /*   -----> first way
      // const file = fs.readFileSync("./static/index.html");
      fs.readFileSync("./static/index.html", (err, file) => {
        res.writeHead(200, {
          "Content-Type": "text/html",
        });
        res.write(file);
        res.end();
      }); 
      */
  } else if (req.method == "POST") {
    const body = [];

    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const result = JSON.parse(body.join(""));
      console.log(result);

      result.count++;

      res.writeHead(200, {
        "Content-Type": "application/json",
      });
      res.write(JSON.stringify(result));
      res.end();
    });
  }
});

server.listen(3000);

//---------Readable Stream----------------
// const result = [];

// process.stdin.on("data", (chunk) => {
//   result.push(chunk);
// });

// process.stdin.on("end", () => {
//   console.log(result.join(""));
// });

//------------------------------
// require("./m1");
// require("./m2");
// require("./m3");
