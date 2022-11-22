import { html } from "../../node_modules/lit-html/lit-html.js";
import * as petShop from "../api/petShop.js";
import { createSubmitHandler } from "../util.js";

const editTemplate = (pets, onSubmit) => html`
  <!--Edit Page-->
  <section id="editPage">
    <form @submit=${onSubmit} class="editForm">
      <img src="../images/editpage-dog.jpg" />
      <div>
        <h2>Edit PetPal</h2>
        <div class="name">
          <label for="name">Name:</label>
          <input name="name" id="name" type="text" value=${pets.name} />
        </div>
        <div class="breed">
          <label for="breed">Breed:</label>
          <input name="breed" id="breed" type="text" value=${pets.breed} />
        </div>
        <div class="Age">
          <label for="age">Age:</label>
          <input name="age" id="age" type="text" value=${pets.age} />
        </div>
        <div class="weight">
          <label for="weight">Weight:</label>
          <input name="weight" id="weight" type="text" value=${pets.weight} />
        </div>
        <div class="image">
          <label for="image">Image:</label>
          <input name="image" id="image" type="text" value="${pets.image}" />
        </div>
        <button class="btn" type="submit">Edit Pet</button>
      </div>
    </form>
  </section>
`;

export async function editPage(ctx) {
  const petId = ctx.params.id;
  const pets = await petShop.getWithId(petId);

  ctx.render(editTemplate(pets, createSubmitHandler(ctx, onSubmit)));
}
async function onSubmit(ctx, data, event) {
  event.preventDefault();
  const petId = ctx.params.id;

  const nameValue = document.getElementById("name");
  const breedvalue = document.getElementById("breed");
  const ageValue = document.getElementById("age");
  const weightvalue = document.getElementById("weight");
  const imgvalue = document.getElementById("image");

  if (
    nameValue.value == "" ||
    breedvalue.value == "" ||
    ageValue.value == "" ||
    weightvalue.value == "" ||
    imgvalue.value == ""
  ) {
    return window.alert("All fields are required!");
  }

  let editPet = {
    name: data.name,
    breed: data.breed,
    age: data.age,
    weight: data.weight,
    image: data.image,
  };
  await petShop.editPet(petId, editPet);

  event.target.reset();
  ctx.page.redirect(`/details/${petId}`);
}
