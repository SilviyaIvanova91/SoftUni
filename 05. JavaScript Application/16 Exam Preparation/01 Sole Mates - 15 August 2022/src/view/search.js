import { searchShoes } from "../api/data.js";
import { html, nothing } from "../lib.js";

const searchtemplate = (isClicked, onSearch, shoes, hasUser) => html`
  <section id="search">
    <h2>Search by Brand</h2>

    <form class="search-wrapper cf">
      <input
        id="#search-input"
        type="text"
        name="search"
        placeholder="Search here..."
        required
      />
      <button @click=${onSearch} type="submit">Search</button>
    </form>

    <h3>Results:</h3>

    <div id="search-container">
      ${isClicked
        ? shoes.length > 0
          ? html`
              <ul class="card-wrapper">
                <!-- Display a li with information about every post (if any)-->
                ${shoes.map((s) => shoeCard(s, hasUser))}
              </ul>
            `
          : html`
              <!-- Display an h2 if there are no posts -->
              <h2>There are no results found.</h2>
            `
        : nothing}
    </div>
  </section>
`;

const shoeCard = (shoe, hasUser) => html`
  <li class="card">
    <img src=${shoe.imageUrl} alt="travis" />
    <p><strong>Brand: </strong><span class="brand">${shoe.brand}</span></p>
    <p><strong>Model: </strong><span class="model">${shoe.model}</span></p>
    <p><strong>Value:</strong><span class="value">${shoe.value}</span>$</p>
    ${hasUser
      ? html`<a class="details-btn" href="/details/${shoe._id}">Details</a>`
      : nothing}
  </li>
`;

export async function showSearch(ctx) {
  ctx.render(searchtemplate(false, onSearch));

  async function onSearch(e) {
    e.preventDefault();
    const searchInput = document.getElementById("#search-input");
    const query = searchInput.value;
    if (!query) {
      return alert("Enter text!");
    }

    const shoes = await searchShoes(query);
    let hasUser = ctx.user;
    ctx.render(searchtemplate(true, onSearch, shoes, hasUser));
  }
}
