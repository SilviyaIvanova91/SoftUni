import { render, page } from "./lib.js";
import { getUserData } from "./util.js";
import { showCatalog } from "./view/catalog.js";
import { showCrate } from "./view/create.js";
import { showdetails } from "./view/details.js";
import { showEdit } from "./view/edit.js";
import { showHome } from "./view/home.js";
import { showLogin } from "./view/login.js";
import { showMyCar } from "./view/myCar.js";
import { updateNav } from "./view/nav.js";
import { showRegister } from "./view/reggister.js";
import { showSearch } from "./view/search.js";

const main = document.getElementById("site-content");

page(decorateText);

page("/", showHome);
page("/index.html", showHome);
page("/login", showLogin);
page("/register", showRegister);
page("/catalog", showCatalog);
page("/catalogByYear", showSearch);
page("/myCatalog", showMyCar);
page("/create", showCrate);
page("/details/:id", showdetails);
page("/edit/:id", showEdit);

updateNav();
page.start();

function decorateText(ctx, next) {
  ctx.render = renderMain;
  ctx.updateNav = updateNav;

  const user = getUserData();
  if (user) {
    ctx.user = user;
  }

  next();
}

function renderMain(content) {
  render(content, main);
}
