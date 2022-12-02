import { searchByYear } from "../api/data.js";
import { html, render, nothing, page } from "../lib.js";

const searchtemplate = (searchHendler) => html`
  <!-- Search Page -->
  <section id="search-cars">
    <h1>Filter by year</h1>

    <div class="container">
      <input
        id="search-input"
        type="text"
        name="search"
        placeholder="Enter desired production year"
      />
      <button @click=${searchHendler} class="button-list">Search</button>
    </div>

    <h2>Results:</h2>
    <div class="listings">
      <!-- Display all records -->
    </div>
  </section>
`;

export async function showSearch(ctx) {
  async function searchHendler() {
    const searchInput = document.getElementById("search-input");
    const searchValue = searchInput.value;
    searchInput.value = "";

    const query = await searchByYear(searchValue);
    const resultsection = document.querySelector(".listings");

    render(resultTemplate(query), resultsection);
  }

  ctx.render(searchtemplate(searchHendler));
}

const resultTemplate = (cars) => html`
  ${cars.length > 0
    ? cars.map(carCard)
    : html`
        <!-- Display if there are no matches -->
        <p class="no-cars">No results.</p>
      `}
`;

const carCard = (car) => html`
  <div class="listing">
    <div class="preview">
      <img src=${car.imageUrl} />
    </div>
    <h2>${car.brand} ${car.model}</h2>
    <div class="info">
      <div class="data-info">
        <h3>Year: ${car.year}</h3>
        <h3>Price: ${car.price} $</h3>
      </div>
      <div class="data-buttons">
        <a href="/details/${car._id}" class="button-carDetails">Details</a>
      </div>
    </div>
  </div>
`;
