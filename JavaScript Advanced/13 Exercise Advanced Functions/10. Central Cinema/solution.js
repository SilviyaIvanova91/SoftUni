function solve() {
  let [btnOnScreen, btnClear] = document.querySelectorAll("button");
  btnOnScreen.addEventListener("click", onScreen);
  btnClear.addEventListener("click", clearBtn);

  let [name, hall, price] = document.querySelectorAll("input");
  let [movieList, archiveList] = Array.from(
    document.querySelectorAll("section")
  ).map((e) => e.children[1]);

  function onScreen(event) {
    event.preventDefault();
    let priceVal = Number(price.value);

    if (name.value && hall.value && priceVal) {
      let li = document.createElement("li");
      movieList.appendChild(li);
      let spanOnMovie = createElement("span", name.value);
      li.appendChild(spanOnMovie);
      let strongOnMovie = createElement("strong", `Hall: ${hall.value}`);
      li.appendChild(strongOnMovie);

      let div = createElement("div");
      li.appendChild(div);
      div.appendChild(createElement("strong", priceVal.toFixed(2)));
      let input = createElement("input");
      input.placeholder = "Tickets Sold";
      div.appendChild(input);

      let archiveBtn = div.appendChild(createElement("button", "Archive"));
      li.appendChild(div);
      archiveBtn.addEventListener("click", archiveButton);

      [name.value, hall.value, price.value] = ["", "", ""];

      function archiveButton() {
        let ticketSold = Number(input.value);
        if (input.value === "" || Number.isNaN(ticketSold)) return;

        archiveList.appendChild(li);
        strongOnMovie.remove();
        div.remove();

        li.appendChild(
          createElement(
            "strong",
            `Total amount: ${(priceVal * ticketSold).toFixed(2)}`
          )
        );
        let deleteBtn = createElement("button", "Delete");
        li.appendChild(deleteBtn);
        deleteBtn.addEventListener("click", () => li.remove());
      }
    }
  }

  function createElement(type, content) {
    let element = document.createElement(type);
    if (content) {
      element.textContent = content;
    }
    return element;
  }

  function clearBtn() {
    Array.from(archiveList.children).forEach((li) => li.remove());
  }
}

//----------------------------------------------------------
// function solve() {
//   let name = document.querySelector("#container input:nth-of-type(1)");
//   let hall = document.querySelector("#container input:nth-of-type(2)");
//   let price = document.querySelector("#container input:nth-of-type(3)");
//   let btnOnScreen = document.querySelector("#container button");

//   let ulMoviesElement = document.querySelector("#movies > ul");
//   let ulArchiveElement = document.querySelector("#archive > ul");

//   let buttonClearElement = document.querySelector("#archive > button");

//   btnOnScreen.addEventListener("click", (e) => {
//     e.preventDefault();

//     if (name.value == "" || hall.value == "" || price.value === "") {
//       return;
//     }

//     let liElement = document.createElement("li");
//     let spanElement = document.createElement("span");
//     spanElement.textContent = name.value;
//     let strongElement = document.createElement("strong");
//     strongElement.textContent = `Hall: ${hall.value}`;

//     liElement.appendChild(spanElement);
//     liElement.appendChild(strongElement);
//     ulMoviesElement.appendChild(liElement);

//     let divElement = document.createElement("div");
//     let strongPriceElement = document.createElement("strong");
//     strongPriceElement.textContent = Number(price.value).toFixed(2);
//     let inputPriceElement = document.createElement("input");
//     inputPriceElement.setAttribute("placeholder", "TicketsSold");
//     let buttonArchive = document.createElement("button");
//     buttonArchive.textContent = "Archive";

//     divElement.appendChild(strongPriceElement);
//     divElement.appendChild(inputPriceElement);
//     divElement.appendChild(buttonArchive);

//     liElement.appendChild(divElement);

//     name.value = "";
//     hall.value = "";
//     price.value = "";

//     buttonArchive.addEventListener("click", (e) => {
//       e.preventDefault();

