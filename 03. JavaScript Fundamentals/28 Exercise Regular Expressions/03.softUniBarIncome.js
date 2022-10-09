function softUniBarIncome(input) {
  let totalIn = 0;
  let command = input.shift();
  while (command != "end of shift") {
    let pattern =
      /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>[\w]+)>[^|$%.]*\|(?<quantity>[\d]+)\|[^|$%.]*?(?<price>[\d]+(.[\d]+)?)?\$/gm;
    let match = pattern.exec(command);
    if (match != null) {
      let sum = Number(match.groups.quantity) * Number(match.groups.price);
      console.log(
        `${match.groups.customer}: ${match.groups.product} - ${sum.toFixed(2)}`
      );
      totalIn += sum;
    }
    command = input.shift();
  }
  console.log(`Total income: ${totalIn.toFixed(2)}`);
}

softUniBarIncome([
  "%George%<Croissant>|2|10.3$",
  "%Peter%<Gum>|1|1.3$",
  "%Maria%<Cola>|1|2.4$",
  "end of shift",
]);
softUniBarIncome([
  "%InvalidName%<Croissant>|2|10.3$",
  "%Peter%<Gum>1.3$",
  "%Maria%<Cola>|1|2.4",
  "%Valid%<Valid>valid|10|valid20$",
  "end of shift",
]);

// function softUniBarIncome(input) {
//   let totalSum = 0;
//   let regExp =
//     /%(?<name>[A-Z][a-z]+)%[^$%|.]*\<(?<product>\w+)\>[^$%|.]*\|(?<count>\d+)\|[^$%|.]*?(?<price>\d+(\.\d+)?)?\$/gm;
//   // let pattern =
//   //   /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>[\w]+)>[^|$%.]*\|(?<quantity>[\d]+)\|[^|$%.]*?(?<price>[\d]+(.[\d]+)?)?\$/gm;
//   let text = input.join("-");
//   let curr = regExp.exec(text);
//   while (curr) {
//     let currPrice = curr.groups.count * curr.groups.price;
//     console.log(
//       `${curr.groups.name}: ${curr.groups.product} - ${currPrice.toFixed(2)}`
//     );
//     totalSum += currPrice;
//     curr = regExp.exec(text);
//   }

//   console.log(`Total income: ${totalSum.toFixed(2)}`);
// }
//----------------------------------------------
// function softUniBarIncome(input) {
//   let totalIn = 0;
//   for (let line of input) {
//     let pattern =
//       /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>[\w]+)>[^|$%.]*\|(?<quantity>[\d]+)\|[^|$%.]*?(?<price>[\d]+(.[\d]+)?)?\$/gm;
//     let match = pattern.exec(line);
//     if (match != null) {
//       let sum = Number(match.groups.quantity) * Number(match.groups.price);
//       console.log(
//         `${match.groups.customer}: ${match.groups.product} - ${sum.toFixed(2)}`
//       );
//       totalIn += sum;
//     } else if (line == "end of shift") {
//       console.log(`Total income: ${totalIn.toFixed(2)}`);
//     }
//   }
// }
