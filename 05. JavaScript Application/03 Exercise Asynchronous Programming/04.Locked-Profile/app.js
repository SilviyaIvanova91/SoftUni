async function lockedProfile() {
  let url = "http://localhost:3030/jsonstore/advanced/profiles";
  let main = document.getElementById("main");
  main.replaceChildren();

  try {
    let reponse = await fetch(url);
    if (!reponse.ok) {
      throw new Error("Error");
    }
    let data = await reponse.json();
    let id = 1;

    for (let el of Object.values(data)) {
      const divContainer = createElement("div", "", main);
      divContainer.className = "profile";

      const img = createElement("img", "", divContainer);
      img.className = "userIcon";
      img.setAttribute("src", "./iconProfile2.png");

      createElement("label", "Lock", divContainer);
      const inputLock = createElement("input", "", divContainer);
      inputLock.type = "radio";
      inputLock.name = `user${id}Locked`;
      inputLock.value = "lock";
      inputLock.setAttribute("checked", "checked");

      createElement("label", " Unlock", divContainer);
      const inputUnlock = createElement("input", "", divContainer);
      inputUnlock.type = "radio";
      inputUnlock.name = `user${id}Locked`;
      inputUnlock.value = "unlock";

      createElement("br", "", divContainer);
      createElement("hr", "", divContainer);
      createElement("label", "Username", divContainer);

      const inputInfo = createElement("input", "", divContainer);
      inputInfo.type = "text";
      inputInfo.name = `user${id}Username`;
      inputInfo.value = el.username;
      inputInfo.disabled = true;
      inputInfo.readonly = true;

      const hidenDiv = createElement("div", "", divContainer);
      hidenDiv.id = "userHiddenFields";
      hidenDiv.style.display = "none";

      createElement("hr", "", hidenDiv);
      createElement("label", "Email:", hidenDiv);

      const inputEmail = createElement("input", "", hidenDiv);
      inputEmail.type = "email";
      inputEmail.name = `user${id}Email`;
      inputEmail.value = el.email;
      inputEmail.disabled = true;
      inputEmail.readonly = true;

      createElement("label", "Age:", hidenDiv);
      const inputAge = createElement("input", "", hidenDiv);
      inputAge.type = "email";
      inputAge.name = `user${id}Age`;
      inputAge.value = el.age;
      inputAge.disabled = true;
      inputAge.readonly = true;

      id++;

      let btnMore = createElement("button", "Show more", divContainer);
      btnMore.addEventListener("click", (e) => {
        if (inputUnlock.checked && e.target.textContent == "Show more") {
          hidenDiv.style.display = "block";
          btnMore.textContent = "Hide it";
        } else if (inputUnlock.checked && e.target.textContent == "Hide it") {
          hidenDiv.style.display = "none";
          btnMore.textContent = "Show more";
        }
      });
    }
  } catch (error) {
    console.log(error.message);
  }

  function createElement(type, text, parent) {
    let element = document.createElement(type);
    element.textContent = text;
    if (parent) {
      parent.appendChild(element);
    }
    return element;
  }
}
