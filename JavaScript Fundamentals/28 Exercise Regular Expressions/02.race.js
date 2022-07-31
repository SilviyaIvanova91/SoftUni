function race(input) {
  let rasers = {};
  let names = input.shift().split(", ");

  for (let line of input) {
    if (line !== "end of race") {
      let racer = line.match(/[A-Z]+/gi).join("");
      let distanceInDig = line.match(/\d/g);
      let distance = 0;
      distance = distanceInDig
        .map(Number)
        .reduce((previosValue, currValur) => previosValue + currValur);
      if (names.includes(racer)) {
        if (rasers.hasOwnProperty(racer)) {
          rasers[racer] += distance;
        } else {
          rasers[racer] = distance;
        }
      }
    }
  }
  let sortedArr = Object.keys(rasers).sort((a, b) => rasers[b] - rasers[a]);
  console.log(
    `1st place: ${sortedArr[0]}\n2nd place: ${sortedArr[1]}\n3rd place: ${sortedArr[2]}`
  );
}

race([
  "George, Peter, Bill, Tom",
  "G4e@55or%6g6!68e!!@ ",
  "R1@!3a$y4456@",
  "B5@i@#123ll",
  "G@e54o$r6ge#",
  "7P%et^#e5346r",
  "T$o553m&6",
  "end of race",
]);
race([
  "Ronald, Bill, Tom, Timmy, Maggie, Michonne",
  "Mi*&^%$ch123o!#$%#nne787) ",
  "%$$B(*&&)i89ll)*&) ",
  "R**(on%^&ald992) ",
  "T(*^^%immy77) ",
  "Ma10**$#g0g0g0i0e",
  "end of race",
]);

// function race(input) {
//   let nameMap = new Map();
//   let names = input.shift().split(", ");

//   names.forEach((person) => {
//     nameMap.set(person, 0);
//   });
//   let letterPattern = /[A-Za-z]+/gm;
//   let digitsPattern = /\d/g;
//   for (let i = 0; i < input.length; i++) {
//     let currLine = input[i];
//     if (currLine == "end of race") {
//       break;
//     }
//     let name = currLine.match(letterPattern).join("");
//     let distance = currLine.match(digitsPattern).reduce((a, b) => {
//       return Number(a) + Number(b);
//     }, 0);
//     if (nameMap.has(name)) {
//       let prevDistance = nameMap.get(name);
//       prevDistance += distance;
//       nameMap.set(name, prevDistance);
//     }
//   }
//   let sortedArr = Array.from(nameMap).sort((a, b) => {
//     return b[1] - a[1];
//   });

//   console.log(`1st place: ${sortedArr[0][0]}`);
//   console.log(`2nd place: ${sortedArr[1][0]}`);
//   console.log(`3rd place: ${sortedArr[2][0]}`);
// }
//----------------------------------------------
// function race(input) {
//     let rasers = {};
//     let names = input.shift().split(", ");

//     for (let line of input) {
//       if (line !== "end of race") {
//         let racer = line.match(/[A-Z]+/gi).join("");
//         let distanceInDig = line.match(/\d/g);
//         let distance = 0;
//         for (let meter of distanceInDig) {
//           distance += Number(meter);
//         }
//         if (names.includes(racer)) {
//           if (rasers.hasOwnProperty(racer)) {
//             rasers[racer] += distance;
//           } else {
//             rasers[racer] = distance;
//           }
//         }
//       }
//     }
//     let sortedArr = Object.keys(rasers).sort((a, b) => rasers[b] - rasers[a]);
//     console.log(
//       `1st place: ${sortedArr[0]}\n2nd place: ${sortedArr[1]}\n3rd place: ${sortedArr[2]}`
//     );
//   }
