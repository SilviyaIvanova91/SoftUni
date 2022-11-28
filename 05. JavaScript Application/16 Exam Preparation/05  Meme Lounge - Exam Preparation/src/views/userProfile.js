import { userMemes } from "../api/data.js";
import { html, page, render, nothing } from "../lib.js";

const userProfileTemplate = (memes, user) => html`
  <section id="user-profile-page" class="user-profile">
    <article class="user-info">
      <img id="user-avatar-url" alt="user-profile" src="/images/female.png" />
      <div class="user-content">
        <p>Username: ${user.username}</p>
        <p>Email: ${user.email}</p>
        <p>My memes count: ${memes.length}</p>
      </div>
    </article>
    <h1 id="user-listings-title">User Memes</h1>
    <div class="user-meme-listings">
      ${memes.length > 0
        ? html`
            <!-- Display : All created memes by this user (If any) -->
            ${memes.map(memesCard)}
          `
        : html`
            <!-- Display : If user doesn't have own memes  -->
            <p class="no-memes">No memes in database.</p>
          `}
    </div>
  </section>
`;

const memesCard = (meme) => html`
  <div class="user-meme">
    <p class="user-meme-title">${meme.title}</p>
    <img class="userProfileImage" alt="meme-img" src=${meme.imageUrl} />
    <a class="button" href="/details/${meme._id}">Details</a>
  </div>
`;

export async function showUserProfile(ctx) {
  const user = ctx.user;
  const userId = user && user._id;
  const myMemems = await userMemes(userId);

  ctx.render(userProfileTemplate(myMemems, user));
}
