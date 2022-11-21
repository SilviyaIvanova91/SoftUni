import { html, render } from "https://unpkg.com/lit-html?module";

const homeTemplate = () => html`<h2>Home Page</h2>`;

export function showHome(ctx) {
  ctx.render(homeTemplate());
}
