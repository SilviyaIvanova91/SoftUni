import { deleteCarById, getCarById } from "../api/data.js";
import { html, render, nothing, page } from "../lib.js";

const detailsTemplate = (car, isOwner, onDelete) => html`
  <!-- Listing Details Page -->
  <section id="listing-details">
    <h1>Details</h1>
    <div class="details-info">
      <img src=${car.imageUrl} />
      <hr />
      <ul class="listing-props">
        <li><span>Brand:</span>${car.brand}</li>
        <li><span>Model:</span>${car.model}</li>
        <li><span>Year:</span>${car.year}</li>
        <li><span>Price:</span>${car.price}$</li>
      </ul>

      <p class="description-para">${car.description}</p>

      ${isOwner
        ? html`
            <div class="listings-buttons">
              <a href="/edit/${car._id}" class="button-list">Edit</a>
              <a
                @click=${onDelete}
                href="javascript:void(0)"
                class="button-list"
                >Delete</a
              >
            </div>
          `
        : nothing}
    </div>
  </section>
`;

export async function showdetails(ctx) {
  const id = ctx.params.id;
  const car = await getCarById(id);

  const user = ctx.user;
  let isOwner = user ? car._ownerId == user._id : false;

  ctx.render(detailsTemplate(car, isOwner, onDelete));

  async function onDelete() {
    await deleteCarById(id);
    ctx.page.redirect("/catalog");
  }
}
