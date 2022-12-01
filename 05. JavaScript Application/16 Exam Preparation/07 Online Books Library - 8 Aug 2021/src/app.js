import { render, page } from "./lib.js";
import { getUserData } from "./util.js";
import { showCatalog } from "./views/catalog.js";
import { showCreate } from "./views/create.js";
import { showDetails } from "./views/details.js";
import { showEdit } from "./views/edit.js";
import { showLogin } from "./views/login.js";
import { showMyBook } from "./views/myBook.js";
import { onLogout, updateNav } from "./views/nav.js";
import { showregister } from "./views/register.js";

const main = document.getElementById("site-content");

page(decorationText);

page("/", showCatalog);
page("/index.html", showCatalog);
page("/login", showLogin);
page("/register", showregister);
page("/create", showCreate);
page("/catalog", showCatalog);
page("/details/:id", showDetails);
page("/edit/:id", showEdit);
page("/myBook", showMyBook);
page("/logout", onLogout);

updateNav();
page.start();

function decorationText(ctx, next) {
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
