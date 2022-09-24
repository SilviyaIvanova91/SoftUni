function solve() {
  let [genereteBtn, buyBtn] = Array.from(document.querySelectorAll("button"));
  genereteBtn.addEventListener("click", generate);
  buyBtn.addEventListener("click", buy);

  function generate(el) {
    let input = JSON.parse(document.querySelector("textarea").value);
    input.forEach((x) => {
      let tr = document.createElement("tr");

      let td1 = document.createElement("td");
      let img = document.createElement("img");
      img.src = x.img;
      td1.appendChild(img);
      tr.appendChild(td1);

      let td2 = document.createElement("td");
      let p = document.createElement("p");
      p.textContent = x.name;
      td2.appendChild(p);
      tr.appendChild(td2);

      let td3 = document.createElement("td");
      let p2 = document.createElement("p");
      p2.textContent = Number(x.price);
      td3.appendChild(p2);
      tr.appendChild(td3);

      let td4 = document.createElement("td");
      let p3 = document.createElement("p");
      p3.textContent = Number(x.decFactor);
      td4.appendChild(p3);
      tr.appendChild(td4);

      let td5 = document.createElement("td");
      let input = document.createElement("input");
      input.type = "checkbox";
      td5.appendChild(input);
      tr.appendChild(td5);

      document.querySelector("tbody").appendChild(tr);
    });
  }

  function buy(el) {
    let checkBoxes = Array.from(document.querySelectorAll("input")).filter(
      (c) => c.checked
    );
    let bought = [];
    let price = 0;
    let decoration = 0;

    checkBoxes.forEach((x) => {
      let parent = x.parentElement.parentElement;
      let data = Array.from(parent.querySelectorAll("p"));
      bought.push(data[0].textContent);
      price += Number(data[1].textContent);
      decoration += Number(data[2].textContent);
    });
    let outpiut = document.querySelectorAll("textarea")[1];
    outpiut.textContent += `Bought furniture: ${bought.join(", ")}\r\n`;
    outpiut.textContent += `Total price: ${price.toFixed(2)}\r\n`;
    outpiut.textContent += `Average decoration factor: ${
      decoration / checkBoxes.length
    }`;
  }
}

//---------------------------------------------
// function solve() {
//   let [generateBtn, buyBtn] = Array.from(document.querySelectorAll("button"));
//   let [input, output] = Array.from(document.querySelectorAll("textarea"));
//   let tbody = document.querySelector("tbody");

//   generateBtn.addEventListener("click", generate);

//   let items = [];

//   //parse input JSON and create table
//   // -- find input textarea
//   //-- parse JSON
//   //-- for every item
//   //-------- create row
//   //-------- append row to table body
//   function generate() {
//     let data = JSON.parse(input.value);

//     for (const item of data) {
//       let row = document.createElement("tr");

//       row.appendChild(createColumn("img", item.img)); // Image column
//       row.appendChild(createColumn("p", item.name)); // Name column
//       row.appendChild(createColumn("p", item.price)); //Price column
//       row.appendChild(createColumn("p", item.decFactor)); // Decoration column

//       // Input column
//       let checkbox = document.createElement("input");
//       checkbox.type = "checkbox";
//       c5.appendChild(checkbox);
//       row.appendChild(c5);

//       tbody.appendChild(row);

//       items.push({
//         ...item,
//         isChecked,
//       });
//       function isChecked() {
//         return checkbox.checked;
//       }
//     }
//   }

//   //find user choises and summarize purchase
//   //-- find all checked boxes
//   //-- for every box
//   //----- read data from parent row
//   //----- append to result
//   //-- output result to textarea
//   function buy() {
//     let list = [];
//     let total = 0;
//     let decoration = 0;

//     let bought = items.filter((i) => i.isChecked());
//     for (const item of bought) {
//       list.push(item.name);
//       total += Number(item.price);
//       decoration += Number(item.decFactor);
//     }
//     decoration /= bought.length;

//     output.value = [
//       `Bought furniture: ${list.join(", ")}`,
//       `Total price: ${total.toFixed(2)}`,
//       `Average decoration factor: ${decoration}`,
//     ].join("\n");
//   }

//   function createColumn(type, content) {
//     let result = document.createElement("td");
//     let inner;
//     if (type == "img") {
//       inner = document.createElement("img");
//       inner.src = content;
//     } else {
//       inner = document.createElement("p");
//       inner.textContent = content;
//     }
//     result.appendChild(inner);
//     return result;
//   }
// }
