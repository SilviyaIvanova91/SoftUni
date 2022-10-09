function greatestCommonDivisor(a, b) {
  while (b) {
    let c = b;
    b = a % b;
    a = c;
  }
  console.log(a);
}

greatestCommonDivisor(15, 5);
greatestCommonDivisor(2154, 458);

//------------------------------------
// function greatestCommonDivisor(a, b) {
//   if (b) {
//     return greatestCommonDivisor(b, a % b);
//   } else {
//     console.log(a);
//   }
// }

//---------------------------------------------
// function greatestCommonDivisor(a, b) {
//   while (a != b) {
//     a > b ? (a -= b) : (b -= a);
//   }
//   console.log(a);
// }

//--------------------------------------------------
// function greatestCommonDivisor(a, b) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     console.log(`false`);
//   } else {
//     a = Math.abs(a);
//     b = Math.abs(b);
//     while (b) {
//       let c = b;
//       b = a % b;
//       a = c;
//     }
//     console.log(a);
//   }
// }
