function manOWar(arr) {
  let pirateShip = arr.shift().split(">").map(Number);
  let warShip = arr.shift().split(">").map(Number);
  let maxHealth = Number(arr.shift());
  let command = arr.shift();
  let isBreak = false;
  while (command != "Retire") {
    command = command.split(" ");
    if (command[0] == "Fire") {
      let index = Number(command[1]);
      let demage = Number(command[2]);
      if (warShip.includes(warShip[index])) {
        warShip[index] -= demage;
        if (warShip[index] <= 0) {
          isBreak = true;
          console.log(`You won! The enemy ship has sunken.`);
          break;
        }
      }
    } else if (command[0] == "Defend") {
      let startIndex = Number(command[1]);
      let endIndex = Number(command[2]);
      let demage = Number(command[3]);
      if (
        pirateShip.includes(pirateShip[startIndex]) &&
        pirateShip.includes(pirateShip[endIndex])
      ) {
        for (let i = startIndex; i <= endIndex; i++) {
          pirateShip[i] -= demage;
          if (pirateShip[i] <= 0) {
            isBreak = true;
            console.log(`You lost! The pirate ship has sunken.`);
            break;
          }
        }
      }
    } else if (command[0] == "Repair") {
      let index = Number(command[1]);
      let health = Number(command[2]);
      if (pirateShip.includes(pirateShip[index])) {
        pirateShip[index] += health;
        if (health > maxHealth) {
          pirateShip[index] = maxHealth;
        }
      }
    } else if (command[0] == "Status") {
      let needhelath = maxHealth * 0.2;
      let needrepair = pirateShip.filter((a) => a < needhelath);
      let count = needrepair.length;
      console.log(`${count} sections need repair.`);
    }
    if (isBreak) {
      break;
    }
    command = arr.shift();
  }
  if (!isBreak) {
    let piratesSum = pirateShip.reduce((a, b) => a + b, 0);
    let warShipSum = warShip.reduce((a, b) => a + b, 0);
    console.log(`Pirate ship status: ${piratesSum}`);
    console.log(`Warship status: ${warShipSum}`);
  }
}

manOWar([
  "12>13>11>20>66",
  "12>22>33>44>55>32>18",
  "70",
  "Fire 2 11",
  "Fire 8 100",
  "Defend 3 6 11",
  "Defend 0 3 5",
  "Repair 1 33",
  "Status",
  "Retire",
]);
manOWar([
  "2>3>4>5>2",
  "6>7>8>9>10>11",
  "20",
  "Status",
  "Fire 2 3",
  "Defend 0 4 11",
  "Repair 3 18",
  "Retire",
]);

//----------------------------------------------------
// function manOWar(input) {
//   let statusPirateShip = input.shift().split(">").map(Number);
//   let warShip = input.shift().split(">").map(Number);
//   let maxHealth = Number(input.shift());

//   let index = 0;
//   let line = input[index];
//   index++;
//   while (line !== "Retire") {
//     let tokens = line.split(" ");
//     let i;

//     switch (tokens[0]) {
//       case "Fire":
//         i = Number(tokens[1]);
//         let damage = Number(tokens[2]);
//         if (i < 0 || i > warShip.length - 1) {
//           line = input[index];
//           index++;
//           continue;
//         }
//         warShip[i] -= damage;
//         if (warShip[i] <= 0) {
//           return `You won! The enemy ship has sunken.`;
//         }
//         break;
//       case "Defend":
//         i = Number(tokens[1]);
//         let endIndex = Number(tokens[2]);
//         let dmg = Number(tokens[3]);
//         if (
//           i < 0 ||
//           i > statusPirateShip.length - 1 ||
//           endIndex < 0 ||
//           endIndex > statusPirateShip.length - 1
//         ) {
//           line = input[index];
//           index++;
//           continue;
//         }
//         for (let x = i; x <= endIndex; x++) {
//           statusPirateShip[x] = statusPirateShip[x] - dmg;
//           if (statusPirateShip[x] <= 0) {
//             return "You lost! The pirate ship has sunken.";
//           }
//         }
//         break;
//       case "Repair":
//         i = Number(tokens[1]);
//         let health = Number(tokens[2]);
//         if (i < 0 || i > statusPirateShip.length - 1) {
//           line = input[index];
//           index++;
//           continue;
//         }
//         if (statusPirateShip[i] + health <= maxHealth) {
//           statusPirateShip[i] = statusPirateShip[i] + health;
//         } else {
//           statusPirateShip[i] = maxHealth;
//         }
//         break;
//       case "Status":
//         let breakPoint = maxHealth * 0.2;
//         let result = statusPirateShip.filter((el) => el < breakPoint);
//         console.log(result.length + " sections need repair.");
//         break;
//     }
//     line = input[index];
//     index++;
//   }
//   let warShipResult = 0;
//   let pirateShipResult = 0;
//   for (let sections of warShip) {
//     warShipResult += sections;
//   }
//   for (let section of statusPirateShip) {
//     pirateShipResult += section;
//   }
//   return `Pirate ship status: ${pirateShipResult}\nWarship status: ${warShipResult}`;
// }

