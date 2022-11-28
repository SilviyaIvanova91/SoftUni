import { deleteById, getMemById } from "../api/data.js";
import { html, page, render, nothing } from "../lib.js";

const detailsTtemplate = (meme, isOwner, onDelete) => html`
  <section id="meme-details">
    <h1>Meme Title: ${meme.title}</h1>
    <div class="meme-details">
      <div class="meme-img">
        <img alt="meme-alt" src=${meme.imageUrl} />
      </div>
      <div class="meme-description">
        <h2>Meme Description</h2>
        <p>${meme.description}</p>

        ${isOwner
          ? html`
              <!-- Buttons Edit/Delete should be displayed only for creator of this meme  -->
              <a class="button warning" href="/edit/${meme._id}">Edit</a>
              <button
                @click=${onDelete}
                href="javascript:void(0)"
                class="button danger"
              >
                Delete
              </button>
            `
          : nothing}
      </div>
    </div>
  </section>
`;

export async function showDetails(ctx) {
  const id = ctx.params.id;
  const getMem = await getMemById(id);
  let isOwner = ctx.user ? getMem._ownerId === ctx.user._id : false;

  ctx.render(detailsTtemplate(getMem, isOwner, onDelete));

  async function onDelete() {
    const choise = confirm("Are you sure you want to delete this offer?");
    if (!choise) {
      return;
    }

    await deleteById(id);
    ctx.page.redirect("/allMemes");
  }
}
