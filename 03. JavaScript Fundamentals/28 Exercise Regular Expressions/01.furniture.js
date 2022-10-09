function furniture(input) {
  let totalSum = 0;
  let command = input.shift();
  console.log(`Bought furniture:`);
  while (command !== "Purchase") {
    // let pattern =
    //   />>(?<name>[A-Za-z\s]+)<<(?<price>\d+(.\d+)?)!(?<quantity>\d+)/gm;
    let pattern =
      /[>]{2}(?<furniture>[A-Z][A-z]+)[<]{2}(?<price>[\d.]+)!(?<quantity>\d+)/;
    let res = pattern.exec(command);
    if (res != null) {
      totalSum += Number(res.groups.price) * Number(res.groups.quantity);
      console.log(res.groups.name);
    }
    command = input.shift();
  }
  console.log(`Total money spend: ${totalSum.toFixed(2)}`);
}

furniture([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);
furniture([
  ">>Laptop<<312.2323!3",
  ">>TV<<300.21314!5",
  ">Invalid<<!5",
  ">>TV<<300.21314!20",
  ">>Invalid<!5",
  ">>TV<<30.21314!5",
  ">>Invalid<<!!5",
  "Purchase",
]);
furniture([">Invalid<<!4", ">Invalid<<!2", ">Invalid<<!5", "Purchase"]);

// function furniture(input) {
//   let text = input.join(" ");
//   let furnitureArr = [];
//   let totalSum = 0;

//   let pattern =
//     /[>]{2}(?<furniture>[A-Z][A-z]+)[<]{2}(?<price>[\d.]+)!(?<quantity>\d+)/gm;
//   let valid;
//   while ((valid = pattern.exec(text)) != null) {
//     let validName = valid.groups["furniture"];
//     let validPrice = Number(valid.groups["price"]);
//     let validQuantity = Number(valid.groups["quantity"]);

//     furnitureArr.push(validName);
//     totalSum += validPrice * validQuantity;
//   }
//   console.log(`Bought furniture:`);
//   furnitureArr.forEach((el) => console.log(el));

//   console.log(`Total money spend: ${totalSum.toFixed(2)}`);
// }

//------------------------------------------------
// function furniture(input) {
//   let totalSum = 0;
//   console.log(`Bought furniture:`);
//   for (let line of input) {
//     if (line === "Purchase") {
//       break;
//     }
//     let pattern =
//       />>(?<name>[A-Za-z\s]+)<<(?<price>\d+(.\d+)?)!(?<quantity>\d+)/gm;
//     let res = pattern.exec(line);
//     if (res != null) {
//       totalSum += Number(res.groups.price) * Number(res.groups.quantity);
//       console.log(res.groups.name);
//     }
//   }
//   console.log(`Total money spend: ${totalSum.toFixed(2)}`);
// }
