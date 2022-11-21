import page from "https://unpkg.com/page/page.mjs";
// import { html, render } from "https://unpkg.com/lit-html?module";
import { html, render } from "../../../node_modules/lit-html/lit-html.js";

import { showAbout } from "./view/about.js";
import { showCatalog } from "./view/catalog.js";
import { showHome } from "./view/home.js";
import { notFound } from "./view/notFound.js";
import { showCreate } from "./view/create.js";
import { showDetails } from "./view/details.js";

function decoratetext(ctx, next) {
  ctx.render = function (content) {
    render(content, document.querySelector("main"));
  };
  next();
}

//page("/", () => console.log("<h2>Home Page</h2>"));
//page("/index.html", () => console.log("<h2>Home Page</h2>"));
page(decoratetext);
page("/index.html", "/");
page("/", showHome);
page("/recipes", showCatalog);
page("/create", showCreate);
page("/recipes/:id", showDetails);
page("/about", showAbout);
page("/notFound", notFound);

page.start();
