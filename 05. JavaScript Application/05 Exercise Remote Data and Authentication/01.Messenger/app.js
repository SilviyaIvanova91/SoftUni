function attachEvents() {
  document.querySelector("#refresh").addEventListener("click", displayComments);
  document.querySelector("#submit").addEventListener("click", addComment);
}

let url = "http://localhost:3030/jsonstore/messenger";
let authorName = document.querySelector('input[name="author"]');
let content = document.querySelector('input[name="content"]');
let textxArea = document.querySelector("#messages");

async function addComment() {
  let info = {
    author: authorName.value.trim(),
    content: content.value.trim(),
  };
  if (info) {
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(info),
    });
    if (response.ok == false) {
      throw new Error("Error");
    }
    let data = await response.json();
  }

  try {
    if (!authorName.value || !content.value) {
      return;
    }

    authorName.value = "";
    content.value = "";
    displayComments();
  } catch (error) {
    alert(error.message);
  }
}

async function displayComments() {
  let response = await fetch(url);
  if (response.ok == false) {
    throw new Error("Error");
  }
  let data = await response.json();
  let comments = [];
  Object.values(data).forEach((u) =>
    comments.push(`${u.author}: ${u.content}`)
  );
  textxArea.value = comments.join("\n");
}

//---------------------50%--------------------------------------
// 1. add event listener to the buttons
// 2. create addComment func -> get data from inputs
// POST request to the server
// 3. create DisplayComment func -> fetch all comments from server
// display the data

// function attachEvents() {
//   document.querySelector("#refresh").addEventListener("click", displayComments);
//   document.querySelector("#submit").addEventListener("click", addComment);
// }
// let url = "http://localhost:3030/jsonstore/messenger";

// function addComment() {
//   let authorName = document.querySelector('[name="author"]');
//   let content = document.querySelector('[name="content"]');

//   if (!authorName.value || !content.value) {
//     return;
//   }

//   fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify({
//       author: authorName.value.trim(),
//       content: content.value.trim(),
//     }),
//   })
//     .then((res) => {
//       if (res.ok == false) {
//         throw new Error("Error");
//       }
//       return res.json();
//     })
//     .catch((err) => alert(err.message));
//   authorName.value = "";
//   content.value = "";
//   displayComments();
// }

// function displayComments() {
//   fetch(url)
//     .then((res) => {
//       if (res.ok == false) {
//         throw new Error("Error");
//       }
//       return res.json();
//     })
//     .then((data) => {
//       let textxArea = document.querySelector("#messages");
//       let comments = [];
//       Object.values(data).forEach((u) =>
//         comments.push(`${u.author}: ${u.content}`)
//       );
//       textxArea.value = comments.join("\n");
//     })
//     .catch((err) => alert(err.message));
// }

attachEvents();