//       if (!Number(inputPriceElement.value)) {
//         return;
//       }

//       let currentPrice =
//         Number(inputPriceElement.value) *
//         Number(strongPriceElement.textContent);

//       let liArchiveElement = document.createElement("li");
//       let spanArchiveElement = document.createElement("span");
//       spanArchiveElement.textContent =
//         e.currentTarget.parentElement.parentElement.firstChild.textContent;
//       let strongArchiveElement = document.createElement("strong");
//       strongArchiveElement.textContent = `Total amount: ${Number(
//         currentPrice
//       ).toFixed(2)}`;
//       let buttonDeleteElement = document.createElement("button");
//       buttonDeleteElement.textContent = "Delete";

//       liArchiveElement.appendChild(spanArchiveElement);
//       liArchiveElement.appendChild(strongArchiveElement);
//       liArchiveElement.appendChild(buttonDeleteElement);

//       ulArchiveElement.appendChild(liArchiveElement);

//       e.currentTarget.parentElement.parentElement.remove();

//       buttonDeleteElement.addEventListener("click", (e) => {
//         e.preventDefault();

//         e.currentTarget.parentElement.remove();
//       });

//       buttonClearElement.addEventListener("click", (e) => {
//         e.preventDefault();

//         let li = e.currentTarget.parentElement.children[1].children;

//         for (const el of li) {
//           el.remove();
//         }
//       });
//     });
//   });
// }

//-----------------------------------------------------------
//   let [btnOnScreen] = document.querySelector("#container button");
//   btnOnScreen.addEventListener("click", onScreen);
//   let btnClear = document.querySelector("#archive button");
//   btnClear.addEventListener("click", clearBtn);
//   let [name, hall, price] = Array.from(
//     document.querySelectorAll("#container input")
//   );
//   let movieList = document.querySelector("#movies ul");
//   let archiveList = document.querySelector("#archive ul");

//----------------------------------------------------------------------
//---------------------------------------------------------------------
// function solve() {
//   const [onScreenBtn, clearBtn] = document.querySelectorAll("button");
//   const [name, hall, price] = document.querySelectorAll("input");
//   const [moviesList, archiveList] = Array.from(
//     document.querySelectorAll("section")
//   ).map((e) => e.children[1]);

//   onScreenBtn.addEventListener("click", onScreen);
//   clearBtn.addEventListener("click", clear);

//   function onScreen(ev) {
//     ev.preventDefault();
//     const numberPrice = Number(price.value);

//     if (name.value && hall.value && numberPrice) {
//       const li = document.createElement("li");
//       moviesList.appendChild(li);

//       li.appendChild(createElement("span", name.value));
//       const hallElement = createElement("strong", `Hall: ${hall.value}`);
//       li.appendChild(hallElement);

//       const div = li.appendChild(createElement("div"));
//       div.appendChild(createElement("strong", numberPrice.toFixed(2)));

//       const input = createElement("input");
//       input.placeholder = "Tickets Sold";
//       div.appendChild(input);

//       const archiveBtn = div.appendChild(createElement("button", "Archive"));
//       li.appendChild(div);
//       archiveBtn.addEventListener("click", archive);

//       [name.value, hall.value, price.value] = ["", "", ""];

//       function archive() {
//         const soldTickets = Number(input.value);

//         if (input.value === "" || Number.isNaN(soldTickets)) return;

//         archiveList.appendChild(li);
//         hallElement.remove();
//         div.remove();

//         li.appendChild(
//           createElement(
//             "strong",
//             `Total amount: ${(numberPrice * soldTickets).toFixed(2)}`
//           )
//         );
//         const deleteBtn = createElement("button", "Delete");
//         li.appendChild(deleteBtn);
//         deleteBtn.addEventListener("click", () => li.remove());
//       }
//     }
//   }

//   function createElement(type, content) {
//     const element = document.createElement(type);
//     if (content) {
//       element.textContent = content;
//     }
//     return element;
//   }

//   function clear() {
//     Array.from(archiveList.children).forEach((li) => li.remove());
//   }
// }
