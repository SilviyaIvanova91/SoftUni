import { editOffer, getOffersById } from "../api/data.js";
import { html } from "../lib.js";
import { createSubmitHandler } from "../util.js";

const editTemplate = (job, onEdit) => html`
  <section id="edit">
    <div class="form">
      <h2>Edit Offer</h2>
      <form @submit=${onEdit} class="edit-form">
        <input
          type="text"
          name="title"
          id="job-title"
          placeholder="Title"
          .value=${job.title}
        />
        <input
          type="text"
          name="imageUrl"
          id="job-logo"
          placeholder="Company logo url"
          .value=${job.imageUrl}
        />
        <input
          type="text"
          name="category"
          id="job-category"
          placeholder="Category"
          .value=${job.category}
        />
        <textarea
          id="job-description"
          name="description"
          placeholder="Description"
          rows="4"
          cols="50"
        >
${job.description}</textarea
        >
        <textarea
          id="job-requirements"
          name="requirements"
          placeholder="Requirements"
          rows="4"
          cols="50"
        >
${job.requirements}</textarea
        >

        <input
          type="text"
          name="salary"
          id="job-salary"
          placeholder="Salary"
          .value=${job.salary}
        />

        <button type="submit">post</button>
      </form>
    </div>
  </section>
`;

export async function showEdit(ctx) {
  const id = ctx.params.id;
  const job = await getOffersById(id);

  ctx.render(editTemplate(job, createSubmitHandler(onEdit)));

  async function onEdit(data) {
    const { title, imageUrl, category, description, requirements, salary } =
      data;

    if (
      !title ||
      !imageUrl ||
      !category ||
      !description ||
      !requirements ||
      !salary
    ) {
      return alert("All fields are required!");
    }

    await editOffer(id, data);
    ctx.page.redirect("/details/" + id);
  }
}
