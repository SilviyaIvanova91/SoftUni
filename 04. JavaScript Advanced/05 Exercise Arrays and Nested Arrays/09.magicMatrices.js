function magicMatrices(arr) {
  let sum = arr[0].reduce((a, b) => a + b);
  for (i = 0; i < arr[0].length; i++) {
    let rowSum = arr[i].reduce((a, b) => a + b);
    let colSum = arr.map((x) => x[i]).reduce((a, b) => a + b);

    if (rowSum != colSum || rowSum != sum) {
      console.log(false);
      return;
    }
  }
  console.log(true);
}

magicMatrices([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
magicMatrices([
  [11, 32, 45],
  [21, 0, 1],
  [21, 1, 1],
]);
magicMatrices([
  [1, 0, 0],
  [0, 0, 1],
  [0, 1, 0],
]);

// function magicMatrices(arr) {
//   let isMagical = true;
//   for (i = 0; i < arr.length - 1; i++) {
//     let sumRowOne = arr[i].reduce((a, b) => a + b, 0);
//     let sumRowTwo = arr[i + 1].reduce((a, b) => a + b, 0);
//     let sumColOne = 0;
//     let sumColTwo = 0;
//     for (let j = 0; j < arr.length; j++) {
//       sumColOne += arr[i][j];
//       sumColTwo += arr[i + 1][j];
//     }
//     if (sumRowOne != sumRowTwo || sumColOne != sumColTwo) {
//       isMagical = false;
//     }
//   }
//   return isMagical;
// }

//---------80%--------------------------
// function magicMatrices(arr) {
//     let sum = 0;
//     for (let row = 0; row < arr.length; row++) {
//       let currSum = 0;
//       for (let col = 0; col < arr[row].length; col++) {
//         currSum += arr[row][col];
//       }
//       if (sum == 0) {
//         sum = currSum;
//       } else if (sum != currSum) {
//         console.log(`false`);
//         return;
//       }
//     }
//     for (let row = 0; row < arr.length; row++) {
//       let currSum = 0;
//       for (let col = 0; col < arr[row].length; col++) {
//         currSum += arr[col][row];
//       }
//       if (sum != currSum) {
//         console.log(`false`);
//         return;
//       }
//     }
//     console.log(`true`);
//   }
