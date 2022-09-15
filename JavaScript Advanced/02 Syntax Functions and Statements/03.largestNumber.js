function largestNumber(a, b, c) {
  let res;
  if (a >= b && a >= c) {
    res = a;
  } else if (b >= a && b >= c) {
    res = b;
  } else {
    res = c;
  }
  console.log(`The largest number is ${res}.`);
}

largestNumber(5, -3, 16);
largestNumber(-3, -5, -22.5);

//---------------------------
// function largestNumber(a, b, c) {
//   let res = Math.max(a, b, c);

//   console.log(`The largest number is ${res}.`);
// }

//-----------------------------------
// function largestNumber(a, b, c) {
//   console.log(`The largest number is ${Math.max(a, b, c)}.`);
// }

//---------------------------------------
//(...p) => `The largest number is ${Math.max(...p)}.`;
