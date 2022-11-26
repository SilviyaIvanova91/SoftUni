import { detailsCard, editCard } from "../api/data.js";
import { html, nothing } from "../lib.js";
import { createSubmitHandler } from "../util.js";

const editTemplate = (shoe, onEdit) => html`
  <section id="edit">
    <div class="form">
      <h2>Edit item</h2>
      <form @submit=${onEdit} class="edit-form">
        <input type="text" name="brand" id="shoe-brand" .value=${shoe.brand} />
        <input type="text" name="model" id="shoe-model" .value=${shoe.model} />
        <input
          type="text"
          name="imageUrl"
          id="shoe-img"
          .value=${shoe.imageUrl}
        />
        <input
          type="text"
          name="release"
          id="shoe-release"
          .value=${shoe.release}
        />
        <input
          type="text"
          name="designer"
          id="shoe-designer"
          .value=${shoe.designer}
        />
        <input type="text" name="value" id="shoe-value" .value=${shoe.value} />

        <button type="submit">post</button>
      </form>
    </div>
  </section>
`;

export async function showEdit(ctx) {
  const id = ctx.params.id;
  const shoe = await detailsCard(id);
  ctx.render(editTemplate(shoe, createSubmitHandler(onEdit)));

  async function onEdit(data) {
    const { brand, model, imageUrl, release, designer, value } = data;
    if (!brand || !model || !imageUrl || !release || !designer || !value) {
      return alert("All fields are required!");
    }

    await editCard(id, data);
    ctx.page.redirect("/details/" + id);
  }
}
