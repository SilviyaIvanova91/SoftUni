window.addEventListener("load", solve);

function solve() {
  let makeInput = document.getElementById("make");
  let modelInput = document.getElementById("model");
  let yearInput = document.getElementById("year");
  let fuelInput = document.getElementById("fuel");
  let originalCostInput = document.getElementById("original-cost");
  let sellingPriceInput = document.getElementById("selling-price");

  let btnPublish = document.getElementById("publish");

  let profit = 0;
  let profitFinal = document.getElementById("profit");

  btnPublish.addEventListener("click", (ev) => {
    ev.preventDefault();

    if (
      makeInput.value == "" ||
      modelInput.value == "" ||
      yearInput.value == "" ||
      fuelInput.value == "" ||
      originalCostInput.value == "" ||
      sellingPriceInput.value == ""
    ) {
      return;
    }
    if (Number(originalCostInput.value) > Number(sellingPriceInput.value)) {
      return;
    }

    let tBody = document.getElementById("table-body");
    let tr = document.createElement("tr");
    tr.className = "row";
    tBody.appendChild(tr);

    let tdMake = document.createElement("td");
    tdMake.textContent = `${makeInput.value}`;
    tr.appendChild(tdMake);

    let tdModel = document.createElement("td");
    tdModel.textContent = `${modelInput.value}`;
    tr.appendChild(tdModel);

    let tdYear = document.createElement("td");
    tdYear.textContent = `${yearInput.value}`;
    tr.appendChild(tdYear);

    let tdFuel = document.createElement("td");
    tdFuel.textContent = `${fuelInput.value}`;
    tr.appendChild(tdFuel);

    let tdOriginalCost = document.createElement("td");
    tdOriginalCost.textContent = `${originalCostInput.value}`;
    tr.appendChild(tdOriginalCost);

    let tdSellingPrice = document.createElement("td");
    tdSellingPrice.textContent = `${sellingPriceInput.value}`;
    tr.appendChild(tdSellingPrice);

    let tdBtns = document.createElement("td");
    tr.appendChild(tdBtns);

    let btnEdit = document.createElement("button");
    btnEdit.className = "action-btn edit";
    btnEdit.textContent = "Edit";
    tdBtns.appendChild(btnEdit);

    let btnSell = document.createElement("button");
    btnSell.className = "action-btn sell";
    btnSell.textContent = "Sell";
    tdBtns.appendChild(btnSell);

    makeInput.value = "";
    modelInput.value = "";
    yearInput.value = "";
    fuelInput.value = "";
    originalCostInput.value = "";
    sellingPriceInput.value = "";

    btnEdit.addEventListener("click", (ev) => {
      makeInput.value = tdMake.textContent;
      modelInput.value = tdModel.textContent;
      yearInput.value = tdYear.textContent;
      fuelInput.value = tdFuel.textContent;
      originalCostInput.value = tdOriginalCost.textContent;
      sellingPriceInput.value = tdSellingPrice.textContent;

      tr.remove();
    });

    btnSell.addEventListener("click", (ev) => {
      let ul = document.getElementById("cars-list");

      let li = document.createElement("li");
      li.className = "each-list";
      ul.appendChild(li);

      let spanModel = document.createElement("span");
      spanModel.textContent = `${tdMake.textContent} ${tdModel.textContent}`;
      li.appendChild(spanModel);

      let spanYear = document.createElement("span");
      spanYear.textContent = `${tdYear.textContent}`;
      li.appendChild(spanYear);

      let spanDiff = document.createElement("span");
      let diff =
        Number(tdSellingPrice.textContent) - Number(tdOriginalCost.textContent);
      spanDiff.textContent = diff;
      li.appendChild(spanDiff);

      tr.remove();

      profit += Number(diff);
      profitFinal.textContent = profit.toFixed(2);
    });
  });
}
