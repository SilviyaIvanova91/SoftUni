window.addEventListener("load", solve);

function solve() {
  let typrProductFiled = document.getElementById("type-product");
  let descriptionFild = document.getElementById("description");
  let clientNameFiled = document.getElementById("client-name");
  let clientPhoneField = document.getElementById("client-phone");

  let sectionRecover = document.getElementById("received-orders");
  let completeOrderSection = document.getElementById("completed-orders");

  let btnSend = document.querySelector("[type='submit']");
  btnSend.addEventListener("click", (ev) => {
    ev.preventDefault();

    if (
      descriptionFild.value === "" ||
      clientNameFiled.value === "" ||
      clientPhoneField.value === ""
    ) {
      return;
    }

    let div = document.createElement("div");
    div.className = "container";

    let titleTwo = document.createElement("h2");
    titleTwo.textContent = `Product type for repair: ${typrProductFiled.value}`;
    div.appendChild(titleTwo);

    let titleThird = document.createElement("h3");
    titleThird.textContent = `Client information: ${clientNameFiled.value}, ${clientPhoneField.value}`;
    div.appendChild(titleThird);

    let titleFourth = document.createElement("h4");
    titleFourth.textContent = `Description of the problem: ${descriptionFild.value}`;
    div.appendChild(titleFourth);

    let btnStart = document.createElement("button");
    btnStart.className = "start-btn";
    btnStart.textContent = `Start repair`;
    div.appendChild(btnStart);

    let btnFinish = document.createElement("button");
    btnFinish.className = "finish-btn";
    btnFinish.textContent = `Finish repair`;
    btnFinish.setAttribute("disabled", "");
    div.appendChild(btnFinish);

    sectionRecover.appendChild(div);

    descriptionFild.value = "";
    clientNameFiled.value = "";
    clientPhoneField.value = "";

    btnStart.addEventListener("click", (ev) => {
      btnFinish.removeAttribute("disabled");
      btnStart.setAttribute("disabled", "");
    });

    btnFinish.addEventListener("click", (ev) => {
      completeOrderSection.appendChild(div);
      btnFinish.remove();
      btnStart.remove();
      sectionRecover.removeChild(div);
    });

    let clearBtn = document.getElementsByClassName("clear-btn")[0];
    clearBtn.addEventListener("click", (ev) => {
      let allDiv = Array.from(completeOrderSection.querySelectorAll("div"));
      allDiv.forEach((div) => div.remove());
    });
  });
}
