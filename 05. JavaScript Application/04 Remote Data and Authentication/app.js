const list = document.getElementById("comments");
// const nameInput = document.querySelector('[name="name"]');
// const contentInput = document.querySelector('[name="content"]');

init();

function init() {
  document.getElementById("load").addEventListener("click", getComments);
  document.getElementById("comment-form").addEventListener("submit", onPost);
  list.addEventListener("click", onCommendClick);

  getComments();
}

async function onPost(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const { name, content } = Object.fromEntries(formData.entries());

  const result = await postComment({ name, content });
  list.prepend(createCommentCard(result));

  /*
  const name = nameInput.value;
  const content = contentInput.value;

  const result = await postComment({ name, content });
  list.prepend(createCommentCard(result));
  */
}

function displayComment(comments) {
  list.replaceChildren(...comments.map(createCommentCard));
}

function createCommentCard(comment) {
  const element = document.createElement("article");
  element.innerHTML = `<header><h3>${comment.name}</h3></header><main><p>${comment.content}</p><button>Delete</button></main>`;
  element.id = comment._id;

  return element;
}

async function getComments() {
  const response = await fetcg("http://localhost:3030/jsonstore/comments");
  const data = await response.json();

  const comments = Object.values(data).reverse();
  displayComment(comments);
}

async function postComment(comment) {
  const response = await fetch("http://localhost:3030/jsonstore/comments", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(comment),
  });

  const data = await response.json();
  return data;
}

function onCommendClick(ev) {
  if (ev.target.tagName == "BUTTON") {
    const choice = confirm("Are you sure you want to delete this comment?");
    if (choice) {
      const commentID = ev.target.parentElement.parentElement.id;
      deleteComment(commentID);
    }
  }
}

async function deleteComment(id) {
  const response = await fetch(
    "http://localhost:3030/jsonstore/comments" + id,
    {
      method: "delete",
    }
  );
  const element = document.getElementById(id).remove();
}

async function updateComment(id, comment) {
  const response = await fetch(
    "http://localhost:3030/jsonstore/comments" + id,
    {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    }
  );
  return response.json();
}
