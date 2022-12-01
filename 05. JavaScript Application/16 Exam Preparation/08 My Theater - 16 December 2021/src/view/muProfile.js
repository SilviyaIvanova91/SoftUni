import { getMyProfile } from "../api/data.js";
import { html, render, page, nothing } from "../lib.js";

const myProfileTemplate = (events, user) => html`
  <!--Profile Page-->
  <section id="profilePage">
    <div class="userInfo">
      <div class="avatar">
        <img src="./images/profilePic.png" />
      </div>
      <h2>${user.email}</h2>
    </div>
    <div class="board">
      ${events.length > 0
        ? html`
            <!--If there are event-->
            ${events.map(cardEvent)}
          `
        : html`
            <!--If there are no event-->
            <div class="no-events">
              <p>This user has no events yet!</p>
            </div>
          `}
    </div>
  </section>
`;

const cardEvent = (event) => html`
  <div class="eventBoard">
    <div class="event-info">
      <img src=${event.imageUrl} />
      <h2>${event.title}</h2>
      <h6>${event.date}</h6>
      <a href="/details/${event._id}" class="details-button">Details</a>
    </div>
  </div>
`;

export async function showMyProfile(ctx) {
  const user = ctx.user;
  const myEvent = await getMyProfile(user._id);

  ctx.render(myProfileTemplate(myEvent, user));
}
