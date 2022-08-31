function equalNeighbors(arr) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    let row = arr[i];
    for (let j = 0; j < row.length; j++) {
      let col = row[j];
      if (i !== arr.length - 1) {
        if (col === row[j + 1]) {
          counter++;
        }
        if (col === arr[i + 1][j]) {
          counter++;
        }
      } else if (col === row[j + 1] || col === arr[i][j + 1]) {
        counter++;
      }
    }
  }
  console.log(counter);
}

equalNeighbors([
  ["2", "3", "4", "7", "0"],
  ["4", "0", "5", "3", "4"],
  ["2", "3", "5", "4", "2"],
  ["9", "8", "7", "5", "4"],
]);
equalNeighbors([
  ["test", "yo", "yo", "ho"],
  ["well", "done", "no", "6"],
  ["not", "done", "yet", "5"],
]);

// function equalNeighbors(arr) {
//   let counter = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let row = arr[i];
//     for (let j = 0; j < row.length; j++) {
//       let col = row[j];

//       if (i !== arr.length - 1) {
//         if (col === row[j + 1]) {
//           counter++;
//         }
//         if (col === arr[i + 1][j]) {
//           counter++;
//         }
//       } else if (col === row[j + 1] || col === arr[i][j + 1]) {
//         counter++;
//       }
//     }
//   }
//   console.log(counter);
// }
//---------------------------------------------------------

//------------------------------------------------------
// function equalNeighbors(arr) {
//   let counter = 0;

//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 1; j < arr[i].length; j++) {
//       if (arr[i][j] == arr[i + 1][j]) {
//         counter++;
//       }
//       if (arr[i][j] == arr[i][j - 1]) {
//         counter++;
//       }
//     }
//   }
//   for (let i = 0; i < arr[arr.length - 1].length; i++) {
//     if (arr[arr.length - 1][i] == arr[arr.length - 1][i + 1]) {
//       counter++;
//     }
//   }
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i][0] == arr[i + 1][0]) {
//       counter++;
//     }
//   }
//   console.log(counter);
// }
