import page from "//unpkg.com/page/page.mjs";
import { html, render } from "https://unpkg.com/lit-html?module";

const detailsTemplate = (furniture) => html`
  <div class="row space-top">
    <div class="col-md-12">
      <h1>Furniture Details</h1>
    </div>
  </div>
  <div class="row space-top">
    <div class="col-md-4">
      <div class="card text-white bg-primary">
        <div class="card-body">
          <img src=${"01.Furniture/" + furniture.img} />
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <p>Make: <span>${furniture.make}</span></p>
      <p>Model: <span>${furniture.model}</span></p>
      <p>Year: <span>${furniture.year}</span></p>
      <p>Description: <span>${furniture.description}</span></p>
      <p>Price: <span>${furniture.price}</span></p>
      <p>Material: <span>${furniture.material}</span></p>
      <div>
        <a
          href="${furniture._id}"
          class="btn btn-info"
          style="display: ${furniture._ownerId == localStorage.ownerId
            ? "inline"
            : "none"}"
          >Edit</a
        >
        <a
          href="${furniture._id}"
          class="btn btn-red"
          style="display: ${furniture._ownerId == localStorage.ownerId
            ? "inline"
            : "none"}"
          @click=${deleteFurniture}
          >Delete</a
        >
      </div>
    </div>
  </div>
`;

const getdetails = (detailsId) => {
  return fetch(`http://localhost:3030/data/catalog/${detailsId}`).then((res) =>
    res.json()
  );
};

export const detailsView = (ctx) =>
  getdetails(ctx.params.detailsId).then((furniture) =>
    render(detailsTemplate(furniture), document.querySelector(".container"))
  );
