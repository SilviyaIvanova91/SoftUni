import { getAll } from "../api/data.js";
import { html, render, page } from "../lib.js";

const dashTemplate = (jobs) => html`
  <section id="dashboard">
    <h2>Job Offers</h2>

    ${jobs.length > 0
      ? html`
          <!-- Display a div with information about every post (if any)-->
          ${jobs.map((a) => jobsCard(a))}
        `
      : html`
          <!-- Display an h2 if there are no posts -->
          <h2>No offers yet.</h2>
        `}
  </section>
`;

const jobsCard = (job) => html`
  <div class="offer">
    <img src=${job.imageUrl} alt="example1" />
    <p><strong>Title: </strong><span class="title">${job.title}</span></p>
    <p><strong>Salary:</strong><span class="salary">${job.salary}</span></p>
    <a class="details-btn" href="/details/${job._id}">Details</a>
  </div>
`;

export async function showDashboard(ctx) {
  const allJobs = await getAll();

  ctx.render(dashTemplate(allJobs));
}
