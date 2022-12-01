import {
  bookById,
  deleteBook,
  getNumOfLikes,
  likes,
  totalLike,
} from "../api/data.js";
import { html, render, page, nothing } from "../lib.js";

const detailsTemplate = (
  book,
  isOwner,
  hasUser,
  onDelete,
  isLiked,
  onLike,
  totalCount
) => html`
  <!-- Details Page ( for Guests and Users ) -->
  <section id="details-page" class="details">
    <div class="book-information">
      <h3>${book.title}</h3>
      <p class="type">Type: ${book.type}</p>
      <p class="img"><img src=${book.imageUrl} /></p>
      <div class="actions">
        ${isOwner
          ? html`
              <!-- Edit/Delete buttons ( Only for creator of this book )  -->
              <a class="button" href="/edit/${book._id}">Edit</a>
              <a @click=${onDelete} class="button" href="javascript:void(0)"
                >Delete</a
              >
            `
          : nothing}

        <!-- Bonus -->
        ${hasUser && !isOwner && isLiked == 0
          ? html`
              <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
              <a @click=${onLike} class="button" href="#">Like</a>
            `
          : nothing}

        <!-- ( for Guests and Users )  -->
        <div class="likes">
          <img class="hearts" src="/images/heart.png" />
          <span id="total-likes">Likes: ${totalCount}</span>
        </div>
        <!-- Bonus -->
      </div>
    </div>
    <div class="book-description">
      <h3>Description:</h3>
      <p>${book.description}</p>
    </div>
  </section>
`;

export async function showDetails(ctx) {
  const bookId = ctx.params.id;
  const book = await bookById(bookId);

  const user = ctx.user;
  const isOwner = user ? book._ownerId === user._id : false;
  const hasUser = user ? true : false;

  const totalCount = await totalLike(bookId);
  let isLiked = 0;

  if (hasUser && !isOwner) {
    isLiked = await getNumOfLikes(bookId, user._id);
  }

  ctx.render(
    detailsTemplate(
      book,
      isOwner,
      hasUser,
      onDelete,
      isLiked,
      onLike,
      totalCount
    )
  );

  async function onLike(e) {
    e.preventDefault();
    await likes({ bookId });
    const totalCount = await totalLike(bookId);
    isLiked = await getNumOfLikes(bookId, user._id);

    ctx.render(
      detailsTemplate(
        book,
        isOwner,
        hasUser,
        onDelete,
        isLiked,
        onLike,
        totalCount
      )
    );
  }

  async function onDelete() {
    const choise = confirm("Are you sure you want to delete this offer?");
    if (!choise) {
      return;
    }
    await deleteBook(bookId);

    ctx.page.redirect("/catalog");
  }
}
