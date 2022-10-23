window.addEventListener("load", solve);

function solve() {
  let firstName = document.getElementById("first-name");
  let lastName = document.getElementById("last-name");
  let age = document.getElementById("age");
  let storyTitle = document.getElementById("story-title");
  let genre = document.getElementById("genre");
  let storyText = document.getElementById("story");

  let ulPrevew = document.getElementById("preview-list");
  let divMain = document.getElementById("main");

  let btnPublish = document.getElementById("form-btn");

  btnPublish.addEventListener("click", (ev) => {
    ev.preventDefault();
    if (
      !firstName.value ||
      !lastName.value ||
      !age.value ||
      !storyTitle.value ||
      !storyText.value
    ) {
      return;
    }

    let li = createElement("li", "", "story-info");
    ulPrevew.appendChild(li);

    let article = createElement("article");
    li.appendChild(article);

    let titleName = createElement(
      "h4",
      `Name: ${firstName.value} ${lastName.value}`
    );
    article.appendChild(titleName);

    let pAge = createElement("p", `Age: ${age.value}`);
    article.appendChild(pAge);

    let pTitle = createElement("p", `Title: ${storyTitle.value}`);
    article.appendChild(pTitle);

    let pGenre = createElement("p", `Genre: ${genre.value}`);
    article.appendChild(pGenre);

    let pStorytext = createElement("p", `${storyText.value}`);
    article.appendChild(pStorytext);

    let btnSave = createElement("button", "Save Story", "save-btn");
    li.appendChild(btnSave);

    let btnEdit = createElement("button", "Edit Story", "edit-btn");
    li.appendChild(btnEdit);

    let btnDelete = createElement("button", "Delete Story", "delete-btn");
    li.appendChild(btnDelete);

    btnSave.addEventListener("click", () => {
      divMain.innerHTML = "";
      let finalTitle = createElement("h1", "Your scary story is saved!");
      divMain.appendChild(finalTitle);
    });

    btnEdit.addEventListener("click", () => {
      firstName.value = titleName.textContent.split(" ")[1];
      lastName.value = titleName.textContent.split(" ")[2];
      age.value = pAge.textContent.split(" ")[1];
      storyTitle.value = pTitle.textContent.split("Title: ")[1];
      genre.value = pGenre.textContent.split("Genre: ")[1];
      storyText.value = pStorytext.textContent;
      btnPublish.removeAttribute("disabled");
      btnSave.setAttribute("disabled", false);
      btnDelete.setAttribute("disabled", false);
      btnEdit.setAttribute("disabled", false);

      li.remove();
    });

    btnDelete.addEventListener("click", () => {
      li.remove();
      btnPublish.removeAttribute("disabled");
    });

    firstName.value = "";
    lastName.value = "";
    age.value = "";
    storyTitle.value = "";
    genre.value = "";
    storyText.value = "";
    btnPublish.setAttribute("disabled", false);
  });

  function createElement(type, text, classEl) {
    let el = document.createElement(type);
    el.textContent = text;
    if (classEl) {
      el.className = classEl;
    }
    return el;
  }
}
