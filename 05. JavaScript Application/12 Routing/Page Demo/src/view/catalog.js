import { html, render } from "https://unpkg.com/lit-html?module";
import { repeat } from "https://unpkg.com/lit-html/directives/repeat.js?module";
import { getAll } from "../data/recipes.js";

const catalogTemplate = (recipes) =>
  html`<h2>Catalog</h2>
    <ul>
      ${repeat(recipes, (r) => r._id, recipeCardTemplate)}
    </ul>`;

const recipeCardTemplate = (recipe) => `html
<li><a href=${"/recipes/" + recipe._id}>${recipe.name}</a></li>`;

export async function showCatalog(ctx) {
  const recipes = await getAll();
  ctx.render(catalogTemplate(recipes));
}
