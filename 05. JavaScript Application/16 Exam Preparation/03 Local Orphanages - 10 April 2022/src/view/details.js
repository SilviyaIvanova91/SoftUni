import {
  deleteById,
  donations,
  getById,
  getDonationCount,
  getTotalDonation,
} from "../api/data.js";
import { html, nothing } from "../lib.js";

const detailsTemplate = (
  materials,
  isOwner,
  hasUser,
  onDelete,
  donateOrph,
  donateCount,
  isDonate
) => html`
  <section id="details-page">
    <h1 class="title">Post Details</h1>

    <div id="container">
      <div id="details">
        <div class="image-wrapper">
          <img
            src=${materials.imageUrl}
            alt="Material Image"
            class="post-image"
          />
        </div>
        <div class="info">
          <h2 class="title post-title">${materials.title}</h2>
          <p class="post-description">Description: ${materials.description}</p>
          <p class="post-address">Address: ${materials.address}</p>
          <p class="post-number">Phone number: ${materials.phone}</p>
          <p class="donate-Item">Donate Materials: ${donateCount}</p>

          <!--Edit and Delete are only for creator-->
          <div class="btns">
            ${isOwner
              ? html`
                  <a href="/edit/${materials._id}" class="edit-btn btn">Edit</a>
                  <a
                    @click=${onDelete}
                    href="javascript:void(0)"
                    class="delete-btn btn"
                    >Delete</a
                  >
                `
              : nothing}
            ${hasUser && !isOwner && !isDonate
              ? html` <!--Bonus - Only for logged-in users ( not authors )-->
                  <a @click=${donateOrph} href="#" class="donate-btn btn"
                    >Donate</a
                  >`
              : nothing}
          </div>
        </div>
      </div>
    </div>
  </section>
`;

export async function showDetails(ctx) {
  const postId = ctx.params.id;
  const materialId = await getById(postId);

  const user = ctx.user;
  const isOwner = user ? materialId._ownerId == user._id : false;
  const hasUser = user ? true : false;

  let donateCount = await getDonationCount(postId);
  let isDonate = false;

  if (user) {
    let totalDonation = await getTotalDonation(postId, user._id);
    isDonate = totalDonation > 0;
  }

  ctx.render(
    detailsTemplate(
      materialId,
      isOwner,
      hasUser,
      onDelete,
      donateOrph,
      donateCount,
      isDonate
    )
  );

  async function onDelete() {
    const choise = confirm("Are you sure you want to delete this?");
    if (!choise) {
      return;
    }

    await deleteById(postId);
    ctx.page.redirect("/dashboard");
  }

  async function donateOrph() {
    await donations({
      postId,
    });
  }
}
