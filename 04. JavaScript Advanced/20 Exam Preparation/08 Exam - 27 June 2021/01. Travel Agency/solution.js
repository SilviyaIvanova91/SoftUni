window.addEventListener("load", solution);

function solution() {
  let fullName = document.getElementById("fname");
  let email = document.getElementById("email");
  let phoneNum = document.getElementById("phone");
  let adress = document.getElementById("address");
  let postCode = document.getElementById("code");

  let ulInfoPrevew = document.getElementById("infoPreview");
  let divblock = document.getElementById("block");

  let submitBtn = document.getElementById("submitBTN");
  let editBtn = document.getElementById("editBTN");
  let continueBtn = document.getElementById("continueBTN");

  submitBtn.addEventListener("click", (ev) => {
    ev.preventDefault();
    if (!fullName.value || !email.value) {
      return;
    }

    let liName = createElements("li", `Full Name: ${fullName.value}`);
    let liEmail = createElements("li", `Email: ${email.value}`);
    let liPhoneNum = createElements("li", `Phone Number: ${phoneNum.value}`);
    let liAdress = createElements("li", `Address: ${adress.value}`);
    let liPostCode = createElements("li", `Postal Code: ${postCode.value}`);

    ulInfoPrevew.appendChild(liName);
    ulInfoPrevew.appendChild(liEmail);
    ulInfoPrevew.appendChild(liPhoneNum);
    ulInfoPrevew.appendChild(liAdress);
    ulInfoPrevew.appendChild(liPostCode);

    submitBtn.setAttribute("disabled", true);
    editBtn.removeAttribute("disabled");
    continueBtn.removeAttribute("disabled");

    editBtn.addEventListener("click", () => {
      fullName.value = liName.textContent.split(": ")[1];
      email.value = liEmail.textContent.split(": ")[1];
      phoneNum.value = liPhoneNum.textContent.split(": ")[1];
      adress.value = liAdress.textContent.split(": ")[1];
      postCode.value = liPostCode.textContent.split(": ")[1];

      submitBtn.removeAttribute("disabled");
      editBtn.setAttribute("disabled", true);
      continueBtn.setAttribute("disabled", true);

      Array.from(ulInfoPrevew.children).forEach((li) => li.remove());
    });

    continueBtn.addEventListener("click", () => {
      // while (divblock.firstChild) {
      //   divblock.removeChild(divblock.lastChild);
      // }

      divblock.innerHTML = "";
      let finalText = createElements("h3", "Thank you for your reservation!");
      divblock.appendChild(finalText);
    });

    fullName.value = "";
    email.value = "";
    phoneNum.value = "";
    adress.value = "";
    postCode.value = "";
  });

  function createElements(type, text) {
    let el = document.createElement(type);
    el.textContent = text;
    return el;
  }
}

//------------------------
// function solution() {
//   let nameField = document.querySelector('#fname');
//   let mailField = document.querySelector('#email');
//   let phoneField = document.querySelector('#phone');
//   let adressField = document.querySelector('#address');
//   let postalField = document.querySelector('#code');

//   let submitButton = document.querySelector('#submitBTN');

//   let previewBox = document.querySelector("#infoPreview");

//   //let actions = document.querySelector('.actions');
//   let block = document.querySelector('#block');

//   submitButton.addEventListener('click', (event) => {
//       if (!nameField.value || !mailField.value) {
//           return;
//       }

//       let name = nameField.value;
//       let mail = mailField.value;
//       let phone = phoneField.value;
//       let address = adressField.value;
//       let postal = postalField.value;

//       let nameLI = document.createElement('li');
//       nameLI.textContent = `Full Name: ${name}`;

//       let mailLI = document.createElement('li');
//       mailLI.textContent = `Email: ${mail}`;

//       let phoneLI = document.createElement('li');
//       phoneLI.textContent = `Phone Number: ${phone}`;

//       let addressLI = document.createElement('li');
//       addressLI.textContent = `Address: ${address}`;

//       let postalLI = document.createElement('li');
//       postalLI.textContent = `Postal Code: ${postal}`;

//       previewBox.appendChild(nameLI)
//       previewBox.appendChild(mailLI);
//       previewBox.appendChild(phoneLI);
//       previewBox.appendChild(addressLI);
//       previewBox.appendChild(postalLI);

//       nameField.value = '';
//       mailField.value = '';
//       phoneField.value = '';
//       adressField.value = '';
//       postalField.value = '';
//       event.target.disabled = true; //disables submit button

//       let editButton = document.querySelector('#editBTN');
//       let continueButton = document.querySelector('#continueBTN');

//       editButton.disabled = false;
//       continueButton.disabled = false;

//       editButton.addEventListener('click', (event) => {
//           submitButton.disabled = false;
//           editButton.disabled = true;
//           continueButton.disabled = true;

//           previewBox.removeChild(nameLI)
//           previewBox.removeChild(mailLI);
//           previewBox.removeChild(phoneLI);
//           previewBox.removeChild(addressLI);
//           previewBox.removeChild(postalLI);

//           nameField.value = name;
//           mailField.value = mail;
//           phoneField.value = phone;
//           adressField.value = address;
//           postalField.value = postal;
//       });

//       continueButton.addEventListener('click', (event) => {
//           block.innerHTML = '';
//           let h3 = document.createElement('h3');
//           h3.textContent = `Thank you for your reservation!`;
//           block.appendChild(h3);
//       });
//   });
// }
