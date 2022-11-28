import { page, render } from "./lib.js";
import { getUserData } from "./util.js";
import { showAllMemes } from "./views/allMemese.js";
import { showCreate } from "./views/create.js";
import { showDetails } from "./views/details.js";
import { showEdit } from "./views/edit.js";
import { showHome } from "./views/home.js";
import { showLogin } from "./views/login.js";
import { updateNav } from "./views/nav.js";
import { showRegister } from "./views/register.js";
import { showUserProfile } from "./views/userProfile.js";

const main = document.querySelector("main");

page(decorateText);

page("/", showHome);
page("/index.html", showHome);
page("/login", showLogin);
page("/register", showRegister);
page("/create", showCreate);
page("/allMemes", showAllMemes);
page("/details/:id", showDetails);
page("/edit/:id", showEdit);
page("/myProfile", showUserProfile);

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
