import { getMyCars } from "../api/data.js";
import { html, render, nothing, page } from "../lib.js";

const myCarTemplate = (cars) => html`
  <!-- My Listings Page -->
  <section id="my-listings">
    <h1>My car listings</h1>
    <div class="listings">
      ${cars.length > 0
        ? html`
            <!-- Display all records -->
            ${cars.map(carCard)}
          `
        : html`
            <!-- Display if there are no records -->
            <p class="no-cars">You haven't listed any cars yet.</p>
          `}
    </div>
  </section>
`;

const carCard = (car) => html`
  <div class="listing">
    <div class="preview">
      <img src=${car.imageUrl} />
    </div>
    <h2>${car.brand} ${car.model}</h2>
    <div class="info">
      <div class="data-info">
        <h3>Year: ${car.year}</h3>
        <h3>Price: ${car.price} $</h3>
      </div>
      <div class="data-buttons">
        <a href="/details/${car._id}" class="button-carDetails">Details</a>
      </div>
    </div>
  </div>
`;

export async function showMyCar(ctx) {
  const user = ctx.user;
  const getMyCar = await getMyCars(user._id);
  ctx.render(myCarTemplate(getMyCar));
}
