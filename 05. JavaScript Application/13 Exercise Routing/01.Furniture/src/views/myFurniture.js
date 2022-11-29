import { html } from "../lib.js";
import { getMyFurniture } from "../api/data.js";

const myItemsTmp = (items) => html`
        <div class="row space-top">
            <div class="col-md-12">
                <h1>My Furniture</h1>
                <p>This is a list of your publications.</p>
            </div>
        </div>
        <div class="row space-top">
            ${items.map(createItemTemp)}
        </div>
    </div>
    `;

const createItemTemp = (itemDetails) => html`
  <div class="col-md-4">
    <div class="card text-white bg-primary">
      <div class="card-body">
        <img src=${itemDetails.img} />
        <p>${itemDetails.description}</p>
        <footer>
          <p>Price: <span>${itemDetails.price} $</span></p>
        </footer>
        <div>
          <a href="/details/${itemDetails._id}" class="btn btn-info">Details</a>
        </div>
      </div>
    </div>
  </div>
`;

export async function myFurnitureView(ctx) {
  const id = ctx.user && ctx.user._id;
  const items = await getMyFurniture(id);
  ctx.render(myItemsTmp(items));
}
