import { getAll } from "../api.js/data.js";
import { html, nothing } from "../lib.js";

const catalogTemplate = (albums, isLogged) =>
  html`
    <section id="catalogPage">
      <h1>All Albums</h1>
      ${albums.length > 0
        ? albums.map((a) => catalogCart(a, isLogged))
        : html`<p>No Albums in Catalog!</p>`}
    </section>
  `;

const catalogCart = (album, isLogged) =>
  html` <div class="card-box">
    <img src=${album.imgUrl} />
    <div>
      <div class="text-center">
        <p class="name">Name: ${album.name}</p>
        <p class="artist">Artist: ${album.artist}</p>
        <p class="genre">Genre: ${album.genre}</p>
        <p class="price">Price: $${album.price}</p>
        <p class="date">Release Date: ${album.releaseDate}</p>
      </div>
      ${isLogged
        ? html`<div class="btn-group">
            <a href="/details/${album._id}" id="details">Details</a>
          </div>`
        : nothing}
    </div>
  </div>`;

export async function showCatalog(ctx) {
  const albums = await getAll();
  let isLogged = ctx.user;
  ctx.render(catalogTemplate(albums, isLogged));
}
