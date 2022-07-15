function houseParty(arr) {
  let list = [];
  for (let line of arr) {
    let command = line.split(" ");
    let name = command[0];
    if (command.length == 3) {
      if (list.includes(name)) {
        console.log(`${name} is already in the list!`);
      } else {
        list.push(name);
      }
    } else {
      if (!list.includes(name)) {
        console.log(`${name} is not in the list!`);
      } else {
        let indexOfPerson = list.indexOf(name);
        list.splice(indexOfPerson, 1);
      }
    }
  }
  console.log(list.join("\n"));
}

houseParty([
  "Allie is going!",
  "George is going!",
  "John is not going!",
  "George is not going!",
]);
houseParty([
  "Tom is going!",
  "Annie is going!",
  "Tom is going!",
  "Garry is going!",
  "Jerry is going!",
]);

// function houseParty(arr) {
//   let list = [];
//   for (let line of arr) {
//     let command = line.split(" ");
//     let name = command[0];
//     if (command.length == 3) {
//       let isIncluded = list.includes(name);
//       if (isIncluded) {
//         console.log(`${name} is already in the list!`);
//       } else {
//         list.push(name);
//       }
//     } else {
//       let indexOfPerson = list.indexOf(name);
//       if (indexOfPerson !== -1) {
//         list.splice(indexOfPerson, 1);
//       } else {
//         console.log(`${name} is not in the list!`);
//       }
//     }
//   }
//   console.log(list.join("\n"));
// }
