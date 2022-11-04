// 1. add event window load
//2. fetch all students from server
//3. update html with recieved data
//4. on submit get value from inputs
//5. use the data and create POST request
//6. update student list

// window.onload = attachEvents;
// function attachEvents() {
//     form.addEventListener("submit", addStudents);
//     loadStudents();
//   }

let url = "http://localhost:3030/jsonstore/collections/students";
let table = document.querySelector("#results tbody");
let form = document.querySelector("#form");

window.addEventListener("load", loadStudents);
form.addEventListener("submit", addStudents);

async function addStudents(e) {
  e.preventDefault();
  //   let dataForm = new FormData(form);
  //   let infoArr = [...dataForm.values()];
  //   let firstName = infoArr[0];
  //   let lastName = infoArr[1];
  //   let facultyNumber = infoArr[2];
  //   let grade = Number(infoArr[3].trim());

  let dataForm = new FormData(e.target);
  let firstName = dataForm.get("firstName");
  let lastName = dataForm.get("lastName");
  let facultyNumber = dataForm.get("facultyNumber");
  let grade = dataForm.get("grade");

  try {
    if (!firstName || !lastName || !facultyNumber || !grade) {
      alert("All fields are required");
    } else {
      let student = {
        firstName,
        lastName,
        facultyNumber,
        grade,
      };
      let response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(student),
      });
      if (response.ok == false) {
        throw new Error("Cant create new record");
      }
      let data = response.json();
      loadStudents();
    }
  } catch (error) {
    alert(error.message);
  }
}

async function loadStudents() {
  let response = await fetch(url);
  if (response.status != 200) {
    throw new Error("Can't fetch data");
  }
  let data = await response.json();
  table.replaceChildren();

  Object.values(data).forEach((r) => {
    let tr = createElement("tr", "", table);
    createElement("td", `${r.firstName}`, tr);
    createElement("td", `${r.lastName}`, tr);
    createElement("td", `${r.facultyNumber}`, tr);
    createElement("td", `${r.grade}`, tr);
  });
}

// 'li', 'hello' => li tag + textNode.textContent = hello, li.appendChild(textNode)
// 'ul', HTMLelement li tag => ul tag => ul.appendChild(HTMLelement)
// function createElement(type, ...content) {
//   let element = document.createElement(type);

//   content.forEach((c) => {
//     if (typeof c == "number" || typeof c == "string") {
//       c = document.createTextNode(c);
//     }
//     element.appendChild(c);
//   });
//   return element;
// }

function createElement(type, content, parent) {
  let element = document.createElement(type);
  element.textContent = content;
  if (parent) {
    parent.appendChild(element);
  }
  return element;
}
