function solve() {
  let author = document.getElementById("creator");
  let title = document.getElementById("title");
  let category = document.getElementById("category");
  let contend = document.getElementById("content");

  let postSection = document.querySelector(".site-content main section");
  let archiveSection = document.querySelector(".archive-section ol");

  let createBtn = document.querySelector("button");

  createBtn.addEventListener("click", (ev) => {
    ev.preventDefault();
    let article = createElemets("article");
    postSection.appendChild(article);

    let titlePost = createElemets("h1", `${title.value}`);
    article.appendChild(titlePost);

    let categoryPost = createElemets("p", "Category: ");
    article.appendChild(categoryPost);
    let strongCategoryPost = createElemets("strong", `${category.value}`);
    categoryPost.appendChild(strongCategoryPost);

    let creatorPost = createElemets("p", "Creator: ");
    article.appendChild(creatorPost);
    let strongCreatorPost = createElemets("strong", `${author.value}`);
    creatorPost.appendChild(strongCreatorPost);

    let contentPost = createElemets("p", `${contend.value}`);
    article.appendChild(contentPost);

    let divBtns = createElemets("div", "", "buttons");
    article.appendChild(divBtns);

    let btnDelete = createElemets("button", "Delete", "btn delete");
    divBtns.appendChild(btnDelete);

    let btnArchive = createElemets("button", "Archive", "btn archive");
    divBtns.appendChild(btnArchive);

    btnDelete.addEventListener("click", () => {
      article.remove();
    });

    btnArchive.addEventListener("click", (ev) => {
      let liArchive = createElemets("li", `${titlePost.textContent}`);
      archiveSection.appendChild(liArchive);

      let allARt = Array.from(archiveSection.children);
      allARt
        .sort((a, b) => a.textContent.localeCompare(b.textContent))
        .forEach((li) => {
          archiveSection.appendChild(li);
        });

      article.remove();
    });

    author.value = "";
    title.value = "";
    category.value = "";
    contend.value = "";
  });

  function createElemets(type, text, classN) {
    let el = document.createElement(type);
    el.textContent = text;
    if (classN) {
      el.className = classN;
    }
    return el;
  }
}
