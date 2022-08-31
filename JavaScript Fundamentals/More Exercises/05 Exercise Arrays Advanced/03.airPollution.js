function airPollution(mapSofia, forceAfecting) {
  let command = forceAfecting.shift();
  mapSofia = mapSofia.map((a) => a.split(" ").map(Number));
  while (command) {
    command = command.split(" ");
    let affectingCommand = command[0];
    let force = Number(command[1]);
    if (affectingCommand == "breeze") {
      for (let i = 0; i < mapSofia.length; i++) {
        if (i == force) {
          for (let j = 0; j < mapSofia.length; j++) {
            mapSofia[i][j] -= 15;
            if (mapSofia[i][j] < 0) {
              mapSofia[i][j] = 0;
            }
          }
          break;
        }
      }
    } else if (affectingCommand == "gale") {
      for (let i = 0; i < mapSofia.length; i++) {
        for (let j = 0; j < mapSofia.length; j++) {
          if (j == force) {
            mapSofia[i][j] -= 20;
            if (mapSofia[i][j] < 0) {
              mapSofia[i][j] = 0;
            }
            break;
          }
        }
      }
    } else if (affectingCommand == "smog") {
      for (let i = 0; i < mapSofia.length; i++) {
        for (let j = 0; j < mapSofia.length; j++) {
          mapSofia[i][j] += force;
        }
      }
    }
    command = forceAfecting.shift();
  }
  let finalMap = [];
  for (let i = 0; i < mapSofia.length; i++) {
    for (let j = 0; j < mapSofia.length; j++) {
      if (mapSofia[i][j] >= 50) {
        finalMap += `[${i}-${j}] `;
      }
    }
  }
  if (finalMap.length != 0) {
    // finalMap = finalMap.trim().split(" ").join(", ");
    finalMap = finalMap
      .slice(0, finalMap.length - 1)
      .split(" ")
      .join(", ");
    console.log(`Polluted areas: ${finalMap}`);
  } else {
    console.log(`No polluted areas`);
  }
}

airPollution(
  [
    "5 7 3 28 32",
    "41 12 49 30 33",
    "3 16 20 42 12",
    "2 20 10 39 14",
    "7 34 4 27 24",
  ],
  ["smog 11", "gale 3", "breeze 1", "smog 2"]
);

airPollution(
  [
    "5 7 72 14 4",
    "41 35 37 27 33",
    "23 16 27 42 12",
    "2 20 28 39 14",
    "16 34 31 10 24",
  ],
  ["breeze 1", "gale 2", "smog 25"]
);

//---------------------------------------------
// function airPollution(mapInfo, affectingForces) {

//     let mapOfSofia = mapInfo.map(number => number.split(' ').map(Number))

//     while (affectingForces.length > 0) {
//         let currentArr = affectingForces.shift()
//         let currentForce = currentArr.split(' ')[0]
//         let currentValue = Number(currentArr.split(' ')[1])

//         switch (currentForce) {
//             case 'breeze':
//                 mapOfSofia = breeze(mapOfSofia, currentValue)
//                 break;
//             case 'gale':
//                 mapOfSofia = gale(mapOfSofia, currentValue)
//                 break;
//             case 'smog':
//                 mapOfSofia = smog(mapOfSofia, currentValue)
//                 break;
//             default:
//                 break;
//         }
//     }

//     function breeze(arr, index) {
//         for (let col = 0; col < arr.length; col++) {
//             let currentParticle = arr[index][col];
//             if (currentParticle - 15 >= 0) {
//                 arr[index][col] -= 15
//             } else {
//                 arr[index][col] = 0
//             }
//         }
//         return arr
//     }

//     function gale(arr, index) {
//         for (let row = 0; row < arr.length; row++) {
//             let currentParticle = arr[row][index];
//             if (currentParticle - 20 >= 0) {
//                 arr[row][index] -= 20;
//             } else {
//                 arr[row][index] = 0;
//             }
//         }
//         return arr
//     }

//     function smog(arr, value) {
//         for (let row = 0; row < arr.length; row++) {
//             for (let col = 0; col < arr.length; col++) {
//                 arr[row][col] += value;
//             }
//         }
//         return arr
//     }

//     let result = 'Polluted areas: '

//     // FIRST METHOD
//     mapOfSofia.forEach((line, rowIndex) => {
//         line.forEach(number => {
//             let colIndex = line.indexOf(number)
//             if (number >= 50) {
//                 return result += `[${rowIndex}-${colIndex}], `
//             }
//         })
//     })
//     // SECOND METHOD
//     // for (let rows = 0; rows < mapOfSofia.length; rows++) {
//     //     for (let cols = 0; cols < mapOfSofia.length; cols++) {
//     //         let currentValue = mapOfSofia[rows][cols];

//     //         if (currentValue >= 50) {
//     //             result += `[${rows}-${cols}], `
//     //         }
//     //     }
//     // }

//     console.log(result === 'Polluted areas: ' ? result = 'No polluted areas' : result.slice(0, -2))

// }
// let result = airPollution(
//     ["5 7 2 14 4",
//         "21 14 2 5 3",
//         "3 16 7 42 12",
//         "2 20 8 39 14",
//         "7 34 1 10 24"],
//     ["breeze 1", "gale 2", "smog 35"]

// )
