import { html, render } from "https://unpkg.com/lit-html?module";

const createTemplate = () => html`<h2>Create Product</h2>`;

export function showCreate(ctx) {
  ctx.render(createTemplate());
}
