function gladiatorInventory(arr) {
  let start = arr.shift().split(" ");
  for (let el of arr) {
    let tokens = el.split(" ");
    let command = tokens[0];
    let equipment = tokens[1];
    if (command == "Buy") {
      if (!start.includes(equipment)) {
        start.push(equipment);
      }
    } else if (command == "Trash") {
      if (start.includes(equipment)) {
        let i = start.indexOf(equipment);
        start.splice(i, 1);
      }
    } else if (command == "Repair") {
      if (start.includes(equipment)) {
        let i = start.indexOf(equipment);
        let newS = start.splice(i, 1);
        start.push(newS.join(" "));
      }
    } else if (command == "Upgrade") {
      let upEl = equipment.split("-");
      if (start.includes(upEl[0])) {
        let index = start.indexOf(upEl[0]);
        start.splice(index + 1, 0, `${upEl[0]}:${upEl[1]}`);
      }
    }
  }
  console.log(start.join(" "));
}

gladiatorInventory([
  "SWORD Shield Spear",
  "Buy Bag",
  "Trash Shield",
  "Repair Spear",
  "Upgrade SWORD-Steel",
]);
gladiatorInventory([
  "SWORD Shield Spear",
  "Trash Bow",
  "Repair Shield",
  "Upgrade Helmet-V",
]);

// function gladiatorInventory(arr) {
//     let start = arr.shift().split(" ");
//     for (let el of arr) {
//       let tokens = el.split(" ");
//       let command = tokens[0];
//       let equipment = tokens[1];
//       if (command == "Buy") {
//         if (!start.includes(equipment)) {
//           start.push(equipment);
//         }
//       } else if (command == "Trash") {
//         for (let i = 0; i < start.length; i++) {
//           if (start[i] == equipment) {
//             start.splice(i, 1);
//             break;
//           }
//         }
//       } else if (command == "Repair") {
//         for (let i = 0; i < start.length; i++) {
//           if (start[i] == equipment) {
//             let newS = start.splice(i, 1);
//             start.push(newS.join(" "));
//             break;
//           }
//         }
//       } else if (command == "Upgrade") {
//         let upEl = equipment.split("-");
//         for (let i = 0; i < start.length; i++) {
//           if (start[i] == upEl[0]) {
//             let index = start.indexOf(upEl[0]);
//             start.splice(index + 1, 0, `${upEl[0]}:${upEl[1]}`);
//           }
//         }
//       }
//     }
//     console.log(start.join(" "));
//   }
