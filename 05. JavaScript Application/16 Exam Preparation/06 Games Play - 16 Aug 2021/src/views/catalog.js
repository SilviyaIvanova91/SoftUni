import { getAllGames } from "../api/data.js";
import { html, render, page, nothing } from "../lib.js";

const catalogtemplate = (games) => html`
  <!-- Catalogue -->
  <section id="catalog-page">
    <h1>All Games</h1>
    ${games.length > 0
      ? html`
          <!-- Display div: with information about every game (if any) -->
          ${games.map(gameCard)}
        `
      : html` <!-- Display paragraph: If there is no games  -->
          <h3 class="no-articles">No articles yet</h3>`}
  </section>
`;

const gameCard = (game) => html`
  <div class="allGames">
    <div class="allGames-info">
      <img src=${game.imageUrl} />
      <h6>${game.category}</h6>
      <h2>${game.title}</h2>
      <a href="/details/${game._id}" class="details-button">Details</a>
    </div>
  </div>
`;

export async function showcatalog(ctx) {
  const allGames = await getAllGames();

  ctx.render(catalogtemplate(allGames));
}
