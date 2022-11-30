import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as recipeService from "../api/recipe.js";
import { createSubmitHandler } from "../util.js";

const editTemplate = (recipe, onEdit) => html`
  <section id="create">
    <article>
      <h2>New Recipe</h2>
      <form @submit=${onEdit} id="createForm">
        <label
          >Name:
          <input
            type="text"
            name="name"
            placeholder="Recipe name"
            .value=${recipe.name}
        /></label>
        <label
          >Image:
          <input
            type="text"
            name="img"
            placeholder="Image URL"
            .value=${recipe.img}
        /></label>
        <label class="ml"
          >Ingredients:
          <textarea
            name="ingredients"
            placeholder="Enter ingredients on separate lines"
          >
${recipe.ingredients}</textarea
          >
        </label>
        <label class="ml"
          >Preparation:
          <textarea
            name="steps"
            placeholder="Enter preparation steps on separate lines"
          >
${recipe.steps}</textarea
          >
        </label>
        <input type="submit" value="Edit Recipe" />
      </form>
    </article>
  </section>
`;

export async function editPage(ctx) {
  const id = ctx.params.id;
  const recipe = await recipeService.getById(id);

  ctx.render(editTemplate(recipe, createSubmitHandler(ctx, onEdit)));

  async function onEdit(ctx, data, event) {
    await recipeService.editById(id, {
      name: data.name,
      img: data.img,
      ingredients: data.ingredients
        .split("\n")
        .map((l) => l.trim())
        .filter((l) => l != ""),
      steps: data.steps
        .split("\n")
        .map((l) => l.trim())
        .filter((l) => l != ""),
    });

    event.target.reset();
    ctx.page.redirect(`/catalog/${id}`);
  }
}
