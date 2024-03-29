import { html } from "../../node_modules/lit-html/lit-html.js";
import * as petShop from "../api/petShop.js";

const dashboardTemplate = (pets) => html`
  <!--Dashboard-->
  <section id="dashboard">
    <h2 class="dashboard-title">Services for every animal</h2>
    <div class="animals-dashboard">
      ${pets.length > 0
        ? pets.map(dashCard)
        : html`
            <!--If there is no pets in dashboard-->
            <div>
              <p class="no-pets">No pets in dashboard</p>
            </div>
          `}
    </div>
  </section>
`;

const dashCard = (pet) => html`
  <div class="animals-board">
    <article class="service-img">
      <img class="animal-image-cover" src=${pet.image} />
    </article>
    <h2 class="name">${pet.name}</h2>
    <h3 class="breed">${pet.breed}</h3>
    <div class="action">
      <a class="btn" href="/details/${pet._id}">Details</a>
    </div>
  </div>
`;

export async function dashboardPage(ctx) {
  const pets = await petShop.getPets();

  ctx.render(dashboardTemplate(pets));
}
