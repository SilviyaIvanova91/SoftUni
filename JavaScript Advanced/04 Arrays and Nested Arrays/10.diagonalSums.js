function diagonalSums(matrix) {
  let firstDiagonal = 0;
  let secDiagonal = 0;
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (row == col) {
        firstDiagonal += Number(matrix[row][col]);
        let el = matrix[row].length - row - 1;
        secDiagonal += Number(matrix[row][el]);
      }
    }
  }
  console.log(`${firstDiagonal} ${secDiagonal}`);
}

diagonalSums([
  [20, 40],
  [10, 60],
]);
diagonalSums([
  [3, 5, 17],
  [-1, 7, 14],
  [1, -8, 89],
]);
