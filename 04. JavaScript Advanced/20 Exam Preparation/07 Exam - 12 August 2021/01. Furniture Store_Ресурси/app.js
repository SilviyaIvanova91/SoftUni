window.addEventListener("load", solve);

function solve() {
  let model = document.getElementById("model");
  let year = document.getElementById("year");
  let description = document.getElementById("description");
  let price = document.getElementById("price");

  let totalPrice = document.querySelector(".total-price");

  let btnAdd = document.getElementById("add");
  btnAdd.addEventListener("click", (ev) => {
    ev.preventDefault();

    if (
      !model.value ||
      !description.value ||
      !year.value ||
      Number(year.value) < 0 ||
      !price.value ||
      Number(price.value) < 0
    ) {
      return;
    }

    let tBody = document.getElementById("furniture-list");

    let trInfo = createElements("tr", "", "info");
    tBody.appendChild(trInfo);

    let tdModel = createElements("td", `${model.value}`);
    trInfo.appendChild(tdModel);

    let tdPrice = createElements("td", `${Number(price.value).toFixed(2)}`);
    trInfo.appendChild(tdPrice);

    let tdBtns = createElements("td");
    trInfo.appendChild(tdBtns);

    let btnMore = createElements("button", "More Info", "moreBtn");
    tdBtns.appendChild(btnMore);

    let btnBuy = createElements("button", "Buy it", "buyBtn");
    tdBtns.appendChild(btnBuy);

    btnMore.addEventListener("click", () => {
      if (btnMore.textContent === "More Info") {
        btnMore.textContent = "Less Info";
        trClass.style = "display: contents";
      } else if (btnMore.textContent == "Less Info") {
        btnMore.textContent = "More Info";
        trClass.style = "display: none";
      }
    });

    btnBuy.addEventListener("click", () => {
      totalPrice.textContent = (
        Number(totalPrice.textContent) + Number(tdPrice.textContent)
      ).toFixed(2);
      trInfo.remove();
    });

    let trClass = createElements("tr", "", "hide");
    tBody.appendChild(trClass);
    trClass.style = "display: none";

    let tdYear = createElements("td", `Year: ${year.value}`);

    trClass.appendChild(tdYear);

    let tdDescr = createElements("td", `Description: ${description.value}`);
    tdDescr.colSpan = "3";
    trClass.appendChild(tdDescr);

    model.value = "";
    year.value = "";
    description.value = "";
    price.value = "";
  });

  function createElements(type, text, classEl) {
    let el = document.createElement(type);
    el.textContent = text;
    if (classEl) {
      el.className = classEl;
    }
    return el;
  }
}
