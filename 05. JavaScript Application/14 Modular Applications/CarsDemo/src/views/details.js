import { html } from "../../node_modules/lit-html/lit-html.js";
import { until } from "../../node_modules/lit-html/directives/until.js";
import { cache } from "../../node_modules/lit-html/directives/cache.js";
import { getById } from "../data/cars.js";
import { commentsView } from "./comments.js";

const detailsTemplate = (car, commentsSection) => html` <h2>Details Page</h2>
  <p>Make: ${car.make}</p>
  <p>Model: ${car.model}</p>
  ${commentsSection}`;

let currentCarId = null;
let carCache = null;

export function showDetails(ctx) {
  ctx.render(until(detailsWrapper(ctx), "Loading ..."));
}

async function detailsWrapper(ctx) {
  const carId = ctx.params.id;
  if (carCache == null || carId != currentCarId) {
    carCache = await getById(carId);
    currentCarId = carId;
  }
  const car = carCache;
  return cache(detailsTemplate(car, commentsView(ctx)));
}
