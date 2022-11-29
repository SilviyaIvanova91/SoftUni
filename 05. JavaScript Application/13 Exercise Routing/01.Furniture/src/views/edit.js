import { html } from "../../node_modules/lit-html/lit-html.js";
import { getById, updateById } from "../api/data.js";
import { createSubmitHandler } from "../util.js";

const createFormTemp = (item, onSubmit) => html`
  <div class="row space-top">
    <div class="col-md-12">
      <h1>Edit Furniture</h1>
      <p>Please fill all fields.</p>
    </div>
  </div>
  <form @submit=${onSubmit} data-id=${item._id}>
    <div class="row space-top">
      <div class="col-md-4">
        <div class="form-group">
          <label class="form-control-label" for="new-make">Make</label>
          <input
            class="form-control"
            id="new-make"
            type="text"
            name="make"
            .value=${item.make}
          />
        </div>
        <div class="form-group has-success">
          <label class="form-control-label" for="new-model">Model</label>
          <input
            class="form-control is-valid"
            id="new-model"
            type="text"
            name="model"
            .value=${item.model}
          />
        </div>
        <div class="form-group has-danger">
          <label class="form-control-label" for="new-year">Year</label>
          <input
            class="form-control is-invalid"
            id="new-year"
            type="number"
            name="year"
            .value=${item.year}
          />
        </div>
        <div class="form-group">
          <label class="form-control-label" for="new-description"
            >Description</label
          >
          <input
            class="form-control"
            id="new-description"
            type="text"
            name="description"
            .value=${item.description}
          />
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label class="form-control-label" for="new-price">Price</label>
          <input
            class="form-control"
            id="new-price"
            type="number"
            name="price"
            .value=${item.price}
          />
        </div>
        <div class="form-group">
          <label class="form-control-label" for="new-image">Image</label>
          <input
            class="form-control"
            id="new-image"
            type="text"
            name="img"
            .value=${item.img}
          />
        </div>
        <div class="form-group">
          <label class="form-control-label" for="new-material"
            >Material (optional)</label
          >
          <input
            class="form-control"
            id="new-material"
            type="text"
            name="material"
            .value=${item.material}
          />
        </div>
        <input type="submit" class="btn btn-info" value="Edit" />
      </div>
    </div>
  </form>
`;

export async function editView(ctx) {
  const id = ctx.params.id;
  const item = await getById(id);
  ctx.render(createFormTemp(item, createSubmitHandler(onSubmit)));

  async function onSubmit(data) {
    let make = document.getElementById("new-make");
    let model = document.getElementById("new-model");
    let year = document.getElementById("new-year");
    let description = document.getElementById("new-description");
    let price = document.getElementById("new-price");
    let image = document.getElementById("new-image");
    let material = document.getElementById("new-material");
    let isValid = true;

    if (
      make.value == "" ||
      model.value == "" ||
      year.value == "" ||
      description.value == "" ||
      price.value == "" ||
      material.value == ""
    ) {
      return alert("All fileds are required!");
    }

    make.value.length >= 4 ? validate(make, true) : validate(make, false);
    model.value.length >= 4 ? validate(model, true) : validate(model, false);
    Number(year.value) >= 1950 && Number(year.value) <= 2050
      ? validate(year, true)
      : validate(year, false);
    description.value.length >= 10
      ? validate(description, true)
      : validate(description, false);
    price.value.length >= 0 ? validate(price, true) : validate(price, false);
    image.value != "" ? validate(image, true) : validate(image, false);
    function validate(element, bool) {
      if (!bool) {
        isValid = false;
        element.classList.add("is-invalid");
        element.classList.remove("is-valid");
      } else {
        element.classList.add("is-valid");
        element.classList.remove("is-invalid");
      }
    }

    if (isValid) {
      await updateById(id, data);
      ctx.page.redirect("/");
    } else {
      return;
    }
  }
}
