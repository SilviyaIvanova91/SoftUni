function processOddPositions(arr) {
  return arr
    .filter((a, i) => i % 2 != 0)
    .map((a) => a * 2)
    .reverse()
    .join(" ");
}

console.log(processOddPositions([10, 15, 20, 25]));
console.log(processOddPositions([3, 0, 10, 4, 7, 3]));

//---------------------------------------
// function processOddPositions(arr) {
//     let newArr = [];
//     for (let i = 1; i < arr.length; i += 2) {
//       newArr.push(Number(arr[i]) * 2);
//     }
//     return newArr.reverce().join(" ");
//   }
