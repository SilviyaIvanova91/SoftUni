function solve() {
  let recepient = document.getElementById("recipientName");
  let title = document.getElementById("title");
  let msg = document.getElementById("message");

  let btnAdd = document.getElementById("add");
  let btnReset = document.getElementById("reset");

  let ulDeletedMails = document.querySelector(".delete-list");

  btnAdd.addEventListener("click", (ev) => {
    ev.preventDefault();
    if (recepient.value == "" || title.value == "" || msg.value == "") {
      return;
    }

    let ul = document.getElementById("list");

    let li = createElement("li");
    ul.appendChild(li);

    let titleEl = createElement("h4", `Title: ${title.value}`);
    let nameEl = createElement("h4", `Recipient Name: ${recepient.value}`);
    let spanEl = createElement("span", `${msg.value}`);
    let div = createElement("div", "", `list-action`);
    li.appendChild(titleEl);
    li.appendChild(nameEl);
    li.appendChild(spanEl);
    li.appendChild(div);

    let btnSend = createElement("button", "Send", "send");
    let btnDelete = createElement("button", "Delete", "delete");
    div.appendChild(btnSend);
    div.appendChild(btnDelete);

    clearEl(recepient, title, msg);

    btnSend.addEventListener("click", () => {
      let ulSent = document.querySelector(".sent-list");

      let liSent = createElement("li");
      ulSent.appendChild(liSent);

      let titleForSend = titleEl.textContent.split("Title: ")[1];
      let nameForSend = nameEl.textContent.split("Recipient Name: ")[1];
      let spanReceientSend = createElement("span", `To: ${nameForSend}`);
      let spanTitleSend = createElement("span", `Title ${titleForSend}`);
      let divSend = createElement("div");
      divSend.className = "btn";
      liSent.appendChild(spanReceientSend);
      liSent.appendChild(spanTitleSend);
      liSent.appendChild(divSend);

      let btnDeleteSent = createElement("button", "Delete");
      btnDeleteSent.className = "delete";
      divSend.appendChild(btnDeleteSent);

      li.remove();

      btnDeleteSent.addEventListener("click", () => {
        let liDeleted = createElement("li");
        ulDeletedMails.appendChild(liDeleted);

        let spanToDeleted = createElement(
          "span",
          `${spanReceientSend.textContent}`
        );
        let spanTitleDelited = createElement(
          "span",
          `${spanTitleSend.textContent}`
        );
        liDeleted.appendChild(spanToDeleted);
        liDeleted.appendChild(spanTitleDelited);
        liSent.remove();
      });
    });

    btnDelete.addEventListener("click", () => {
      let liDeleted = createElement("li");
      ulDeletedMails.appendChild(liDeleted);

      let titleForSend = titleEl.textContent.split("Title: ")[1];
      let nameForSend = nameEl.textContent.split("Recipient Name: ")[1];
      let spanToDeleted = createElement("span", `To: ${nameForSend}`);
      let spanTitleDelited = createElement("span", `Title ${titleForSend}`);
      liDeleted.appendChild(spanToDeleted);
      liDeleted.appendChild(spanTitleDelited);
      li.remove();
    });
  });

  btnReset.addEventListener("click", () => {
    clearEl(recepient, title, msg);
  });

  function createElement(type, text, idType) {
    let el = document.createElement(type);
    if (text) {
      el.textContent = text;
    }
    if (idType) {
      el.setAttribute("id", idType);
    }

    return el;
  }

  function clearEl(recepient, title, msg) {
    recepient.value = "";
    title.value = "";
    msg.value = "";
  }
}
solve();
