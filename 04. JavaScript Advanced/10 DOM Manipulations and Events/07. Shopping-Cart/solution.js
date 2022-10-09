function solve() {
  let product = document.getElementsByClassName("shopping-cart")[0];
  let checkkOut = document.getElementsByClassName("checkout")[0];
  let textArea = document.getElementsByTagName("textarea")[0];
  textArea.value = "";
  let cart = {
    products: new Set(),
    totalP: 0,
  };

  product.addEventListener("click", onClick);
  checkkOut.addEventListener("click", checkOut);

  function onClick(event) {
    if (event.target.tagName == "BUTTON") {
      let product = event.target.parentElement.parentElement;
      let name = product.children[1].children[0].textContent;
      let price = Number(product.children[3].textContent);

      cart.products.add(name);
      cart.totalP += price;

      textArea.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
    }
  }

  function checkOut() {
    textArea.value += `You bought ${[...cart.products].join(
      ", "
    )} for ${cart.totalP.toFixed(2)}.`;

    product.removeEventListener("click", onClick);
    checkkOut.removeEventListener("click", checkOut);
  }
}

//---------------------------------------------
// function solve() {
//   document
//     .getElementsByClassName("shopping-cart")[0]
//     .addEventListener("click", onClick);
//   document
//     .getElementsByClassName("checkout")[0]
//     .addEventListener("click", checkOut);
//   let cart = [];
//   let output = document.getElementsByTagName("textarea")[0];
//   output.value = "";

//   function onClick(event) {
//     if (
//       event.target.tagName == "BUTTON" &&
//       event.target.classList.contains("add-product")
//     ) {
//       let product = event.target.parentNode.parentNode;
//       let name = product.querySelector(".product-title").textContent;
//       let price = Number(
//         product.querySelector(".product-line-price").textContent
//       );

//       cart.push({
//         name,
//         price,
//       });

//       output.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
//     }
//   }

//   function checkOut() {
//     let products = new Set();
//     cart.forEach((p) => products.add(p.name));

//     let total = cart.reduce((a, b) => a + b.price, 0);
//     output.value += `You bought ${[...products.keys()].join(
//       ", "
//     )} for ${total.toFixed(2)}.`;
//   }
// }
