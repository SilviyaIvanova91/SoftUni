import { html, nothing, render } from "../../node_modules/lit-html/lit-html.js";
import { getByQuery } from "../api/data.js";

const serachTemplate = (searchHandler) => html`
  <section id="searchPage">
    <h1>Search by Name</h1>

    <div class="search">
      <input
        id="search-input"
        type="text"
        name="search"
        placeholder="Enter desired albums's name"
      />
      <button @click=${searchHandler} class="button-list">Search</button>
    </div>

    <h2>Results:</h2>

    <!--Show after click Search button-->
    <div class="search-result">
      <!--If have matches-->

      <!--If there are no matches-->
    </div>
  </section>
`;

export function showSerch(ctx) {
  async function searchHandler() {
    const searchInput = document.querySelector("#search-input");
    let searchValue = searchInput.value;
    searchInput.value = "";

    const album = await getByQuery(searchValue);
    const section = document.querySelector(".search-result");

    render(resultTemplate(album, ctx.user), section);
  }

  ctx.render(serachTemplate(searchHandler));
}

const resultTemplate = (albums, isLogged) => html`
  ${albums.length > 0
    ? albums.map((a) => albumtemplate(a, isLogged))
    : html`<p class="no-result">No result.</p>`}
`;

const albumtemplate = (album, isLoged) => html`
  <div class="card-box">
    <img src=${album.imgUrl} />
    <div>
      <div class="text-center">
        <p class="name">Name: ${album.name}</p>
        <p class="artist">Artist: ${album.artist}</p>
        <p class="genre">Genre: ${album.genre}</p>
        <p class="price">Price: ${album.price}</p>
        <p class="date">Release Date: ${album.releaseDate}</p>
      </div>
      ${isLoged
        ? html`
            <div class="btn-group">
              <a href="/details/${album._id}" id="details">Details</a>
            </div>
          `
        : nothing}
    </div>
  </div>
`;
