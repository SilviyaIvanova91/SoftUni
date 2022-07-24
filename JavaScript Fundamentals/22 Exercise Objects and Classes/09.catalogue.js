function catalogue(input) {
  let sortedInput = input.sort((a, b) => a.localeCompare(b));
  let alphabetical = "";
  for (let el of sortedInput) {
    let line = el.split(" : ");
    let product = line[0];
    let price = line[1];
    if (alphabetical != product[0]) {
      alphabetical = product[0];
      console.log(alphabetical);
    }
    console.log(` ${product}: ${price}`);
  }
}

catalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
catalogue(["Omlet : 5.4", "Shirt : 15", "Cake : 59"]);

//-------------------------------------
// function catalogue(array) {
//   let catalogue = [];
//   for (let i = 0; i < array.length; i++) {
//     let elements = array[i].split(" : ");
//     let product = {
//       name: elements[0],
//       price: parseFloat(elements[1]),
//     };
//     catalogue.push(product);
//   }
//   catalogue.sort((a, b) => a.name.localeCompare(b.name));

//   let currentLetter = "";
//   for (const product of catalogue) {
//     if (product.name.charAt(0) === currentLetter) {
//       console.log(`  ${product.name}: ${product.price}`);
//     } else {
//       currentLetter = product.name.charAt(0);
//       console.log(currentLetter);
//       console.log(`  ${product.name}: ${product.price}`);
//     }
//   }
// }
