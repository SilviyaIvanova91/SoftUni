import { editGameById, getGameById } from "../api/data.js";
import { html, render, page, nothing } from "../lib.js";
import { createSubmitHandler } from "../util.js";

const editTemplate = (game, onEdit) => html`
  <!-- Edit Page ( Only for the creator )-->
  <section id="edit-page" class="auth">
    <form @submit=${onEdit} id="edit">
      <div class="container">
        <h1>Edit Game</h1>
        <label for="leg-title">Legendary title:</label>
        <input type="text" id="title" name="title" .value=${game.title} />

        <label for="category">Category:</label>
        <input
          type="text"
          id="category"
          name="category"
          .value=${game.category}
        />

        <label for="levels">MaxLevel:</label>
        <input
          type="number"
          id="maxLevel"
          name="maxLevel"
          min="1"
          .value=${game.maxLevel}
        />

        <label for="game-img">Image:</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          .value=${game.imageUrl}
        />

        <label for="summary">Summary:</label>
        <textarea name="summary" id="summary">${game.summary}</textarea>
        <input class="btn submit" type="submit" value="Edit Game" />
      </div>
    </form>
  </section>
`;

export async function showEdit(ctx) {
  const id = ctx.params.id;
  const getGame = await getGameById(id);

  ctx.render(editTemplate(getGame, createSubmitHandler(onEdit)));

  async function onEdit(data) {
    const { title, category, maxLevel, imageUrl, summary } = data;
    if (!title || !category || !maxLevel || !imageUrl || !summary) {
      return alert("All fields are required!");
    }

    await editGameById(id, data);
    ctx.page.redirect("/details/" + id);
  }
}
