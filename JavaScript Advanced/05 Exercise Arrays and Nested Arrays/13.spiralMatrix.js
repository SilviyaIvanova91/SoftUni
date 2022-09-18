function spiralMatrix(row, col) {
  let matrix = [];
  for (let i = 0; i < row; i++) {
    matrix.push([]);
  }
  let startRow = 0;
  let startCol = 0;
  let endRow = row - 1;
  let endCol = col - 1;
  let num = 1;
  while (startCol <= endCol) {
    for (let i = startCol; i <= endCol; i++) {
      matrix[startRow][i] = num++;
    }
    for (let i = startRow + 1; i <= endRow; i++) {
      matrix[i][endCol] = num++;
    }
    for (let i = endCol - 1; i >= startCol; i--) {
      matrix[endRow][i] = num++;
    }
    for (let i = endRow - 1; i > startRow; i--) {
      matrix[i][startCol] = num++;
    }
    startRow++;
    startCol++;
    endRow--;
    endCol--;
  }
  console.log(matrix.map((a) => a.join(" ")).join("\n"));
}

spiralMatrix(5, 5);
spiralMatrix(3, 3);
