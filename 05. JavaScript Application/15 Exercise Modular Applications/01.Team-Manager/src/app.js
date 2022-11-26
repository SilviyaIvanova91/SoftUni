import page from "../node_modules/page/page.mjs";
import { html, render } from "../node_modules/lit-html/lit-html.js";
import { homeView } from "./view/home.js";
import { loginView } from "./view/login.js";
import { registerView } from "./view/register.js";
import { browseView } from "./view/browseView.js";
import { editView } from "./view/editView.js";
import { myTeamView } from "./view/myteam.js";
import { teamDetailsView } from "./view/teamDetailsView.js";
import { createView } from "./view/create.js";
import { logout } from "./api/data.js";

const rootElement = document.getElementsByTagName("main")[0];

updateNav();
page("/", middleWare, homeView);
page("/index.html", middleWare, homeView);
page("/create", middleWare, createView);
page("/login", middleWare, loginView);
page("/register", middleWare, registerView);
page("/browse", middleWare, browseView);
page("/edit/:id", middleWare, editView);
page("/my-team", middleWare, myTeamView);
page("/details/:id", middleWare, teamDetailsView);

page.start();

function middleWare(ctx, next) {
  // ctx.render = (content) => render(content, rootElement);
  ctx.render = myRender;
  ctx.updateNav = updateNav;

  next();
}

document.querySelector(".logout").addEventListener("click", async (e) => {
  e.preventDefault();
  await logout();
  sessionStorage.removeItem("userData");

  updateNav();
  page.redirect("/");
});

function updateNav() {
  const userData = JSON.parse(sessionStorage.getItem("userData"));

  if (userData) {
    document
      .querySelectorAll(".user")
      .forEach((x) => (x.style.display = "block"));
    document
      .querySelectorAll(".guest")
      .forEach((x) => (x.style.display = "none"));
  } else {
    document
      .querySelectorAll(".user")
      .forEach((x) => (x.style.display = "none"));
    document
      .querySelectorAll(".guest")
      .forEach((x) => (x.style.display = "block"));
  }
}

function myRender(content) {
  render(content, rootElement);
}
