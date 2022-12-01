import { getAllBooks } from "../api/data.js";
import { html, render, page, nothing } from "../lib.js";

const catalogTemplate = (books) => html`
  <!-- Dashboard Page ( for Guests and Users ) -->
  <section id="dashboard-page" class="dashboard">
    <h1>Dashboard</h1>
    ${books.length > 0
      ? html`
          <!-- Display ul: with list-items for All books (If any) -->
          <ul class="other-books-list">
            ${books.map(bookCard)}
          </ul>
        `
      : html`
          <!-- Display paragraph: If there are no books in the database -->
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

export async function showCatalog(ctx) {
  const allBook = await getAllBooks();

  ctx.render(catalogTemplate(allBook));
}
