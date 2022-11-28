import { getAllMem } from "../api/data.js";
import { html, page, render, nothing } from "../lib.js";

const allMememsTemplate = (memes) => html`
  <section id="meme-feed">
    <h1>All Memes</h1>
    <div id="memes">
      ${memes.length > 0
        ? html`
            <!-- Display : All memes in database ( If any ) -->
            ${memes.map(cardMemTemplate)}
          `
        : html`
            <!-- Display : If there are no memes in database -->
            <p class="no-memes">No memes in database.</p>
          `}
    </div>
  </section>
`;

const cardMemTemplate = (meme) => html`
  <div class="meme">
    <div class="card">
      <div class="info">
        <p class="meme-title">${meme.title}</p>
        <img class="meme-image" alt="meme-img" src=${meme.imageUrl} />
      </div>
      <div id="data-buttons">
        <a class="button" href="/details/${meme._id}">Details</a>
      </div>
    </div>
  </div>
`;

export async function showAllMemes(ctx) {
  const getAllM = await getAllMem();

  ctx.render(allMememsTemplate(getAllM));
}
