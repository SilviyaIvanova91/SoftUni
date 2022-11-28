import { getMyPost } from "../api/data.js";
import { html, nothing } from "../lib.js";

const myPostTemplate = (materials) => html`
  <section id="my-posts-page">
    <h1 class="title">My Posts</h1>

    <!-- Display a div with information about every post (if any)-->
    ${materials.length > 0
      ? html` <div class="my-posts">${materials.map(createMyPost)}</div> `
      : html`
          <!-- Display an h1 if there are no posts -->
          <h1 class="title no-posts-title">You have no posts yet!</h1>
        `}
  </section>
`;

const createMyPost = (material) => html`
  <div class="post">
    <h2 class="post-title">${material.title}</h2>
    <img class="post-image" src=${material.imageUrl} alt="Material Image" />
    <div class="btn-wrapper">
      <a href="/details/${material._id}" class="details-btn btn">Details</a>
    </div>
  </div>
`;

export async function showMyPost(ctx) {
  const user = ctx.user;
  const id = user && user._id;
  const myPost = await getMyPost(id);

  ctx.render(myPostTemplate(myPost));
}
