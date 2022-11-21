import { html } from "../../node_modules/lit-html/lit-html.js";
import { deleteItem, getItemById } from "../api/data.js";

let contectx = null;
export async function detailsView(ctx) {
  contectx = ctx;
  const id = ctx.params.id;
  const item = await getItemById(id);
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  ctx.render(detailsTemp(item, userData._id === item._ownerId, deleteItemById));
}

async function deleteItemById(e) {
  e.preventDefault();
  const id = e.target.dataset.id;
  await deleteItem(id);
  contectx.page.redirect("/");
}

function renderOwnerBtn(isOwner, deleteItemById, id) {
  return isOwner
    ? html`
        <div>
          <a href="/edit/${id}" class="btn btn-info">Edit</a>
          <a
            @click=${deleteItemById.bind(null, id)}
            data-id=${id}
            href="javascript:void:(0)"
            class="btn btn-red"
            >Delete</a
          >
        </div>
      `
    : "";
}

function detailsTemp(item, isOwner, deleteItemById) {
  const itemImgName = item.img.split("/");
  return html`
    <div class="row space-top">
      <div class="col-md-12">
        <h1>Furniture Details</h1>
      </div>
    </div>
    <div class="row space-top">
      <div class="col-md-4">
        <div class="card text-white bg-primary">
          <div class="card-body">
            <img src=${"/images/" + itemImgName[itemImgName.length - 1]} />
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <p>Make: <span>${item.make}</span></p>
        <p>Model: <span>${item.model}</span></p>
        <p>Year: <span>${item.year}</span></p>
        <p>Description: <span>${item.description}</span></p>
        <p>Price: <span>${item.price} $</span></p>
        <p>Material: <span>${item.material}</span></p>
        ${renderOwnerBtn(isOwner, deleteItemById, item.id)}
      </div>
    </div>
  `;
}
