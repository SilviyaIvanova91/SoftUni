// //1. get all needed HTML elements
// //2. load button -> add event listener
// //3. fetch all books from server and update HTML
// //4. add an event on the format submit
// //5. POSt data for a new book to the server
// //6. add event listener for update/delete
// //7.implement update/delete

let url = "http://localhost:3030/jsonstore/collections/books";
let loadBookBtn = document.querySelector("#loadBooks");
let tbody = document.querySelector("tbody");
let formElement = document.querySelector("form");
let h3 = document.querySelector("form h3");
let formBtn = document.querySelector("form button");

let bookId = "";

function attachEvents() {
  loadBookBtn.addEventListener("click", loadBook);
  formElement.addEventListener("submit", createBook);
}

async function loadBook() {
  let response = await fetch(url);
  if (response.status != 200) {
    throw new Error("Problem loading data");
  }
  let data = await response.json();

  tbody.innerHTML = "";
  let entries = Object.entries(data);
  for (const [key, value] of entries) {
    let trElement = createElements("tr", "", tbody);
    trElement.id = key;
    createElements("td", `${value.title}`, trElement);
    createElements("td", `${value.author}`, trElement);

    let newTDElement = createElements("td", "", trElement);

    let editBTn = createElements("button", "Edit", newTDElement);
    editBTn.addEventListener("click", edit);

    let deleteBtn = createElements("button", "Delete", newTDElement);
    deleteBtn.addEventListener("click", deleteBook);
  }
}

async function createBook(e) {
  e.preventDefault();

  let info = new FormData(e.target);
  let title = info.get("title");
  let author = info.get("author");

  let bookInfo = {
    author,
    title,
  };

  if (formBtn.textContent == "Save") {
    if (!title || !author) {
      alert("All fields are reqquired!");
      return;
    }
    await fetch(`${url}/${bookId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookInfo),
    });

    h3.textContent = "FORM";
    formBtn.textContent = "Submit";
  } else {
    if (!title || !author) {
      alert("All fields are reqquired!");
      return;
    }
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookInfo),
    });
  }

  loadBook();
  formElement.reset();
}

async function edit(e) {
  e.preventDefault();
  bookId = e.target.parentNode.parentNode.id;
  h3.textContent = "Edit FORM";
  formBtn.textContent = "Save";

  formElement.querySelector("input[name=title]").value =
    e.target.parentNode.parentNode.children[0].textContent;
  formElement.querySelector("input[name=author]").value =
    e.target.parentNode.parentNode.children[1].textContent;
}

function deleteBook(e) {
  e.preventDefault();
  let bookId = e.target.parentNode.parentNode.getAttribute("id");
  fetch(`${url}/${bookId}`, {
    method: "DELETE",
  });
  loadBook();
}

function createElements(type, text, parent) {
  let element = document.createElement(type);
  element.textContent = text;
  if (parent) {
    parent.appendChild(element);
  }
  return element;
}

attachEvents();
