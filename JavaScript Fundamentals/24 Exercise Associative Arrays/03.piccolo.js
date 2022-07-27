function piccolo(input) {
  let parking = new Set();
  for (let line of input) {
    let [command, number] = line.split(", ");
    if (command == "IN") {
      parking.add(number);
    } else if (command === "OUT") {
      parking.delete(number);
    }
  }
  if (parking.size == 0) {
    console.log(`Parking Lot is Empty`);
  } else {
    let res = Array.from(parking);
    res.sort();
    for (let car of res) {
      console.log(car);
    }
  }
}

piccolo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
piccolo(["IN, CA2844AA", "IN, CA1234TA", "OUT, CA2844AA", "OUT, CA1234TA"]);

//////--------решение с Map()---------
// function piccolo(input) {
//   let parking = new Map();
//   for (let line of input) {
//     let [command, number] = line.split(", ");
//     if (command == "IN") {
//       parking.set(number, 1);
//     } else if (command === "OUT") {
//       parking.delete(number);
//     }
//   }
//   if (parking.size == 0) {
//     console.log(`Parking Lot is Empty`);
//   } else {
//     let res = Array.from(parking.keys());
//     res.sort();
//     for (let car of res) {
//       console.log(car);
//     }
//   }
// }
