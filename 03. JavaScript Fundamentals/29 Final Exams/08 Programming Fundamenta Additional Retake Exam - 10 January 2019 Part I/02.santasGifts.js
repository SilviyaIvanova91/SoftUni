function santasGifts(input) {
  let numCommand = Number(input.shift());
  let houses = input.shift().split(" ");
  let count = 0;
  for (let i = 0; i < numCommand; i++) {
    let [command, step, value] = input.shift().split(" ");
    if (command == "Forward") {
      let index = Number(step) + count;
      if (index >= 0 && index < houses.length) {
        let deleted = houses.splice(index, 1);
        count = index;
      }
    } else if (command == "Back") {
      let index = count - Number(step);
      if (houses[index]) {
        let deleted = houses.splice(index, 1);
        count = index;
      }
    } else if (command == "Gift") {
      if (houses[Number(step)]) {
        houses.splice(step, 0, value);
        count = Number(step);
      }
    } else if (command == "Swap") {
      let firstI = houses.indexOf(step);
      let secI = houses.indexOf(value);
      if (houses[firstI] && houses[secI]) {
        let a = houses[firstI];
        houses[firstI] = houses[secI];
        houses[secI] = a;
      }
    }
  }
  console.log(`Position: ${count}`);
  console.log(houses.join(", "));
}

santasGifts([
  "5",
  "255 500 54 78 98 24 30 47 69 58",
  "Forward 1",
  "Swap 54 47",
  "Gift 1 20",
  "Back 1",
  "Forward 3",
]);
santasGifts([
  "6",
  "50 40 25 63 78 54 66 77 24 87",
  "Forward 4",
  "Back 3",
  "Forward 3",
  "Gift 2 88",
  "Swap 50 87",
  "Forward 1",
]);

//--------------------------------------------
// function santasGifts(input) {
//   let numCommand = Number(input.shift());
//   let houses = input.shift().split(" ");
//   let count = 0;
//   for (let i = 0; i < numCommand; i++) {
//     let [command, step, value] = input.shift().split(" ");
//     if (command == "Forward") {
//       let index = Number(step) + count;
//       if (index >= 0 && index < houses.length) {
//         let deleted = houses.splice(index, 1);
//         count = index;
//       }
//     } else if (command == "Back") {
//       let index = count - Number(step);
//       if (index >= 0 && index < houses.length) {
//         let deleted = houses.splice(index, 1);
//         count = index;
//       }
//     } else if (command == "Gift") {
//       if (Number(step) >= 0 && Number(step) < houses.length) {
//         houses.splice(step, 0, value);
//         count = Number(step);
//       }
//     } else if (command == "Swap") {
//       let firstI = houses.indexOf(step);
//       let secI = houses.indexOf(value);
//       if (
//         firstI >= 0 &&
//         firstI < houses.length &&
//         secI >= 0 &&
//         secI < houses.length
//       ) {
//         let a = houses[firstI];
//         houses[firstI] = houses[secI];
//         houses[secI] = a;
//       }
//     }
//   }
//   console.log(`Position: ${count}`);
//   console.log(houses.join(", "));
// }
