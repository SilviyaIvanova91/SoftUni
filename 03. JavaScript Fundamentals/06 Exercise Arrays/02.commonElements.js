function commonElements(firstARr, secondArr) {
  for (let i = 0; i < firstARr.length; i++) {
    for (let k = 0; k < secondArr.length; k++) {
      if (firstARr[i] === secondArr[k]) {
        console.log(firstARr[i]);
      }
    }
  }
}

commonElements(
  ["Hey", "hello", 2, 4, "Peter", "e"],
  ["Petar", 10, "hey", 4, "hello", "2"]
);
commonElements(
  ["S", "o", "f", "t", "U", "n", "i", " "],
  ["s", "o", "c", "i", "a", "l"]
);

//---------------------------------------------------
// function commonElements(firstARr, secondArr) {
//   for (let elem of firstARr) {
//       if (secondArr.includes(elem)) {
//         console.log(elem)
//     }
//   }
// }
//--------------------------------------------------
// function commonElements(firstARr, secondArr) {
//   for (let elem of firstARr) {
//     for (let elem2 of secondArr) {
//       if (elem === elem2) {
//         console.log(elem);
//       }
//     }
//   }
// }
