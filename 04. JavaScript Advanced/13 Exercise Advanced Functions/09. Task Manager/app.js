function solve() {
  //collect field values
  const input = {
    name: document.getElementById("task"),
    description: document.getElementById("description"),
    date: document.getElementById("date"),
  };
  const [_, openSection, progressSection, finishedSection] = Array.from(
    document.querySelectorAll("section")
  ).map((e) => e.children[1]);
  document.getElementById("add").addEventListener("click", addTask);

  function addTask(event) {
    event.preventDefault();

    //create elements
    const article = document.createElement("article");
    article.appendChild(createElement("h3", input.name.value));
    article.appendChild(
      createElement("p", `Description: ${input.description.value}`)
    );
    article.appendChild(createElement("p", `Due Date: ${input.date.value}`));
    const div = createElement("div", "", "flex");

    const startButton = createElement("button", "Start", "green");
    const daleteButton = createElement("button", "Delete", "red");
    const finishButton = createElement("button", "Finish", "orange");
    div.appendChild(startButton);
    div.appendChild(daleteButton);
    article.appendChild(div);

    //append to Open section
    openSection.appendChild(article);

    Object.values(input).forEach((i) => (i.value = ""));

    // **add functionality for start, finifh, delete task
    startButton.addEventListener("click", onStart);
    daleteButton.addEventListener("click", onDelete);
    finishButton.addEventListener("click", onFinish);

    function onDelete() {
      article.remove();
    }

    function onStart() {
      startButton.remove();
      div.appendChild(finishButton);
      progressSection.appendChild(article);
    }

    function onFinish() {
      div.remove();
      finishedSection.appendChild(article);
    }
  }

  function createElement(type, content, className) {
    const element = document.createElement(type);
    element.textContent = content;
    if (className) {
      element.className = className;
    }
    return element;
  }
}
