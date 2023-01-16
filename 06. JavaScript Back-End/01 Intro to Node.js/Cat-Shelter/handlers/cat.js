const url = require("url");
const fs = require("fs");
const path = require("path");
const qs = require("querystring");
const formidable = require("formidable");
const breeds = require("../data/breeds.json");
const cats = require("../data/cats.json");
const globalPath = __dirname.toString().replace("handlers", "");

module.exports = (req, res) => {
  const pathname = url.parse(req.url).pathname;

  if (pathname === "/cats/add-cat" && req.method === "GET") {
    let filePath = path.normalize(path.join(__dirname, "../views/addCat.html"));

    const index = fs.createReadStream(filePath);

    index.on("data", (data) => {
      let catBreedPlaceholder = breeds.map(
        (breed) => `<option value=${breed}">${breed}</option>`
      );
      let modifiledData = data
        .toString()
        .replace("{{catBreeds}}", catBreedPlaceholder);
      res.write(modifiledData);
    });

    index.on("end", () => {
      res.end();
    });

    index.on("error", (err) => {
      console.log(err);
    });
  } else if (pathname === "/cats/add-breed" && req.method === "GET") {
    let filePath = path.normalize(
      path.join(__dirname, "../views/addBreed.html")
    );

    const index = fs.createReadStream(filePath);

    index.on("data", (data) => {
      res.write(data);
    });

    index.on("end", () => {
      res.end();
    });

    index.on("error", (err) => {
      console.log(err);
    });
  } else if (pathname === "/cats/add-breed" && req.method === "POST") {
    let formData = "";

    req.on("data", (data) => {
      formData += data;
    });

    req.on("end", () => {
      let body = qs.parse(formData);

      fs.readFile("./data/breeds.json", (err, data) => {
        if (err) {
          throw err;
        }

        let breeds = JSON.parse(data);
        breeds.push(body.breed);
        let json = JSON.stringify(breeds);

        fs.writeFile("./data/breeds.json", json, "utf-8", () =>
          console.log("The breed was uploaded successfully!")
        );
      });

      res.writeHead(301, { Location: "/" });
      res.end();
    });
  } else if (pathname === "/cats/add-cat" && req.method === "POST") {
    let form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
      if (err) throw err;

      // let oldPath = files.upload.path;
      // let newPath = path.normalize(
      //   path.join(
      //     __dirname,
      //     "../content/images/" + files.upload.originalFilename
      //   )
      // );

      // fs.copyFile(oldPath, newPath, (err) => {
      //   if (err) throw err;
      //   console.log("File was uploaded successfuly");
      // });

      cats.push({
        id: (cats.length + 1).toString(),
        ...fields,
        image: files.upload.originalFilename,
      });
      let catsJson = JSON.stringify(cats);
      fs.writeFile("./data/cats.json", catsJson, () => {
        res.writeHead(301, {
          location: "/",
        });
        res.end();
      });
    });
  } else if (pathname.includes("/cats-edit") && req.method === "GET") {
    let filePath = path.normalize(
      path.join(__dirname, "../views/editCat.html")
    );
    const index = fs.createReadStream(filePath);

    const urlArr = pathname.split("/");
    const catId = urlArr[urlArr.length - 1];
    let currentCat = cats.find((c) => c.id == catId);

    index.on("data", (data) => {
      let modifiedData = data.toString().replace("{{id}}", catId);
      modifiedData = modifiedData.replace("{{name}}", currentCat.name);
      modifiedData = modifiedData.replace(
        "{{description}}",
        currentCat.description
      );
      modifiedData = modifiedData.replace(
        "{{image}}",
        "/content/images/" + currentCat.image
      );

      const breedsAsOptions = breeds.map(
        (b) => `<option value="${b}">${b}</option>`
      );
      modifiedData = modifiedData.replace(
        "{{catBreeds}}",
        breedsAsOptions.join("/")
      );

      modifiedData = modifiedData.replace("{{breed}}", currentCat.breed);
      res.write(modifiedData);
    });

    index.on("end", () => {
      res.end();
    });

    index.on("error", (err) => {
      console.log(err);
    });
  } else if (pathname.includes("/cats-find-new-home") && req.method === "GET") {
    let filePath = path.normalize(
      path.join(__dirname, "../views/catShelter.html")
    );
    const index = fs.createReadStream(filePath);

    const urlArr = pathname.split("/");
    const catId = urlArr[urlArr.length - 1];
    let currentCat = cats.find((c) => c.id == catId);

    index.on("data", (data) => {
      let modifiedData = data.toString().replace("{{id}}", catId);
      modifiedData = modifiedData.replace("{{name}}", currentCat.name);
      modifiedData = modifiedData.replace(
        "{{description}}",
        currentCat.description
      );
      modifiedData = modifiedData.replace(
        "{{image}}",
        "/content/images/" + currentCat.image
      );

      const breedsAsOptions = breeds.map(
        (b) => `<option value="${b}">${b}</option>`
      );
      modifiedData = modifiedData.replace(
        "{{catBreeds}}",
        breedsAsOptions.join("/")
      );

      modifiedData = modifiedData.replace("{{breed}}", currentCat.breed);
      res.write(modifiedData);
    });

    index.on("end", () => {
      res.end();
    });

    index.on("error", (err) => {
      console.log(err);
    });
  } else if (pathname.includes("/cats-edit") && req.method === "POST") {
    let form = new formidable.IncomingForm();

    form.parse(req, (err, fields, files) => {
      if (err) {
        throw err;
      }

<<<<<<< HEAD
      // let oldPath = files.upload.path;
=======
      console.log("--------->>>" );
     // let oldPath = files.upload.path;
>>>>>>> 5f9e699b0caac8545af51ed59bb08e162c2893b7
      // let newPath = path.normalize(
      //   path.join(
      //     __dirname,
      //     "../content/images/" + files.upload.originalFilename
      //   )
      // );

      // fs.copyFile(oldPath, newPath, (err) => {
      //   if (err) throw err;
      //   console.log("File was uploaded successfuly");
      // });

      fs.readFile("./data/cats.json", (err, data) => {
        if (err) {
          throw err;
        }

        const allCats = JSON.parse(data);
        const catId = pathname.substring(pathname.lastIndexOf("/") + 1);
        let currentCatIndex = allCats.findIndex((c) => c.id == catId);
        let currentCat = allCats.find((c) => c.id == catId);

        console.log("--------->" + currentCatIndex);
        console.log("--------->" + catId);
        console.log("--------->" + fields.name);
        // allCats.splice(currentCatIndex, 1, {
        //   id: catId,
        //   ...fields,
        //   image: currentCat.image,
        // });

        const json = JSON.stringify(allCats);

        fs.writeFile("./data/cats.json", json, (err) => {
          if (err) {
            throw err;
          }
          console.log("Cat successfully edited!");
        });
      });

      res.writeHead(301, { location: "/" });
      res.end();
    });
  } else if (
    pathname.includes("/cats-find-new-home") &&
    req.method === "POST"
  ) {
    const urlArr = pathname.split("/");
    const catId = urlArr[urlArr.length - 1];

    fs.readFile("./data/cats.json", "utf-8", (err, data) => {
      if (err) throw err;

      let currentCats = JSON.parse(data);

      let allCats = currentCats.filter((c) => c.id !== catId);
      let json = JSON.stringify(allCats);
      fs.writeFile("./data/cats.json", json, () => {
        res.writeHead(302, { location: "/" });
        res.end();
      });
    });
  } else {
    return true;
  }
};
