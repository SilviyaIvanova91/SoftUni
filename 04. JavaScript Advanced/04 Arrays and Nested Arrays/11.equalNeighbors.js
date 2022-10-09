function equalNeighbors(matrix) {
  let counter = 0;
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (
        col != matrix[row].length - 1 &&
        matrix[row][col] === matrix[row][col + 1]
      ) {
        counter++;
      }
      if (
        row != matrix.length - 1 &&
        matrix[row][col] === matrix[row + 1][col]
      ) {
        counter++;
      }
    }
  }
  return counter;
}

console.log(
  equalNeighbors([
    ["2", "3", "4", "7", "0"],
    ["4", "0", "5", "3", "4"],
    ["2", "3", "5", "4", "2"],
    ["9", "8", "7", "5", "4"],
  ])
);
console.log(
  equalNeighbors([
    ["test", "yes", "yo", "ho"],
    ["well", "done", "yo", "6"],
    ["not", "done", "yet", "5"],
  ])
);

console.log(
  equalNeighbors([
    ["2", "2", "5", "7", "4"],
    ["4", "0", "5", "3", "4"],
    ["2", "5", "5", "4", "2"],
  ])
);

//----------------------------------------
// function equalNeighbors(matrix) {
//     let counter = 0;
//     for (let row = 0; row < matrix.length - 1; row++) {
//       for (let col = 0; col < matrix[row].length; col++) {
//         if (matrix[row][col] === matrix[row + 1][col]) {
//           counter++;
//         }
//       }
//     }
//     for (let row = 0; row < matrix.length; row++) {
//       for (let col = 0; col < matrix[row].length; col++) {
//         if (matrix[row][col] === matrix[row][col + 1]) {
//           counter++;
//         }
//       }
//     }
//     return counter;
//   }
