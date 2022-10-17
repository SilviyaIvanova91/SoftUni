window.addEventListener("load", solve);

function solve() {
  let genre = document.getElementById("genre");
  let nameOfSong = document.getElementById("name");
  let author = document.getElementById("author");
  let dateOfCreation = document.getElementById("date");

  let div = document.querySelector(".all-hits-container");
  let totalLikeSection = document.querySelector(".likes");
  let saveSongDiv = document.querySelector(".saved-container");

  let addBtn = document.getElementById("add-btn");
  addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      genre.value == "" ||
      nameOfSong.value == "" ||
      author.value == "" ||
      dateOfCreation.value == ""
    ) {
      return;
    }

    let divCollection = createElements("div", "", "hits-info");
    div.appendChild(divCollection);

    let img = createElements("img");
    img.src = "./static/img/img.png";
    divCollection.appendChild(img);

    let titleGenre = createElements("h2", `Genre: ${genre.value}`);
    divCollection.appendChild(titleGenre);
    let titlaName = createElements("h2", `Name: ${nameOfSong.value}`);
    divCollection.appendChild(titlaName);
    let titleAuthor = createElements("h2", `Author: ${author.value}`);
    divCollection.appendChild(titleAuthor);
    let titleDate = createElements("h3", `Date: ${dateOfCreation.value}`);
    divCollection.appendChild(titleDate);

    let btnSave = createElements("button", "Save song", "save-btn");
    divCollection.appendChild(btnSave);

    btnSave.addEventListener("click", () => {
      saveSongDiv.appendChild(divCollection);
      btnLike.remove();
      btnSave.remove();
    });

    let btnLike = createElements("button", "Like song", "like-btn");
    divCollection.appendChild(btnLike);

    btnLike.addEventListener("click", () => {
      let paragraph = totalLikeSection.querySelector("p");
      let pAl = paragraph.textContent.split(": ");
      let likes = Number(pAl[1]);
      likes++;
      paragraph.textContent = `${pAl[0]}: ${likes}`;
      btnLike.setAttribute("disabled", true);
    });

    let btnDelete = createElements("button", "Delete", "delete-btn");
    divCollection.appendChild(btnDelete);

    btnDelete.addEventListener("click", () => {
      divCollection.remove();
    });

    genre.value = "";
    nameOfSong.value = "";
    author.value = "";
    dateOfCreation.value = "";
  });

  function createElements(type, text, elClass) {
    let el = document.createElement(type);
    el.textContent = text;
    if (elClass) {
      el.className = elClass;
    }
    return el;
  }
}
