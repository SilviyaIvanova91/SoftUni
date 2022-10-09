function treasureHunt(arr) {
  let initalLoot = arr.shift().split("|");
  let command = arr.shift();
  while (command != "Yohoho!") {
    command = command.split(" ");
    let action = command.shift();
    if (action == "Loot") {
      while (command.length) {
        let item = command.shift();
        if (!initalLoot.includes(item)) {
          initalLoot.unshift(item);
        }
      }
    } else if (action == "Drop") {
      let index = Number(command.shift());
      if (initalLoot.includes(initalLoot[index])) {
        initalLoot.push(initalLoot.splice(index, 1));
      }
    } else if (action == "Steal") {
      let count = Math.min(initalLoot.length, Number(command.shift()));
      let index = initalLoot.length - count;
      let stealItem = initalLoot.splice(index, count);
      console.log(stealItem.join(", "));
    }
    command = arr.shift();
  }

  if (initalLoot.length != 0) {
    let treasure = initalLoot.reduce((a, b) => a + b.length, 0);
    treasure /= initalLoot.length;
    console.log(
      `Average treasure gain: ${treasure.toFixed(2)} pirate credits.`
    );
  } else {
    console.log(`Failed treasure hunt.`);
  }
}

treasureHunt([
  "Gold|Silver|Bronze|Medallion|Cup",
  "Loot Wood Gold Coins",
  "Loot Silver Pistol",
  "Drop 3",
  "Steal 3",
  "Yohoho!",
]);
treasureHunt([
  "Diamonds|Silver|Shotgun|Gold",
  "Loot Silver Medals Coal",
  "Drop -1",
  "Drop 1",
  "Steal 6",
  "Yohoho!",
]);

//------------------------------------------------
// function treasureHunt(data) {
//   let state = data.shift().split("|");
//   index = 0;
//   let command = data[index++];
//   let i = 0;
//   while (command != "Yohoho!") {
//     let tokens = command.split(" ");
//     let operation = tokens.shift();
//     switch (operation) {
//       case "Loot":
//         for (el of tokens) {
//           if (!state.includes(el)) {
//             state.unshift(el);
//           }
//         }
//         break;
//       case "Drop":
//         i = Number(tokens[0]);
//         if (i < 0 || i > state.length) {
//           command = data[index++];
//           continue;
//         }
//         let element = state.splice(i, 1);
//         state.push(element);
//         break;
//       case "Steal":
//         let count = Number(tokens[0]);
//         let items = state.splice(-count);
//         console.log(items.join(", "));
//         break;
//     }
//     command = data[index++];
//   }

//   if (state.length > 0) {
//     let sum = 0;
//     for (let el of state) {
//       sum += el.length;
//     }
//     let avg = sum / state.length;
//     console.log(`Average treasure gain: ${avg.toFixed(2)} pirate credits.`);
//   } else {
//     console.log(`Failed treasure hunt.`);
//   }
// }
