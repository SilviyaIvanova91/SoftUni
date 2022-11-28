import { page, render } from "./lib.js";
import { getUserData } from "./util.js";
import { showCreate } from "./view/create.js";
import { showDash } from "./view/dashboart.js";
import { showDetails } from "./view/details.js";
import { showEdit } from "./view/edit.js";
import { showLogin } from "./view/login.js";
import { showMyPost } from "./view/myPost.js";
import { updateNav } from "./view/nav.js";
import { showRegister } from "./view/register.js";

const main = document.getElementById("main-content");

page(decorateText);

page("/", showDash);
page("/index.html", showDash);
page("/login", showLogin);
page("/register", showRegister);
page("/dashboard", showDash);
page("/create", showCreate);
page("/details/:id", showDetails);
page("/edit/:id", showEdit);
page("/myPost", showMyPost);

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
