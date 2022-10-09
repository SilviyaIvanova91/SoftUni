function magicMatrices(arr) {
  let initialSum = arr[0].reduce((a, b) => a + b);

  for (i = 0; i < arr[0].length; i++) {
    let rowSum = arr[i].reduce((a, b) => a + b);
    let colSum = arr.map((x) => x[i]).reduce((a, b) => a + b);

    if (rowSum != colSum || rowSum != initialSum) {
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

//----------------------------------------------------
// function magicMatrices(arr) {
//   let sum = 0;
//   let tmp = 0;

//   /* Loop rows
//    */
//   for (i = 0; i < arr[0].length; i++) {
//     tmp = 0;
//     for (j = 0; j < arr[0].length; j++) {
//       tmp += arr[i][j]; //arr [i] [j]
//     }

//     if (sum == 0) {
//       sum = tmp;
//     } else if (tmp != sum) {
//       console.log(false);
//       return;
//     }
//   }

//   /* Loop cols
//    */
//   for (i = 0; i < arr[0].length; i++) {
//     tmp = 0;
//     for (j = 0; j < arr[0].length; j++) {
//       tmp += arr[j][i]; //arr [j] [i]
//     }

//     if (tmp != sum) {
//       console.log(false);
//       return;
//     }
//   }

//   console.log(true);
// }
//--------------------------------------------------
// function magicMatrices(arr) {
//   let newA = arr[0].map(Number);
//   let newB = arr[1].map(Number);
//   let newC = arr[2].map(Number);
//   let sumRowA = newA.reduce((a, b) => a + b);
//   let sumRowB = newB.reduce((a, b) => a + b);
//   let sumRowC = newC.reduce((a, b) => a + b);
//   let sumColA = arr[0].reduce((a, b) => a + b);
//   let sumColB = arr[1].reduce((a, b) => a + b);
//   let sumColC = arr[2].reduce((a, b) => a + b);
//   let totalCol = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       totalCol = arr[i][j].reduce();
//     }
//   }

//   if (
//     sumRowA != sumRowB ||
//     sumRowA != sumRowC ||
//     sumRowC != sumRowB ||
//     sumColA != sumColB ||
//     sumColA != sumColC ||
//     sumColC != sumColB
//   ) {
//     console.log(false);
//   } else {
//     console.log(true);
//   }
// }

//----------------------------------------------------
// function magicMatrices(matrix) {
//   let rowTotal = matrix[0].reduce((a, b) => a + b);
//   let colTotal = 0;

//   matrix.forEach((row) => {
//     colTotal += row[0];
//   });

//   let result = true;

//   for (let i = 0; i < matrix.length; i++) {
//     let currentRow = matrix[i].reduce((acc, item) => acc + item);
//     let currentCol = 0;
//     for (let j = 0; j < matrix.length; j++) {
//       let num = matrix[j][i];
//       currentCol += num;
//     }
//     if (currentRow !== rowTotal || currentCol !== colTotal) {
//       result = false;
//       break;
//     }
//   }

//   console.log(result);
// }
