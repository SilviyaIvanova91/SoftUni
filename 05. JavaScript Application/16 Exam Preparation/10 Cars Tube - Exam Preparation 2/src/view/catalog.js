import { getAllCars } from "../api/data.js";
import { html, render, nothing, page } from "../lib.js";

const catalogTemplate = (cars) => html`
  <!-- All Listings Page -->
  <section id="car-listings">
    <h1>Car Listings</h1>
    <div class="listings">
      ${cars.length > 0
        ? html`
            <!-- Display all records -->
            ${cars.map(carCard)}
          `
        : html`
            <!-- Display if there are no records -->
            <p class="no-cars">No cars in database.</p>
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

export async function showCatalog(ctx) {
  const carsCatalog = await getAllCars();
  ctx.render(catalogTemplate(carsCatalog));
}
