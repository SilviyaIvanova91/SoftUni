import page from "../node_modules/page/page.mjs";
import { logout } from "./api/users.js";
import { addRender } from "./middlewares/render.js";
import { addSession } from "./middlewares/session.js";
import { clearUserData } from "./util.js";
import { createPage } from "./views/create.js";
import { dashboardPage } from "./views/dashboard.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";
import { homePage } from "./views/home.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";

page(addSession);
page(addRender);

page("/index.html", "/");
page("/", homePage);
page("/login", loginPage);
page("/register", registerPage);
page("/dashboard", dashboardPage);
page("/create", createPage);
page("/logout", onLogout);

page("/details/:id", detailsPage);
page("/edit/:id", editPage);

page.start();

async function onLogout(ctx) {
  logout();
  clearUserData();

  ctx.page.redirect("/");
}
