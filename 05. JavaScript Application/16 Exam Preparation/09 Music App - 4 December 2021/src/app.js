import { render } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";
import { getUserData } from "./util.js";
import { showCatalog } from "./view/catalog.js";
import { showCreate } from "./view/create.js";
import { showDelete } from "./view/delete.js";
import { showDetails } from "./view/details.js";
import { showEdit } from "./view/edit.js";
import { showHome } from "./view/home.js";
import { showLogin } from "./view/login.js";
import { onLogout, updateNav } from "./view/nav.js";
import { showregister } from "./view/register.js";
import { showSerch } from "./view/search.js";

const main = document.getElementById("main-content");

page(decorateText);

page("/", showHome);
page("/login", showLogin);
page("/register", showregister);
page("/logout", onLogout);
page("/catalog", showCatalog);
page("/create", showCreate);
page("/details/:id", showDetails);
page("/edit/:id", showEdit);
page("/delete/:id", showDelete);
page("/search", showSerch);

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
