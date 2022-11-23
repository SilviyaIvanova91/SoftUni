import { html } from "../../../node_modules/lit-html/lit-html.js";

export function getItemtemp(itemDetails) {
  return html`
    <div class="col-md-4">
      <div class="card text-white bg-primary">
        <div class="card-body">
          <img src=${itemDetails.img} />
          <p>${itemDetails.description}</p>
          <footer>
            <p>Price: <span>${itemDetails.price} $</span></p>
          </footer>
          <div>
            <a href="/details/${itemDetails._id}" class="btn btn-info"
              >Details</a
            >
          </div>
        </div>
      </div>
    </div>
  `;
}
