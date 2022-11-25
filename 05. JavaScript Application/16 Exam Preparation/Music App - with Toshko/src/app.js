import { page, render } from "./lib.js";
import { getUserData } from "./util.js";
import { showCatalog } from "./view/catalog.js";
import { showCreate } from "./view/create.js";
import { showDetails } from "./view/details.js";
import { showEdit } from "./view/edit.js";
import { showHome } from "./view/home.js";
import { showLogin } from "./view/login.js";
import { updateNav } from "./view/nav.js";
import { showregister } from "./view/register.js";
import { showSerch } from "./view/search.js";

const main = document.getElementById("main-content");

page(decorateContext);

page("/", showHome);
page("/home", showHome);
page("/login", showLogin);
page("/register", showregister);
page("/catalog", showCatalog);
page("/create", showCreate);
page("/details/:id", showDetails);
page("/edit/:id", showEdit);
page("/search", showSerch);

updateNav();
page.start();

function decorateContext(ctx, next) {
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
