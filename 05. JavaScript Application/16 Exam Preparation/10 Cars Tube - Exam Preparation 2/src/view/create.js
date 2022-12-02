import { createCar } from "../api/data.js";
import { html, render, nothing, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";

const createTemplate = (onCreate) => html`
  <!-- Create Listing Page -->
  <section id="create-listing">
    <div class="container">
      <form @submit=${onCreate} id="create-form">
        <h1>Create Car Listing</h1>
        <p>Please fill in this form to create an listing.</p>
        <hr />

        <p>Car Brand</p>
        <input type="text" placeholder="Enter Car Brand" name="brand" />

        <p>Car Model</p>
        <input type="text" placeholder="Enter Car Model" name="model" />

        <p>Description</p>
        <input type="text" placeholder="Enter Description" name="description" />

        <p>Car Year</p>
        <input type="number" placeholder="Enter Car Year" name="year" />

        <p>Car Image</p>
        <input type="text" placeholder="Enter Car Image" name="imageUrl" />

        <p>Car Price</p>
        <input type="number" placeholder="Enter Car Price" name="price" />

        <hr />
        <input type="submit" class="registerbtn" value="Create Listing" />
      </form>
    </div>
  </section>
`;

export async function showCrate(ctx) {
  ctx.render(createTemplate(createSubmitHandler(onCreate)));

  async function onCreate({
    brand,
    model,
    description,
    year,
    imageUrl,
    price,
  }) {
    year = Number(year);
    price = Number(price);
    if (!brand || !model || !description || !year || !imageUrl || !price) {
      return alert("All fields are required!");
    }
    if (year < 0) {
      return alert("Year must be a positive integer!");
    }
    if (price < 0) {
      return alert("Price must be a positive integer!");
    }

    await createCar({
      brand,
      model,
      description,
      year,
      imageUrl,
      price,
    });
    ctx.page.redirect("/catalog");
  }
}
