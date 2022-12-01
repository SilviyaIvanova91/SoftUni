import { render, page } from "../src/lib.js";
import { getUserData } from "./util.js";
import { showCreate } from "./view/create.js";
import { showDetails } from "./view/details.js";
import { showEdit } from "./view/edit.js";
import { showHome } from "./view/home.js";
import { showLogin } from "./view/login.js";
import { showMyProfile } from "./view/muProfile.js";
import { updateNav } from "./view/nav.js";
import { showregister } from "./view/register.js";

const main = document.getElementById("content");

page(decirateText);

page("/", showHome);
page("/index.html", showHome);
page("/login", showLogin);
page("/register", showregister);
page("/create", showCreate);
page("/details/:id", showDetails);
page("/edit/:id", showEdit);
page("/profile", showMyProfile);

updateNav();
page.start();

function decirateText(ctx, next) {
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
