import { html } from "../../node_modules/lit-html/lit-html.js";
import { getMyItems } from "../api/data.js";
import { getItemtemp } from "./fragment/itemsFragment.js";

export async function myFurnitureView(ctx) {
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  const id = userData._id;
  const items = await getMyItems(id);
  ctx.render(myItemsTempl(items));
}

function myItemsTempl(items) {
  return html`
    <div class="row space-top">
      <div class="col-md-12">
        <h1>My Furniture</h1>
        <p>This is a list of your publications.</p>
      </div>
    </div>
    <div class="row space-top">
      ${Object.values(items).map((x) => getItemtemp(x))}
    </div>
  `;
}