//-----------------------------------------------------------
// function manOWar(arr) {
//   let pirateShip = arr.shift().split(">").map(Number);
//   let warship = arr.shift().split(">").map(Number);

//   let maximumHealth = Number(arr.shift());
//   while (arr[0] !== "Retire") {
//     let commands = arr.shift().split(" ");

//     if (commands[0] === "Fire") {
//       let index = Number(commands[1]);
//       if (index >= 0 && index <= warship.length - 1) {
//         warship[index] -= Number(commands[2]);
//         if (warship[index] <= 0) {
//           console.log("You won! The enemy ship has sunken.");
//           return;
//         }
//       }
//     } else if (commands[0] === "Defend") {
//       let index1 = Number(commands[1]);
//       let index2 = Number(commands[2]);
//       if (
//         index1 >= 0 &&
//         index1 <= pirateShip.length - 1 &&
//         index2 >= 0 &&
//         index2 <= pirateShip.length - 1
//       ) {
//         for (let i = index1; i <= index2; i++) {
//           pirateShip[i] -= Number(commands[3]);

//           if (pirateShip[i] <= 0) {
//             console.log("You lost! The pirate ship has sunken.");
//             return;
//           }
//         }
//       }
//     } else if (commands[0] === "Repair") {
//       let i = Number(commands[1]);
//       if (i >= 0 && i <= pirateShip.length - 1) {
//         pirateShip[i] += Number(commands[2]);
//         if (pirateShip[i] > maximumHealth) {
//           pirateShip[i] = maximumHealth;
//         }
//       }
//     } else if (commands[0] === "Status") {
//       let counter = 0;
//       for (let i = 0; i < pirateShip.length; i++) {
//         if (pirateShip[i] < maximumHealth * 0.2) {
//           counter++;
//         }
//       }
//       console.log(`${counter} sections need repair.`);
//     }
//   }
//   let sum1 = pirateShip.reduce((a, b) => a + b, 0);
//   let sum2 = warship.reduce((a, b) => a + b, 0);

//   console.log(`Pirate ship status: ${sum1}`);
//   console.log(`Warship status: ${sum2}`);
// }

//----------------------------------------------------------------
// function manOWar(arr) {
//   let pirateShip = [];
//   pirateShip = arr.shift().split(`>`).map(Number);
//   let warShip = [];
//   warShip = arr.shift().split(`>`).map(Number);
//   let maxHealth = Number(arr.shift());
//   let token = arr.shift();
//   let isDead = false;

//   while (token != `Retire`) {
//     if (isDead === true) {
//       break;
//     }
//     let splittedToken = token.split(` `);
//     let comand = splittedToken[0];
//     let indexOne = splittedToken[1];
//     let indexTwo = splittedToken[2];
//     let indexThree = splittedToken[3];

//     if (comand === `Fire`) {
//       fire(indexOne, indexTwo);
//     } else if (comand === `Defend`) {
//       defend(indexOne, indexTwo, indexThree);
//     } else if (comand === `Repair`) {
//       repair(indexOne, indexTwo);
//     } else if (comand === `Status`) {
//       status();
//     }

//     token = arr.shift();
//   }

//   if (!isDead) {
//     let warShipPoint = warShip.reduce((acc, el) => acc + el, 0);
//     let pirateShipPoints = pirateShip.reduce((acc, el) => acc + el, 0);

//     console.log(`Pirate ship status: ${pirateShipPoints}`);
//     console.log(`Warship status: ${warShipPoint}`);
//   }

//   function fire(index, damage) {
//     index = Number(index);
//     damage = Number(damage);
//     if (index >= 0 && index < warShip.length) {
//       warShip[index] = warShip[index] - damage;
//       if (warShip[index] <= 0) {
//         isDead = true;
//         console.log(`You won! The enemy ship has sunken.`);
//         return;
//       }
//     }
//   }

//   function defend(startIndex, endIndex, damage) {
//     startIndex = Number(startIndex);
//     endIndex = Number(endIndex);
//     damage = Number(damage);
//     if (
//       startIndex >= 0 &&
//       startIndex < pirateShip.length &&
//       endIndex >= startIndex &&
//       endIndex <= pirateShip.length - 1
//     ) {
//       for (let i = startIndex; i <= endIndex; i++) {
//         pirateShip[i] -= damage;
//         if (pirateShip[i] <= 0) {
//           isDead = true;
//           console.log(`You lost! The pirate ship has sunken.`);
//           return;
//         }
//       }
//     }
//   }

//   function repair(index, health) {
//     index = Number(index);
//     health = Number(health);
//     if (index >= 0 && index < pirateShip.length) {
//       if (pirateShip[index] + health < maxHealth) {
//         pirateShip[index] = pirateShip[index] + health;
//       } else {
//         pirateShip[index] = maxHealth;
//       }
//     }
//   }

