import { getAll } from "../api/data.js";
import { html, render, page } from "../lib.js";

const dashtemplate = (materials) => html`
  <section id="dashboard-page">
    <h1 class="title">All Posts</h1>
    ${materials.length > 0
      ? html`
          <!-- Display a div with information about every post (if any)-->
          <div class="all-posts">${materials.map(cardMaterial)}</div>
        `
      : html`
          <!-- Display an h1 if there are no posts -->
          <h1 class="title no-posts-title">No posts yet!</h1>
        `}
  </section>
`;

const cardMaterial = (material) => html`
  <div class="post">
    <h2 class="post-title">${material.title}</h2>
    <img class="post-image" src=${material.imageUrl} alt="Kids clothes" />
    <div class="btn-wrapper">
      <a href="/details/${material._id}" class="details-btn btn">Details</a>
    </div>
  </div>
`;

export async function showDash(ctx) {
  const material = await getAll();
  ctx.render(dashtemplate(material));
}
