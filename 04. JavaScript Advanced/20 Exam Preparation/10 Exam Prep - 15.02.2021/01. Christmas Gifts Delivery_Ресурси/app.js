function solution() {
  let name = document.querySelector(".card div input[type=text]");
  let btnAdd = document.querySelector(".card div button");

  let ul = document.querySelector("body > div > section:nth-child(2) > ul");
  let ulSentGift = document.querySelector(
    "body > div > section:nth-child(3) > ul"
  );
  let ulDiscardGift = document.querySelector(
    "body > div > section:nth-child(4) > ul"
  );

  btnAdd.addEventListener("click", (ev) => {
    ev.preventDefault();

    let li = createElements("li", `${name.value}`);
    li.className = "gift";
    ul.appendChild(li);

    let btnSend = createElements("button", "Send");
    btnSend.setAttribute("id", "sendButton");
    li.appendChild(btnSend);

    let btnDiscard = createElements("button", "Discard");
    btnDiscard.setAttribute("id", "discardButton");
    li.appendChild(btnDiscard);

    let listOfGift = Array.from(ul.children);
    listOfGift
      .sort((a, b) => a.textContent.localeCompare(b.textContent))
      .forEach((li) => {
        ul.appendChild(li);
      });

    btnSend.addEventListener("click", () => {
      ulSentGift.appendChild(li);
      btnSend.remove();
      btnDiscard.remove();
    });

    btnDiscard.addEventListener("click", () => {
      ulDiscardGift.appendChild(li);
      btnSend.remove();
      btnDiscard.remove();
    });

    name.value = "";
  });

  function createElements(type, text, id) {
    let el = document.createElement(type);
    el.textContent = text;
    return el;
  }
}