//   function status() {
//     let lessThan20Perc = maxHealth * 0.2;
//     let coundSections = 0;
//     for (let i = 0; i < pirateShip.length; i++) {
//       if (pirateShip[i] < lessThan20Perc) {
//         coundSections++;
//       }
//     }
//     console.log(`${coundSections} sections need repair.`);
//   }
// }

//------------------------------------------------------------------
// function manOWar(arr) {
//   let pirateShip = arr.shift().split(">").map(Number);
//   let warShip = arr.shift().split(">").map(Number);
//   let maxHealth = Number(arr.shift());
//   let command = arr.shift();
//   let isBreak = false;

//   while (command != "Retire") {
//     command = command.split(" ");
//     if (command[0] == "Fire") {
//       let index = Number(command[1]);

//       //if (warShip.includes(warShip[index])) {
//       if (index >= 0 && index < warShip.length) {
//         warShip[index] -= Number(command[2]);
//         if (warShip[index] <= 0) {
//           isBreak = true;
//           console.log(`You won! The enemy ship has sunken.`);
//           break;
//         }
//       }
//     } else if (command[0] == "Defend") {
//       let startIndex = Number(command[1]);
//       let endIndex = Number(command[2]);
//       let demage = Number(command[3]);
//       if (
//         //pirateShip.includes(pirateShip[startIndex]) &&
//         //pirateShip.includes(pirateShip[endIndex])
//         startIndex >= 0 &&
//         endIndex >= 0 &&
//         endIndex >= startIndex &&
//         endIndex < pirateShip.length
//       ) {
//         for (let i = startIndex; i <= endIndex; i++) {
//           pirateShip[i] -= demage;
//           if (pirateShip[i] <= 0) {
//             isBreak = true;
//             console.log(`You lost! The pirate ship has sunken.`);
//             break;
//           }
//         }
//       }
//     } else if (command[0] == "Repair") {
//       let index = Number(command[1]);
//       let health = Number(command[2]);

//       //if (pirateShip.includes(pirateShip[index])) {
//       if (index >= 0 && index < pirateShip.length) {
//         pirateShip[index] += health;
//         if (pirateShip[index] > maxHealth) {
//           pirateShip[index] = maxHealth;
//         }
//       }
//     } else if (command[0] == "Status") {
//       let needhelath = maxHealth * 0.2;
//       let needrepair = pirateShip.filter((a) => a < needhelath);
//       let count = needrepair.length;
//       console.log(`${count} sections need repair.`);
//     }
//     if (isBreak) {
//       break;
//     }
//     command = arr.shift();
//   }
//   if (!isBreak) {
//     let piratesSum = pirateShip.reduce((a, b) => a + b, 0);
//     let warShipSum = warShip.reduce((a, b) => a + b, 0);
//     console.log(`Pirate ship status: ${piratesSum}`);
//     console.log(`Warship status: ${warShipSum}`);
//   }
// }
//---------------------------------------------------------------------
// function manOWar(arr) {
//   let pirateShip = arr.shift().split(">").map(Number);
//   let warShip = arr.shift().split(">").map(Number);
//   let maxHealth = Number(arr.shift());
//   let command = arr.shift();
//   let isBreak = false;

//   while (command != "Retire") {
//     command = command.split(" ");
//     if (command[0] == "Fire") {
//       let index = Number(command[1]);

//       if (warShip.includes(warShip[index])) {
//         warShip[index] -= Number(command[2]);
//         if (warShip[index] <= 0) {
//           isBreak = true;
//           console.log(`You won! The enemy ship has sunken.`);
//           break;
//         }
//       }
//     } else if (command[0] == "Defend") {
//       let startIndex = Number(command[1]);
//       let endIndex = Number(command[2]);
//       let demage = Number(command[3]);
//       if (
//         pirateShip.includes(pirateShip[startIndex]) &&
//         pirateShip.includes(pirateShip[endIndex])
//       ) {
//         for (let i = startIndex; i <= endIndex; i++) {
//           pirateShip[i] -= demage;
//           if (pirateShip[i] <= 0) {
//             isBreak = true;
//             console.log(`You lost! The pirate ship has sunken.`);
//             break;
//           }
//         }
//       }
//     } else if (command[0] == "Repair") {
//       let index = Number(command[1]);
//       let health = Number(command[2]);

//       if (pirateShip.includes(pirateShip[index])) {
//         pirateShip[index] += health;
//         if (pirateShip[index] > maxHealth) {
//           pirateShip[index] = maxHealth;
//         }
//       }
//     } else if (command[0] == "Status") {
//       let needhelath = maxHealth * 0.2;
//       let needrepair = pirateShip.filter((a) => a < needhelath);
//       let count = needrepair.length;
//       console.log(`${count} sections need repair.`);
//     }
//     if (isBreak) {
//       break;
//     }
//     command = arr.shift();
//   }
//   if (!isBreak) {
//     let piratesSum = pirateShip.reduce((a, b) => a + b, 0);
//     let warShipSum = warShip.reduce((a, b) => a + b, 0);
//     console.log(`Pirate ship status: ${piratesSum}`);
//     console.log(`Warship status: ${warShipSum}`);
//   }
// }
