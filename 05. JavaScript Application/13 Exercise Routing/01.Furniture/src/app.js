import { render } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";

import { updateNav } from "./views/nav.js";
import { catalogView } from "./views/catalog.js";
import { getUserData } from "./util.js";
import { registerView } from "./views/register.js";
import { loginView } from "./views/login.js";
import { createView } from "./views/create.js";
import { detailsView } from "./views/details.js";
import { editView } from "./views/edit.js";
import { myFurnitureView } from "./views/myFurniture.js";

const root = document.querySelector(".container");

page(decorateText);

page("/", catalogView);
page("/index.html", "/catalog");
page("/catalog", catalogView);
page("/register", registerView);
page("/login", loginView);
page("/create", createView);
page("/details/:id", detailsView);
page("/edit/:id", editView);
page("/my-publications", myFurnitureView);

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
  render(content, root);
}
