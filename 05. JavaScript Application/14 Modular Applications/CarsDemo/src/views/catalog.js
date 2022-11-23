import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { until } from "../../node_modules/lit-html/directives/until.js";
import { repeat } from "../../node_modules/lit-html/directives/repeat.js";
import { getAllCars } from "../data/cars.js";
import { createSubmitHandler } from "../util.js";

const catalogTemplate = (cars, searcher, pager) => html` <h2>Catalog</h2>
  ${searcher} ${pager}
  <ul>
    ${repeat(cars, (r) => r._id, carCard)}
  </ul>`;

const carCard = (car) =>
  html`<li><a href="/catalog/${car._id}">${car.make} ${car.model}</a></li>`;

const pagerTemplate = (page, pages) => html` <div>
  ${page > 1 ? html`<a href="?page=${page - 1}">&lt; Prev</a>` : nothing}
  <span>Page ${page}</span>
  ${page < pages ? html`<a href="?page=${page + 1}">Next &gt;</a>` : nothing}
</div>`;

const searchTemplate = (search, onSubmit) => html` <form @submit=${onSubmit}>
  <label>Search: <input type="text" name="search" .value=${search} /></label>
  <input type="submit" value="Search" />
</form>`;

export function showCatalog(ctx) {
  ctx.render(until(catalogWrapper(ctx), "Loading ..."));
}

async function catalogWrapper(ctx) {
  const search = ctx.query.search || "";
  const page = Number(ctx.query.page) || 1;

  const { data, pages } = await getAllCars(search, page);
  return catalogTemplate(
    data,
    searchTemplate(search, createSubmitHandler(onSubmit)),
    pagerTemplate(page, pages)
  );

  function onSubmit(data) {
    if (data.search != "") {
      ctx.page.redirect("/catalog?search=" + data.search);
    } else {
      ctx.page.redirect("/catalog");
    }
  }
}
