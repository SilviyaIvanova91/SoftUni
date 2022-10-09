function computerStore(arr) {
  let sum = 0;
  let sumWithTaxes = 0;
  let taxes = 0;

  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    if (word != "special" && word != "regular") {
      let num = Number(word);
      if (num < 0) {
        console.log(`Invalid price!`);
        continue;
      }
      sum += num;
    } else if (word == "special") {
      taxes = sum * 0.2;
      sumWithTaxes = (sum + taxes) * 0.9;
    } else if (word == "regular") {
      taxes = sum * 0.2;
      sumWithTaxes = sum + taxes;
    }
  }
  if (sum == 0) {
    console.log(`Invalid order!`);
  } else {
    console.log(`Congratulations you've just bought a new computer!`);
    console.log(`Price without taxes: ${sum.toFixed(2)}$`);
    console.log(`Taxes: ${taxes.toFixed(2)}$`);
    console.log(`-----------`);
    console.log(`Total price: ${sumWithTaxes.toFixed(2)}$`);
  }
}

computerStore(["1050", "200", "450", "2", "18.50", "16.86", "special"]);
computerStore([
  "1023",
  "15",
  "-20",
  "-5.50",
  "450",
  "20",
  "17.66",
  "19.30",
  "regular",
]);
computerStore(["regular"]);

//-------------------------------------------------
// function computerStore(data) {
//   let index = 0;
//   let comand = data[index];
//   index++;
//   let price = 0;

//   while (comand != "regular") {
//     if (comand == "special") {
//       break;
//     }

//     let partPrice = Number(comand);
//     if (partPrice < 0) {
//       console.log(`Invalid price!`);
//       comand = data[index];
//       index++;
//       continue;
//     }
//     price += partPrice;
//     comand = data[index];
//     index++;
//   }
//   let taxes = price * 1.2 - price;
//   let totalPrice = price + taxes;
//   if (comand == "special") {
//     totalPrice *= 0.9;
//   }
//   if (totalPrice == 0) {
//     console.log(`Invalid order!`);
//   } else {
//     console.log(
//       `Congratulations you've just bought a new computer!\n` +
//         `Price without taxes: ${price.toFixed(2)}$\n` +
//         `Taxes: ${taxes.toFixed(2)}$\n` +
//         `-----------\n` +
//         `Total price: ${totalPrice.toFixed(2)}$`
//     );
//   }
// }
