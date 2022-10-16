function solve() {
  let firstName = document.getElementById("fname");
  let lastName = document.getElementById("lname");
  let email = document.getElementById("email");
  let birthDate = document.getElementById("birth");
  let position = document.getElementById("position");
  let salary = document.getElementById("salary");

  let tbody = document.getElementById("tbody");
  let budgetForSalary = document.getElementById("sum");

  let hireWorkerBtn = document.getElementById("add-worker");
  hireWorkerBtn.addEventListener("click", hireWorkers);

  function hireWorkers(ev) {
    ev.preventDefault();

    if (
      !firstName.value ||
      !lastName.value ||
      !email.value ||
      !birthDate.value ||
      !position.value ||
      !salary.value
    ) {
      return;
    }

    let tr = createElement("tr");

    let tdName = createElement("td", `${firstName.value}`);
    tr.appendChild(tdName);
    let tdLastName = createElement("td", `${lastName.value}`);
    tr.appendChild(tdLastName);
    let tdemail = createElement("td", `${email.value}`);
    tr.appendChild(tdemail);
    let tdBirthdayDate = createElement("td", `${birthDate.value}`);
    tr.appendChild(tdBirthdayDate);
    let tdPosition = createElement("td", `${position.value}`);
    tr.appendChild(tdPosition);
    let tdSalary = createElement("td", `${salary.value}`);
    tr.appendChild(tdSalary);

    let tdBtn = createElement("td");
    tr.appendChild(tdBtn);

    let btnFired = createElement("button", "Fired");
    btnFired.className = "fired";
    tdBtn.appendChild(btnFired);

    let btnEdit = createElement("button", "Edit");
    btnEdit.className = "edit";
    tdBtn.appendChild(btnEdit);

    tbody.appendChild(tr);

    budgetForSalary.textContent = (
      Number(salary.value) + Number(budgetForSalary.textContent)
    ).toFixed(2);

    firstName.value = "";
    lastName.value = "";
    email.value = "";
    birthDate.value = "";
    position.value = "";
    salary.value = "";

    btnEdit.addEventListener("click", () => {
      firstName.value = tdName.textContent;
      lastName.value = tdLastName.textContent;
      email.value = tdemail.textContent;
      birthDate.value = tdBirthdayDate.textContent;
      position.value = tdPosition.textContent;
      salary.value = tdSalary.textContent;

      budgetForSalary.textContent = (
        Number(budgetForSalary.textContent) - Number(tdSalary.textContent)
      ).toFixed(2);

      tr.remove();
    });

    btnFired.addEventListener("click", () => {
      budgetForSalary.textContent = (
        Number(budgetForSalary.textContent) - Number(tdSalary.textContent)
      ).toFixed(2);

      tr.remove();
    });
  }

  function createElement(type, text) {
    let el = document.createElement(type);
    el.textContent = text;
    return el;
  }
}

//-----------------------------------------------
// function solve() {
//   let firstName = document.getElementById("fname");
//   let lastName = document.getElementById("lname");
//   let email = document.getElementById("email");
//   let birthDate = document.getElementById("birth");
//   let position = document.getElementById("position");
//   let salary = document.getElementById("salary");

//   let hireWorkerBtn = document.getElementById("add-worker");
//   hireWorkerBtn.addEventListener("click", hireWorkers);

//   let budgetForSalary = document.getElementById("sum");

//   function hireWorkers(ev) {
//     ev.preventDefault();

//     if (
//       !firstName.value ||
//       !lastName.value ||
//       !email.value ||
//       !birthDate.value ||
//       !position.value ||
//       !salary.value
//     ) {
//       return;
//     }

//     let tbody = document.getElementById("tbody");

//     let tr = createElement("tr");
//     tbody.appendChild(tr);

//     let tdName = createElement("td", `${firstName.value}`);
//     tr.appendChild(tdName);
//     let tdLastName = createElement("td", `${lastName.value}`);
//     tr.appendChild(tdLastName);
//     let tdemail = createElement("td", `${email.value}`);
//     tr.appendChild(tdemail);
//     let tdBirthdayDate = createElement("td", `${birthDate.value}`);
//     tr.appendChild(tdBirthdayDate);
//     let tdPosition = createElement("td", `${position.value}`);
//     tr.appendChild(tdPosition);
//     let tdSalary = createElement("td", `${salary.value}`);
//     tr.appendChild(tdSalary);

//     let tdBtn = createElement("td");
//     tr.appendChild(tdBtn);

//     let btnFired = createElement("button", "Fired");
//     btnFired.className = "fired";
//     tdBtn.appendChild(btnFired);

//     let btnEdit = createElement("button", "Edit");
//     btnEdit.className = "edit";
//     tdBtn.appendChild(btnEdit);

//     budgetForSalary.textContent = (Number(salary.value) + Number(budgetForSalary.textContent)).toFixed(2);

//     firstName.value = "";
//     lastName.value = "";
//     email.value = "";
//     birthDate.value = "";
//     position.value = "";
//     salary.value = "";

//     btnEdit.addEventListener("click", editButton);
//     btnFired.addEventListener("click", firedButton);
//   }

//   function editButton(ev) {
//     let parrentEl = ev.target.parentElement.parentElement;
//     let tdAll = Array.from(parrentEl.querySelectorAll("td"));

//     firstName.value = tdAll[0].textContent;
//     lastName.value = tdAll[1].textContent;
//     email.value = tdAll[2].textContent;
//     birthDate.value = tdAll[3].textContent;
//     position.value = tdAll[4].textContent;
//     salary.value = tdAll[5].textContent;

//     budgetForSalary.textContent = (Number(budgetForSalary.textContent) - Number(salary.value)).toFixed(2);

//     parrentEl.remove();
//   }

//   function firedButton(ev) {
//     let parrentEl = ev.target.parentElement.parentElement;
//     let tdAll = Array.from(parrentEl.querySelectorAll("td"));

// budgetForSalary.textContent = (
//   Number(budgetForSalary.textContent) - Number(tdAll[5].textContent)
// ).toFixed(2);

//     parrentEl.remove();
//   }

//   function createElement(type, text) {
//     let el = document.createElement(type);

//     el.textContent = text;

//     return el;
//   }
// }

solve();
