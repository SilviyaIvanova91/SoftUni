function arenaTier(input) {
  let gladiatorPool = {};
  for (let line of input) {
    if (line == "Ave Cesar") {
      break;
    }
    let tokens = line.split(" -> ");
    if (tokens.length > 1) {
      let name = tokens[0];
      let tehnique = tokens[1];
      let skill = Number(tokens[2]);
      if (!gladiatorPool.hasOwnProperty(name)) {
        gladiatorPool[name] = {};
      }
      if (!gladiatorPool[name].hasOwnProperty(tehnique)) {
        gladiatorPool[name][tehnique] = 0;
      }
      let oldSkill = gladiatorPool[name][tehnique];
      if (oldSkill < skill) {
        gladiatorPool[name][tehnique] = skill;
      }
    } else {
      tokens = tokens[0].split(" vs ");
      let gladiadiatorA = tokens[0];
      let gladiadiatorB = tokens[1];
      if (
        !gladiatorPool.hasOwnProperty(gladiadiatorA) ||
        !gladiatorPool.hasOwnProperty(gladiadiatorB)
      ) {
        continue;
      }
      let sumGladiatorOne = 0;
      let sumGladiatorTwo = 0;
      for (let [tehnique, skill] of Object.entries(
        gladiatorPool[gladiadiatorA]
      )) {
        if (gladiatorPool[gladiadiatorB].hasOwnProperty(tehnique)) {
          sumGladiatorOne += gladiatorPool[gladiadiatorA][tehnique];
          sumGladiatorTwo += gladiatorPool[gladiadiatorB][tehnique];
        }
      }
      if (sumGladiatorOne > sumGladiatorTwo) {
        delete gladiatorPool[gladiadiatorB];
      } else if (sumGladiatorOne < sumGladiatorTwo) {
        delete gladiatorPool[gladiadiatorA];
      }
    }
  }
  let gladiatorTotalSkill = {};
  for (let [gladiatorName, tehniquePool] of Object.entries(gladiatorPool)) {
    if (!gladiatorTotalSkill.hasOwnProperty(gladiatorName)) {
      gladiatorTotalSkill[gladiatorName] = 0;
    }
    let sum = 0;
    for (let currentSkill of Object.values(tehniquePool)) {
      sum += currentSkill;
    }
    gladiatorTotalSkill[gladiatorName] = sum;
  }
  let sortCladiatorName = Object.entries(gladiatorTotalSkill).sort(
    ([keyA, valueA], [keyB, valueB]) => {
      return valueB - valueA || keyA.localeCompare(keyB);
    }
  );

  for (let [name, points] of sortCladiatorName) {
    console.log(`${name}: ${points} skill`);
    let sortItems = Object.entries(gladiatorPool[name]).sort(
      ([keyA, valueA], [keyB, valueB]) => {
        return valueB - valueA || keyA.localeCompare(keyB);
      }
    );
    for (let [techName, techSkill] of sortItems) {
      console.log(`- ${techName} <!> ${techSkill}`);
    }
  }
}

arenaTier([
  "Peter -> BattleCry -> 400",
  "Alex -> PowerPunch -> 300",
  "Stefan -> Duck -> 200",
  "Stefan -> Tiger -> 250",
  "Ave Cesar",
]);
arenaTier([
  "Peter -> Duck -> 400",
  "Julius -> Shield -> 150",
  "Gladius -> Heal -> 200",
  "Gladius -> Support -> 250",
  "Gladius -> Shield -> 250",
  "Peter vs Gladius",
  "Gladius vs Julius",
  "Gladius vs Maximilian",
  "Ave Cesar",
]);

//-----------------------------------------------------
// function solve(input) {
//   let obj = {};

