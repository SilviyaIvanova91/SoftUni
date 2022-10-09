function netherRealms(input) {
  let splitPattern = /[, ]+/g;
  input = input.split(splitPattern).sort((a, b) => a.localeCompare(b));
  for (let el of input) {
    let demmageSumbols = /[+-]?\d+\.?\d*/g;
    let helathSumbols = /[^0-9.\/+*-]/g;
    let sumbolMultDevide = /\/|\*/g;
    let matchDemagge = el.match(demmageSumbols);
    let demmage = 0;
    if (matchDemagge != null) {
      demmage = matchDemagge.map(Number).reduce((a, b) => a + b, 0);
    }
    let matchHelath = el.match(helathSumbols);
    let health = 0;
    if (health != null) {
      health = matchHelath
        .map((a) => (a = a.charCodeAt()))
        .reduce((a, b) => a + b, 0);
    }
    let matchMD = el.match(sumbolMultDevide);
    if (matchMD != null) {
      matchMD.forEach((el) => {
        if (el == "*") {
          demmage *= 2;
        } else if (el == "/") {
          demmage /= 2;
        }
      });
    }
    console.log(`${el} - ${health} health, ${demmage.toFixed(2)} damage`);
  }
}

netherRealms("M3ph-0.5s-0.5t0.0**");
netherRealms("M3ph1st0**, Azazel");
netherRealms("Gos/ho");

// function netherRealms(input) {
//     input = input.split(", ").sort((a, b) => a.localeCompare(b));
//     for (let el of input) {
//       let name = /[A-Za-z0-9\+\*\/\-\.]*/g;
//       let matchName = name.exec(el);
//       let demmageSumbols = /[\-\+]?[0-9]\.?[0-9]?/g;
//       let matchDemagge = el.match(demmageSumbols);
//       let demmage = 0;
//       if (matchDemagge != null) {
//         demmage = matchDemagge.map(Number).reduce((a, b) => a + b, 0);
//       }
//       let helathSumbols = /[A-Za-z]/g;
//       let matchHelath = el.match(helathSumbols);
//       let health = 0;
//       if (health != null) {
//         health = matchHelath
//           .map((a) => (a = a.charCodeAt()))
//           .reduce((a, b) => a + b, 0);
//       }
//       let sumbolMultDevide = /[\/\*]/g;
//       let matchMD = el.match(sumbolMultDevide);
//       if (matchMD != null) {
//         matchMD.forEach((el) => {
//           if (el == "*") {
//             demmage *= 2;
//           } else if (el == "/") {
//             demmage /= 2;
//           }
//         });
//       }
//       console.log(
//         `${matchName} - ${health} health, ${demmage.toFixed(2)} damage`
//       );
//     }
//   }

//------------------------------------------------------------------
// function solve(input) {
//     let splitPattern = /[, ]+/g;
//     let demonsArr = input[0].split(splitPattern);
//     let demons = {};
//     let healthPattern = /[^0-9.\/+*-]/g;
//     let sumPattern = /[+-]?\d+\.?\d*/g;
//     let dmgPattern = /\*|\//g;

//     for (const demon of demonsArr) {
//         let hp = 0;
//         let dmg = 0;
//         if (demon.match(healthPattern) != null) {
//             for (const char of demon.match(healthPattern)) {
//                 hp += char.charCodeAt(0);
//             }
//         }

//         let digits = demon.match(sumPattern);

//         if (digits != null) {
//             for (const digit of digits) {
//                 dmg += Number(digit);
//             }
//         }

//         let subtractOrMultiply = demon.match(dmgPattern);

//         if (subtractOrMultiply != null) {
//             for (const operand of subtractOrMultiply) {
//                 if (operand == '*') {
//                     dmg *= 2;
//                 } else {
//                     dmg /= 2;
//                 }
//             }
//         }

//         demons[demon] = {};
//         demons[demon]['health'] = hp;
//         demons[demon]['damage'] = dmg;
//     }

//     let sorted = Object.entries(demons).sort((a, b) => a[0].localeCompare(b[0]));
//     for (const [name, valuesObj] of sorted) {
//         console.log(`${name} - ${valuesObj['health']} health, ${valuesObj['damage'].toFixed(2)} damage`);
//     }
// }
