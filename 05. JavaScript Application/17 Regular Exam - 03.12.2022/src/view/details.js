import {
  albumById,
  deleteAlbumById,
  hasUserLike,
  likes,
  tottalLikesCount,
} from "../api/data.js";
import { html, render, nothing, page } from "../lib.js";

const detailsTemplate = (
  album,
  isOwner,
  hasUser,
  onDelete,
  isLiked,
  onLike,
  totalLikes
) => html`
  <!-- Details page -->
  <section id="details">
    <div id="details-wrapper">
      <p id="details-title">Album Details</p>
      <div id="img-wrapper">
        <img src=${album.imageUrl} alt="example1" />
      </div>
      <div id="info-wrapper">
        <p>
          <strong>Band:</strong><span id="details-singer">${album.singer}</span>
        </p>
        <p>
          <strong>Album name:</strong
          ><span id="details-album">${album.album}</span>
        </p>
        <p>
          <strong>Release date:</strong
          ><span id="details-release">${album.release}</span>
        </p>
        <p>
          <strong>Label:</strong><span id="details-label">${album.label}</span>
        </p>
        <p>
          <strong>Sales:</strong><span id="details-sales">${album.sales}</span>
        </p>
      </div>
      <div id="likes">Likes: <span id="likes-count">${totalLikes}</span></div>

      <!--Edit and Delete are only for creator-->
      <div id="action-buttons">
        ${hasUser && !isOwner && isLiked == 0
          ? html`<a @click=${onLike} href="#" id="like-btn">Like</a>`
          : nothing}
        ${isOwner
          ? html`
              <a href="/edit/${album._id}" id="edit-btn">Edit</a>
              <a @click=${onDelete} href="javascript:void(0)" id="delete-btn"
                >Delete</a
              >
            `
          : nothing}
      </div>
    </div>
  </section>
`;

export async function showDetails(ctx) {
  const albumId = ctx.params.id;
  const album = await albumById(albumId);
  const user = ctx.user;

  let isOwner = user ? album._ownerId === user._id : false;
  let hasUser = user ? true : false;

  const totalLikes = await tottalLikesCount(albumId);
  let isLiked = 0;

  if (user && !isOwner) {
    isLiked = await hasUserLike(albumId, user._id);
  }

  ctx.render(
    detailsTemplate(
      album,
      isOwner,
      hasUser,
      onDelete,
      isLiked,
      onLike,
      totalLikes
    )
  );

  async function onLike() {
    await likes({ albumId });
    ctx.page.redirect(`/details/${ctx.params.id}`);
  }

  async function onDelete() {
    await deleteAlbumById(albumId);
    ctx.page.redirect("/catalog");
  }
}
