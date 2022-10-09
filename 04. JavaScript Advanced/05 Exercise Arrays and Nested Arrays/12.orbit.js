function orbit(arr) {
  let matrix = [];
  let matrixRow = arr[0];
  let matrixCell = arr[1];
  let coordinateRow = arr[2];
  let coordinateCell = arr[3];
  for (let i = 0; i < matrixCell; i++) {
    matrix.push([]);
  }
  for (let row = 0; row < matrixRow; row++) {
    for (let cell = 0; cell < matrixCell; cell++) {
      let rowNew = Math.abs(row - coordinateRow);
      let colNew = Math.abs(cell - coordinateCell);
      matrix[row][cell] = Math.max(rowNew, colNew) + 1;
    }
  }
  console.log(matrix.map((a) => a.join(" ")).join("\n"));
}

orbit([4, 4, 0, 0]);
orbit([5, 5, 2, 2]);
orbit([3, 3, 2, 2]);
