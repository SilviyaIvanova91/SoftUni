import { getMyBooks } from "../api/data.js";
import { html, render, page, nothing } from "../lib.js";

const myBookTemplate = (books) => html`
  <!-- My Books Page ( Only for logged-in users ) -->
  <section id="my-books-page" class="my-books">
    <h1>My Books</h1>
    ${books.length > 0
      ? html`
          <!-- Display ul: with list-items for every user's books (if any) -->
          <ul class="my-books-list">
            ${books.map(bookCard)}
          </ul>
        `
      : html`
          <!-- Display paragraph: If the user doesn't have his own books  -->
          <p class="no-books">No books in database!</p>
        `}
  </section>
`;

const bookCard = (book) => html`
  <li class="otherBooks">
    <h3>${book.title}</h3>
    <p>Type: ${book.type}</p>
    <p class="img"><img src=${book.imageUrl} /></p>
    <a class="button" href="/details/${book._id}">Details</a>
  </li>
`;

export async function showMyBook(ctx) {
  const userId = ctx.user && ctx.user._id;
  const myBook = await getMyBooks(userId);

  ctx.render(myBookTemplate(myBook, userId));
}
