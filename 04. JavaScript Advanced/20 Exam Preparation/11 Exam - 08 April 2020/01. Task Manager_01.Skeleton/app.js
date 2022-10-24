function solve() {
  let task = document.getElementById("task");
  let description = document.getElementById("description");
  let date = document.getElementById("date");

  let btnAdd = document.getElementById("add");

  let openTask = document.querySelector(
    "body > main > div > section:nth-child(2) > div:nth-child(2)"
  );
  let inProgress = document.getElementById("in-progress");
  let complete = document.querySelector(
    "body > main > div > section:nth-child(4) > div:nth-child(2)"
  );

  btnAdd.addEventListener("click", (ev) => {
    ev.preventDefault();
    if (task.value == "" || description.value == "" || date.value == "") {
      return;
    }

    let article = createElement("article");
    openTask.appendChild(article);

    let title = createElement("h3", `${task.value}`);
    article.appendChild(title);

    let pdescript = createElement("p", `Description: ${description.value}`);
    article.appendChild(pdescript);

    let pdate = createElement("p", `Due Date: ${date.value}`);
    article.appendChild(pdate);

    let divBtns = createElement("div", "", "flex");
    article.appendChild(divBtns);

    let btnStart = createElement("button", "Start", "green");
    divBtns.appendChild(btnStart);

    let btnDelete = createElement("button", "Delete", "red");
    divBtns.appendChild(btnDelete);

    btnStart.addEventListener("click", () => {
      inProgress.appendChild(article);

      btnStart.remove();

      let btnFinish = createElement("button", "Finish", "orange");
      divBtns.appendChild(btnFinish);

      btnFinish.addEventListener("click", () => {
        complete.appendChild(article);
        divBtns.remove();
      });
    });

    btnDelete.addEventListener("click", () => {
      article.remove();
    });

    task.value = "";
    description.value = "";
    date.value = "";
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

solve();
