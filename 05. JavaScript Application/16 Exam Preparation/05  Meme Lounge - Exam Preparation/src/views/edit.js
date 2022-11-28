import { editMemes, getMemById } from "../api/data.js";
import { html, page, render, nothing } from "../lib.js";
import { createSubmitHandler } from "../util.js";
import { notification } from "./notification.js";

const editTemplate = (meme, onEdit) => html`
  <section id="edit-meme">
    <form @submit=${onEdit} id="edit-form">
      <h1>Edit Meme</h1>
      <div class="container">
        <label for="title">Title</label>
        <input
          id="title"
          type="text"
          placeholder="Enter Title"
          name="title"
          .value=${meme.title}
        />
        <label for="description">Description</label>
        <textarea
          id="description"
          placeholder="Enter Description"
          name="description"
        >
${meme.description}
                        </textarea
        >
        <label for="imageUrl">Image Url</label>
        <input
          id="imageUrl"
          type="text"
          placeholder="Enter Meme ImageUrl"
          name="imageUrl"
          .value=${meme.imageUrl}
        />
        <input type="submit" class="registerbtn button" value="Edit Meme" />
      </div>
    </form>
  </section>
`;

export async function showEdit(ctx) {
  const id = ctx.params.id;
  const memesById = await getMemById(id);
  ctx.render(editTemplate(memesById, createSubmitHandler(onEdit)));

  async function onEdit(data) {
    const { title, description, imageUrl } = data;
    if (!title || !description || !imageUrl) {
      notification("All fields are required");
      return;
    }

    await editMemes(id, data);
    ctx.page.redirect("/details/" + id);
  }
}
