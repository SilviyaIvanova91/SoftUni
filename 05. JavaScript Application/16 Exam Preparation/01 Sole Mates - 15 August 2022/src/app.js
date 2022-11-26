import { page, render } from "./lib.js";
import { getUserData } from "./util.js";
import { showCreate } from "./view/create.js";
import { showDashboard } from "./view/dashboard.js";
import { showDetails } from "./view/details.js";
import { showEdit } from "./view/edit.js";
import { showHome } from "./view/home.js";
import { showLogin } from "./view/login.js";
import { updateNav } from "./view/nav.js";
import { showRegister } from "./view/register.js";
import { showSearch } from "./view/search.js";

const main = document.querySelector("main");

page(decorateText);

page("/", showHome);
page("/index.html", showHome);
page("/login", showLogin);
page("/register", showRegister);
page("/dashboard", showDashboard);
page("/create", showCreate);
page("/details/:id", showDetails);
page("/edit/:id", showEdit);
page("/search", showSearch);

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
