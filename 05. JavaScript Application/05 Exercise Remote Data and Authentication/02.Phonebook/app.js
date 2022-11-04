function attachEvents() {
  document.querySelector("#btnLoad").addEventListener("click", load);
  document.querySelector("#btnCreate").addEventListener("click", create);
  document.querySelector("#phonebook").addEventListener("click", remove);
}

let url = "http://localhost:3030/jsonstore/phonebook";
let phonebook = document.querySelector("#phonebook");
let firstName = document.querySelector("#person");
let number = document.querySelector("#phone");

async function create() {
  if (!firstName.value || !number.value) {
    return;
  }
  let info = {
    person: firstName.value.trim(),
    phone: number.value.trim(),
  };

  let response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(info),
  });

  let data = await response.json();

  load();
  firstName.value = "";
  number.value = "";
}

async function load() {
  let response = await fetch(url);
  let data = await response.json();
  phonebook.replaceChildren();

  Object.values(data).forEach((p) => {
    let liElement = document.createElement("li");
    liElement.textContent = `${p.person}: ${p.phone}`;
    let buttonDelete = document.createElement("button");
    buttonDelete.textContent = "Delete";
    buttonDelete.id = p._id;
    // buttonDelete.setAttribute('id', p._id)
    liElement.appendChild(buttonDelete);
    phonebook.appendChild(liElement);
  });
}

async function remove(e) {
  let currId = e.target.id;
  if (e.target.textContent == "Delete") {
    let response = await fetch(`${url}/${currId}`, {
      method: "DELETE",
    });
    let data = await response.json();

    try {
      load();
      return data;
    } catch (error) {
      alert(error.message);
    }
  }
}

/////-------------------62%--------------------
//1.get all buttons from page
//2. attach event listener
//3. create load function -> fetch all data from server
//4. display loadet data
//5. create newRecord func -> get data from inputs and call server
//6. implement delete function

// function attachEvents() {
//   document.querySelector("#btnLoad").addEventListener("click", load);
//   document.querySelector("#btnCreate").addEventListener("click", create);
//   document.querySelector("#phonebook").addEventListener("click", remove);
// }

// let url = "http://localhost:3030/jsonstore/phonebook";
// let phonebook = document.querySelector("#phonebook");
// let firstName = document.querySelector("#person");
// let number = document.querySelector("#phone");

// function create() {
//   if (!firstName.value || !number.value) {
//     return;
//   }

//   fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify({
//       person: firstName.value.trim(),
//       phone: number.value.trim(),
//     }),
//   })
//     .then((res) => res.json())
//     .catch((err) => alert(err.message));

//   load();
//   firstName.value = "";
//   number.value = "";
// }

// function load() {
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       phonebook.replaceChildren();

//       Object.values(data).forEach((p) => {
//         let liElement = document.createElement("li");
//         liElement.textContent = `${p.person}: ${p.phone}`;
//         let buttonDelete = document.createElement("button");
//         buttonDelete.textContent = "Delete";
//         buttonDelete.id = p._id;
//         // buttonDelete.setAttribute('id', p._id)
//         liElement.appendChild(buttonDelete);
//         phonebook.appendChild(liElement);
//       });
//     });
// }

// function remove(e) {
//   let currId = e.target.id;
//   if (e.target.textContent == "Delete") {
//     fetch(`${url}/${currId}`, {
//       method: "DELETE",
//     })
//       .then((res) => {
//         load();
//         return res.json();
//       })
//       .catch((err) => alert(err.message));
//   }
// }

attachEvents();
