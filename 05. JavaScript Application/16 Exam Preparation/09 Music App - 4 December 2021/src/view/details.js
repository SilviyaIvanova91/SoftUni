import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { detailsAlbumById } from "../api/data.js";

const detailsTemplate = (album, isOwner) => html`
  <section id="detailsPage">
    <div class="wrapper">
      <div class="albumCover">
        <img src="${album.imgUrl}" />
      </div>
      <div class="albumInfo">
        <div class="albumText">
          <h1>Name: ${album.name}</h1>
          <h3>Artist: ${album.artist}</h3>
          <h4>Genre: ${album.genre}</h4>
          <h4>Price: ${album.price}</h4>
          <h4>Date: ${album.releaseDate}</h4>
          <p>${album.description}</p>
        </div>

        <!-- Only for registered user and creator of the album-->
        ${isOwner
          ? html`
              <div class="actionBtn">
                <a href="/edit/${album._id}" class="edit">Edit</a>
                <a href="/delete/${album._id}" class="remove">Delete</a>
              </div>
            `
          : nothing}
      </div>
    </div>
  </section>
`;

export async function showDetails(ctx) {
  const id = ctx.params.id;
  const album = await detailsAlbumById(id);

  let isOwner = false;
  if (ctx.user) {
    isOwner = ctx.user._id == album._ownerId;
  }

  ctx.render(detailsTemplate(album, isOwner));
}
