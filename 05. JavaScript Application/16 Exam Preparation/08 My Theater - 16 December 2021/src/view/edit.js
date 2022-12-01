import { editEvent, getEventById } from "../api/data.js";
import { html, render, page, nothing } from "../lib.js";
import { createSubmitHandler } from "../util.js";

const edittemplate = (event, onEdit) => html`
  <!--Edit Page-->
  <section id="editPage">
    <form @submit=${onEdit} class="theater-form">
      <h1>Edit Theater</h1>
      <div>
        <label for="title">Title:</label>
        <input
          id="title"
          name="title"
          type="text"
          placeholder="Theater name"
          .value=${event.title}
        />
      </div>
      <div>
        <label for="date">Date:</label>
        <input
          id="date"
          name="date"
          type="text"
          placeholder="Month Day, Year"
          .value=${event.date}
        />
      </div>
      <div>
        <label for="author">Author:</label>
        <input
          id="author"
          name="author"
          type="text"
          placeholder="Author"
          .value=${event.author}
        />
      </div>
      <div>
        <label for="description">Theater Description:</label>
        <textarea id="description" name="description" placeholder="Description">
${event.description}</textarea
        >
      </div>
      <div>
        <label for="imageUrl">Image url:</label>
        <input
          id="imageUrl"
          name="imageUrl"
          type="text"
          placeholder="Image Url"
          .value=${event.imageUrl}
        />
      </div>
      <button class="btn" type="submit">Submit</button>
    </form>
  </section>
`;

export async function showEdit(ctx) {
  const id = ctx.params.id;
  const event = await getEventById(id);

  ctx.render(edittemplate(event, createSubmitHandler(onEdit)));
  async function onEdit(data) {
    const { title, date, author, imageUrl, description } = data;
    if (!title || !date || !author || !imageUrl || !description) {
      return alert("All fields are required!");
    }

    await editEvent(id, data);
    ctx.page.redirect("/details/" + id);
  }
}
