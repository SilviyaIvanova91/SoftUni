function diagonalAttack(arr) {
  let matrix = arr.map((a) => a.split(" ").map(Number));
  let firstDiagonalSum = 0;
  let secondDiagonalSum = 0;
  let length = matrix.length;
  for (let i = 0; i < length; i++) {
    firstDiagonalSum += matrix[i][i];
    secondDiagonalSum += matrix[i][length - 1 - i];
  }

  if (firstDiagonalSum == secondDiagonalSum) {
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        if (i != j && i != length - 1 - j) {
          matrix[i][j] = firstDiagonalSum;
        }
      }
    }
    for (let k = 0; k < length; k++) {
      console.log(matrix[k].join(" "));
    }
  } else {
    for (let k = 0; k < length; k++) {
      console.log(matrix[k].join(" "));
    }
  }
}

diagonalAttack([
  "5 3 12 3 1",
  "11 4 23 2 5",
  "101 12 3 21 10",
  "1 4 5 2 2",
  "5 22 33 11 1",
]);
diagonalAttack(["1 1 1", "1 1 1", "1 1 0"]);
