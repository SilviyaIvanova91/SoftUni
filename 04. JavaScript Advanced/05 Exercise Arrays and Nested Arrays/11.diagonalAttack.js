function diagonalAttack(arr) {
  let matrix = arr.map((line) => line.split(" ").map(Number));
  let sumDigFirst = 0;
  let sumDigSec = 0;
  let length = matrix.length;

  for (let row = 0; row < length; row++) {
    for (let col = 0; col < length; col++) {
      if (row == col) {
        sumDigFirst += Number(matrix[row][col]);
        sumDigSec += Number(matrix[row][length - 1 - row]);
      }
    }
  }
  if (sumDigFirst == sumDigSec) {
    for (let row = 0; row < length; row++) {
      for (let col = 0; col < length; col++) {
        if (row != col && row != length - 1 - col) {
          matrix[row][col] = sumDigFirst;
        }
      }
    }
  }
  matrix.forEach((row) => console.log(row.join(" ")));
}

diagonalAttack([
  "5 3 12 3 1",
  "11 4 23 2 5",
  "101 12 3 21 10",
  "1 4 5 2 2",
  "5 22 33 11 1",
]);
diagonalAttack(["1 1 1", "1 1 1", "1 1 0"]);
