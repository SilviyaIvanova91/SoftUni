import {
  deleteEventById,
  getEventById,
  getTotalLikes,
  hasUserLike,
  likes,
} from "../api/data.js";
import { html, render, page, nothing } from "../lib.js";

const detailstemplate = (
  event,
  isOwner,
  hasUser,
  onDelete,
  isLiked,
  onLike,
  totalLikes
) => html`
  <!--Details Page-->
  <section id="detailsPage">
    <div id="detailsBox">
      <div class="detailsInfo">
        <h1>Title: ${event.title}</h1>
        <div>
          <img src=${event.imageUrl} />
        </div>
      </div>

      <div class="details">
        <h3>Theater Description</h3>
        <p>${event.description}</p>
        <h4>Date: ${event.date}</h4>
        <h4>Author: ${event.author}</h4>

        <div class="buttons">
          ${isOwner
            ? html`
                <a
                  @click=${onDelete}
                  class="btn-delete"
                  href="javascript:void(0)"
                  >Delete</a
                >
                <a class="btn-edit" href="/edit/${event._id}">Edit</a>
              `
            : nothing}
          ${hasUser && !isOwner && isLiked == 0
            ? html` <a @click=${onLike} class="btn-like" href="#">Like</a> `
            : nothing}
        </div>
        <p class="likes">Likes: ${totalLikes}</p>
      </div>
    </div>
  </section>
`;

export async function showDetails(ctx) {
  const theaterId = ctx.params.id;
  const event = await getEventById(theaterId);
  const user = ctx.user;

  let isOwner = user ? event._ownerId === user._id : false;
  let hasUser = user ? true : false;

  const totalLikes = await getTotalLikes(theaterId);
  let isLiked = 0;

  if (user && !isOwner) {
    isLiked = await hasUserLike(theaterId, user._id);
  }

  ctx.render(
    detailstemplate(
      event,
      isOwner,
      hasUser,
      onDelete,
      isLiked,
      onLike,
      totalLikes
    )
  );

  async function onLike() {
    await likes({ theaterId });
    ctx.page.redirect(`/details/${ctx.params.id}`);
  }

  async function onDelete() {
    await deleteEventById(theaterId);
    ctx.page.redirect("/myProfile");
  }
}
