import {
  apply,
  deleteOffer,
  getNumOfApplication,
  getOffersById,
  getTotalApplication,
} from "../api/data.js";
import { html, nothing } from "../lib.js";

const detailsTemplate = (
  job,
  isOwner,
  hasUser,
  hasApply,
  onApply,
  totalCount,
  onDelete
) => html`
  <section id="details">
    <div id="details-wrapper">
      <img id="details-img" src=${job.imageUrl} alt="example1" />
      <p id="details-title">${job.title}</p>
      <p id="details-category">
        Category: <span id="categories">${job.category}</span>
      </p>
      <p id="details-salary">
        Salary: <span id="salary-number">${job.salary}</span>
      </p>
      <div id="info-wrapper">
        <div id="details-description">
          <h4>Description</h4>
          <span>${job.description}</span>
        </div>
        <div id="details-requirements">
          <h4>Requirements</h4>
          <span>${job.requirements}</span>
        </div>
      </div>
      <p>Applications: <strong id="applications">${totalCount}</strong></p>

      <div id="action-buttons">
        <!--Edit and Delete are only for creator-->
        ${isOwner
          ? html`
              <a href="/edit/${job._id}" id="edit-btn">Edit</a>
              <a @click=${onDelete} href="javascript:void(0)" id="delete-btn"
                >Delete</a
              >
            `
          : nothing}
        ${hasUser && !isOwner && hasApply == 0
          ? html`
              <!--Bonus - Only for logged-in users ( not authors )-->
              <a @click=${onApply} href="#" id="apply-btn">Apply</a>
            `
          : nothing}
      </div>
    </div>
  </section>
`;

export async function showDetails(ctx) {
  const offerId = ctx.params.id;
  const jobs = await getOffersById(offerId);
  const totalCount = await getTotalApplication(offerId);
  const user = ctx.user;
  const isOwner = user ? jobs._ownerId == user._id : false;
  const hasUser = user ? true : false;
  let hasApply = 0;

  if (hasUser && !isOwner) {
    hasApply = await getNumOfApplication(offerId, user._id);
  }

  ctx.render(
    detailsTemplate(
      jobs,
      isOwner,
      hasUser,
      hasApply,
      onApply,
      totalCount,
      onDelete
    )
  );

  async function onApply(e) {
    e.preventDefault();
    await apply({ offerId });
    const totalCount = await getTotalApplication(offerId);
    hasApply = await getNumOfApplication(offerId, user._id);

    ctx.render(
      detailsTemplate(jobs, isOwner, hasUser, hasApply, onApply, totalCount)
    );
  }

  async function onDelete() {
    const choise = confirm("Are you sure you want to delete this offer?");
    if (!choise) {
      return;
    }

    await deleteOffer(offerId);
    ctx.page.redirect("/dashboard");
  }
}
