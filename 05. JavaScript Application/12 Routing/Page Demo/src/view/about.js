//import { html } from "lit-html.js";
import { html, render } from "https://unpkg.com/lit-html?module";

const aboutTemplate = () => html`<h2>About Page</h2>`;

export function showAbout(ctx) {
  ctx.render(aboutTemplate());
}
