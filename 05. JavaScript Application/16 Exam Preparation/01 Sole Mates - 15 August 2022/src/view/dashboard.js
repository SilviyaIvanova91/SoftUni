import { getAll } from "../api/data.js";
import { html } from "../lib.js";

const dashboardTemplate = (shoes) => html`
  <section id="dashboard">
    <h2>Collectibles</h2>

    ${shoes.length > 0
      ? html`
          <ul class="card-wrapper">
            <!-- Display a li with information about every post (if any)-->
            ${shoes.map((s) => dashboardCard(s))}
          </ul>
        `
      : html`<!-- Display an h2 if there are no posts -->
          <h2>There are no items added yet.</h2>`}
  </section>
`;

const dashboardCard = (shoes) => html`
  <li class="card">
    <img src=${shoes.imageUrl} alt="eminem" />
    <p><strong>Brand: </strong><span class="brand">${shoes.brand}</span></p>
    <p><strong>Model: </strong><span class="model">${shoes.model}</span></p>
    <p><strong>Value:</strong><span class="value">${shoes.value}</span>$</p>
    <a class="details-btn" href="/details/${shoes._id}">Details</a>
  </li>
`;

export async function showDashboard(ctx) {
  const allShoes = await getAll();
  ctx.render(dashboardTemplate(allShoes));
}