//   for (const line of input) {
//     if (line === "Ave Cesar") {
//       break;
//     }
//     let element = line.split(" ");
//     if (element[1] === "->") {
//       let theLine = line.split(" -> ");
//       let gladiator = theLine[0];
//       let technique = theLine[1];
//       let skillAmount = Number(theLine[2]);
//       if (!obj.hasOwnProperty(gladiator)) {
//         obj[gladiator] = {};
//       }
//       if (
//         !obj[gladiator].hasOwnProperty(technique) ||
//         obj[gladiator][technique] < skillAmount
//       ) {
//         obj[gladiator][technique] = skillAmount;
//       }
//     } else if (element[1] === "vs") {
//       let theLine = line.split(" vs ");
//       let gladiator1 = theLine[0];
//       let gladiator2 = theLine[1];
//       if (obj.hasOwnProperty(gladiator1) && obj.hasOwnProperty(gladiator2)) {
//         let gladiator1Techniques = obj[gladiator1];
//         let gladiator2Techniques = obj[gladiator2];
//         for (const key in gladiator1Techniques) {
//           if (gladiator2Techniques.hasOwnProperty(key)) {
//             if (gladiator1Techniques[key] > gladiator2Techniques[key]) {
//               delete obj[gladiator2];
//             } else if (gladiator1Techniques[key] < gladiator2Techniques[key]) {
//               delete obj[gladiator1];
//             }
//           }
//         }
//       }
//     }
//   }
//   for (const key in obj) {
//     let sum = 0;
//     let outsideObj = obj[key];
//     for (const insideKey in outsideObj) {
//       sum += outsideObj[insideKey];
//     }
//     outsideObj["sum"] = sum;
//   }
//   console.log(obj);

//   Object.entries(obj)
//     .sort((a, b) => b[1].sum - a[1].sum || a[0].localeCompare(b[0]))
//     .forEach((element) => {
//       console.log(`${element[0]}: ${element[1].sum} skill`);
//       delete element[1].sum;
//       Object.entries(element[1])
//         .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
//         .forEach((element) => {
//           console.log(` - ${element[0]} <!> ${element[1]}`);
//         });
//     });
// }

//-------------------------------------------------------
// function arenaTier(input) {
//   let arena = {};
//   let totalSkills = {};

//   for (let line of input) {
//     if (line === "Ave Cesar") {
//       break;
//     } else {
//       let [gladiator, technique, skill] = line.split(" -> ");
//       skill = Number(skill);

//       if (technique !== undefined) {
//         if (!arena[gladiator]) {
//           arena[gladiator] = {};
//           arena[gladiator][technique] = skill;
//         } else {
//           if (!arena[gladiator][technique]) {
//             arena[gladiator][technique] = skill;
//           } else {
//             if (arena[gladiator][technique] < skill) {
//               arena[gladiator][technique] = skill;
//             }
//           }
//         }
//         getTotalSkills();
//       } else {
//         let [firstName, secondName] = gladiator.split(" vs ");
//         if (
//           arena.hasOwnProperty(firstName) &&
//           arena.hasOwnProperty(secondName)
//         ) {
//           let battleWin = false;
//           for (let techniques of Object.entries(arena[firstName])) {
//             for (let techniquesTwo of Object.entries(arena[secondName])) {
//               if (techniquesTwo[0] === techniques[0]) {
//                 if (getTotalSkills(secondName) > getTotalSkills(firstName)) {
//                   delete totalSkills[firstName];
//                   delete arena[firstName];
//                   battleWin = true;
//                   break;
//                 } else if (
//                   getTotalSkills(secondName) < getTotalSkills(firstName)
//                 ) {
//                   delete totalSkills[secondName];
//                   delete arena[secondName];
//                   battleWin = true;
//                   break;
//                 }
//               }
//             }
//             if (battleWin) {
//               break;
//             }
//           }
//         }
//       }
//     }
//   }

//   function getTotalSkills(name) {
//     for (let gladiator of Object.entries(arena)) {
//       let sumOfSkills = 0;
//       for (let technique of Object.entries(gladiator[1])) {
//         sumOfSkills += technique[1];
//       }
//       totalSkills[gladiator[0]] = sumOfSkills;
//     }
//     return totalSkills[name];
//   }

//   let sortedByTotalSkills = Object.entries(totalSkills).sort((a, b) => {
//     return b[1] - a[1] || a[0].localeCompare(b[0]);
//   });

//   for (let i = 0; i < sortedByTotalSkills.length; i++) {
//     console.log(
//       `${sortedByTotalSkills[i][0]}: ${sortedByTotalSkills[i][1]} skill`
//     );

//     let sortedTechEntries = Object.entries(
//       arena[sortedByTotalSkills[i][0]]
//     ).sort((a, b) => {
//       return b[1] - a[1] || a[0].localeCompare(b[0]);
//     });

//     for (let i = 0; i < sortedTechEntries.length; i++) {
//       console.log(
//         `- ${sortedTechEntries[i][0]} <!> ${sortedTechEntries[i][1]}`
//       );
//     }
//   }
// }
