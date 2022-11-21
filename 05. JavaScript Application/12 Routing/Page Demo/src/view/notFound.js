import { html, render } from "https://unpkg.com/lit-html?module";

const notFoundTemplate = () => html`<h2>404 Not Found</h2>`;

export function notFound(ctx) {
  ctx.render(notFoundTemplate());
}
