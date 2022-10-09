function storeCatalogue(input) {
  let obj = {};
  for (let line of input) {
    let [product, price] = line.split(" : ");
    price = Number(price);
    obj[product] = price;
  }
  let sorted = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]));
  let alpha = "";
  for (let [product, price] of sorted) {
    if (alpha != product[0]) {
      console.log(product[0]);
      alpha = product[0];
    }
    console.log(` ${product}: ${price}`);
  }
}

storeCatalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
storeCatalogue([
  "Banana : 2",
  "Rubics Cube : 5",
  "Raspberry P : 4999",
  "Rolex : 100000",
  "Rollon : 10",
  "Rali Car : 2000000",
  "Pesho : 0.000001",
  "Barrel : 10",
]);

//----------------------------------
// function storeCatalogue(input) {
//   let obj = {};
//   for (let line of input) {
//     let [product, price] = line.split(" : ");
//     let letter = product[0];

//     if (!obj.hasOwnProperty(letter)) {
//       obj[letter] = {};
//     }
//     obj[letter][product] = price;
//   }
//   let sorted = Object.keys(obj).sort((a, b) => a.localeCompare(b));
//   for (let letter of sorted) {
//     console.log(letter);
//     let sortedProduct = Object.keys(obj[letter]).sort((a, b) =>
//       a.localeCompare(b)
//     );
//     for (let product of sortedProduct) {
//       console.log(` ${product}: ${obj[letter][product]}`);
//     }
//   }
// }
