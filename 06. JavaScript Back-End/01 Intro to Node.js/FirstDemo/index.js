const http = require("http");
const router = require("./router");
const {
  catalogPage,
  createPage,
  createItem,
} = require("./controllers/catalogController");
const {
  homePage,
  aboutPage,
  defaultPage,
} = require("./controllers/homeController");

router.get("/", homePage);
router.get("/catalog", catalogPage);
router.get("/create", createPage);
router.get("/about", aboutPage);
router.post("/create", createItem);
router.get("default", defaultPage);

const server = http.createServer(router.match);

server.listen(3000);

// const server = http.createServer((req, res) => {
// console.log("Request recieved!");
// console.log(request.method);
// console.log(request.headers);
// console.log(request.url);
// console.log(">>>", request.method, request.url);
// router.match(req, res);

// const handler = routes[url.pathname];

// if (typeof handler == "function") {
//   // response.writeHead(404, ["Content-Type", "text/plain"]);
//   // response.write(html(handler));
//   // response.end();
//   handler(req, res);
// } else {
//   defaultPage(req, res);
//   // response.statusCode = 404;
//   // response.write(html(defaultPage));
//   response.end();
// }
// });
