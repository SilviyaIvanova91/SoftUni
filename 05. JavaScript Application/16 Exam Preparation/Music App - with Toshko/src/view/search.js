import { searchAlbum } from "../api.js/data.js";
import { html, nothing } from "../lib.js";

const serachTemplate = (isClicked, onSearch, albums, hasUser) => html`
  <section id="searchPage">
    <h1>Search by Name</h1>
    <div class="search">
      <input
        id="search-input"
        type="text"
        name="search"
        placeholder="Enter desired albums's name"
      />
      <button @click=${onSearch} class="button-list">Search</button>
    </div>

    <h2>Results:</h2>
    <div class="search-result"></div>
    ${
      isClicked
        ? albums.length > 0
          ? html` ${albums.map((a) => createCard(a, hasUser))} `
          : html`<p class="no-result">No result.</p>`
        : nothing
    }
    </div>
  </section>
`;

const createCard = (album, hasUser) => html`
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
      ${hasUser
        ? html`
            <div class="btn-group">
              <a href="/details/${album._id}" id="details">Details</a>
            </div>
          `
        : nothing}
    </div>
  </div>
`;

export async function showSerch(ctx) {
  ctx.render(serachTemplate(false, onSearch));
  async function onSearch(e) {
    const searchInput = document.getElementById("search-input");
    const query = searchInput.value;
    if (!query) {
      return alert("Enter text!");
    }

    const albums = await searchAlbum(query);
    let hasUser = ctx.user;
    ctx.render(serachTemplate(true, onSearch, albums, hasUser));
  }
}
