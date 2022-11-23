import { editPet, getById } from "../api/data.js";
import { html } from "../lib.js";
import { createSubmitHandler } from "../util.js";

const editTemplate = (pets, onEdit) => html`
  <section id="editPage">
    <form @submit=${onEdit} class="editForm">
      <img src="../images/editpage-dog.jpg" />
      <div>
        <h2>Edit PetPal</h2>
        <div class="name">
          <label for="name">Name:</label>
          <input name="name" id="name" type="text" .value=${pets.name} />
        </div>
        <div class="breed">
          <label for="breed">Breed:</label>
          <input name="breed" id="breed" type="text" .value=${pets.breed} />
        </div>
        <div class="Age">
          <label for="age">Age:</label>
          <input name="age" id="age" type="text" .value=${pets.age} />
        </div>
        <div class="weight">
          <label for="weight">Weight:</label>
          <input name="weight" id="weight" type="text" .value=${pets.weight} />
        </div>
        <div class="image">
          <label for="image">Image:</label>
          <input name="image" id="image" type="text" .value="${pets.image}" />
        </div>
        <button class="btn" type="submit">Edit Pet</button>
      </div>
    </form>
  </section>
`;

export async function showEdit(ctx) {
  const id = ctx.params.id;
  const pet = await getById(id);

  ctx.render(editTemplate(pet, createSubmitHandler(onEdit)));

  async function onEdit({ name, breed, age, weight, image }, form) {
    if (name == "" || breed == "" || age == "" || weight == "" || image == "") {
      return alert("All fields are required!");
    }

    await editPet(id, { name, breed, age, weight, image });

    form.reset();
    ctx.page.redirect("/catalog/" + id);
  }
}
