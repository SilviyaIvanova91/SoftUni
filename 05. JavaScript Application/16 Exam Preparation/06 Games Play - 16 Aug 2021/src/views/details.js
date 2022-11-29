import {
  deleteGameById,
  getAllComents,
  getGameById,
  postComments,
} from "../api/data.js";
import { html, render, page, nothing } from "../lib.js";
import { get } from "../api/api.js";

const detailsTemplate = (
  game,
  isOwner,
  hasUser,
  onDelete,
  allComents,
  createComment
) => html`
  <!--Details Page-->
  <section id="game-details">
    <h1>Game Details</h1>
    <div class="info-section">
      <div class="game-header">
        <img class="game-img" src=${game.imageUrl} />
        <h1>${game.title}</h1>
        <span class="levels">MaxLevel: ${game.maxLevel} </span>
        <p class="type">${game.category}</p>
      </div>

      <p class="text">${game.summary}</p>

      <!-- Bonus ( for Guests and Users ) -->
      <div class="details-comments">
        <h2>Comments:</h2>
        ${allComents.length > 0
          ? html`
              <ul>
                <!-- list all comments for current game (If any) -->
                ${allComents.map(
                  (com) => html`<li class="comment">
                    <p>Content: ${com.comment}</p>
                  </li>`
                )}
              </ul>
            `
          : html`
              <!-- Display paragraph: If there are no games in the database -->
              <p class="no-comment">No comments.</p>
            `}
      </div>

      ${isOwner
        ? html` <!-- Edit/Delete buttons ( Only for creator of this game )  -->
            <div class="buttons">
              <a href="/edit/${game._id}" class="button">Edit</a>
              <a @click=${onDelete} href="javascript:void(0)" class="button"
                >Delete</a
              >
            </div>`
        : nothing}
    </div>

    ${hasUser && !isOwner
      ? html`
          <!-- Bonus -->
          <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->
          <article class="create-comment">
            <label>Add new comment:</label>
            <form @submit=${createComment} class="form">
              <textarea name="comment" placeholder="Comment......"></textarea>
              <input class="btn submit" type="submit" value="Add Comment" />
            </form>
          </article>
        `
      : nothing}
  </section>
`;

export async function showDetails(ctx) {
  const gameId = ctx.params.id;
  const detailsGame = await getGameById(gameId);
  const allComents = await getAllComents(gameId);
  allComents.forEach((element) => console.log(element));

  const user = ctx.user;
  let isOwner = user ? detailsGame._ownerId == user._id : false;
  let hasUser = user ? true : false;

  ctx.render(
    detailsTemplate(
      detailsGame,
      isOwner,
      hasUser,
      onDelete,
      allComents,
      createComment
    )
  );

  async function onDelete() {
    deleteGameById(gameId);
    ctx.page.redirect("/");
  }

  async function createComment(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const comment = formData.get("comment");
    if (!comment) {
      return alert("Enter your comment!");
    }

    const data = { gameId, comment };
    await postComments(data);
    document.querySelector("#game-details > article > form > textarea").value =
      "";
    ctx.page.redirect("/details/" + gameId);
  }
}
