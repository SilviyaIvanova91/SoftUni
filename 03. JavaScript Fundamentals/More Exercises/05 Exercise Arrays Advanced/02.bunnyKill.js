function bunnyKill(arr) {
  let bombBunnyIndex = arr
    .pop()
    .split(" ")
    .map((str) => str.split(",").map(Number));
  let matrix = arr.map((a) => a.split(" ").map(Number));
  let sum = 0;
  let counter = 0;
  for (let k = 0; k < bombBunnyIndex.length; k++) {
    let first = bombBunnyIndex[k][0];
    let sec = bombBunnyIndex[k][1];
    let bomb = matrix[first][sec];
    if (bomb <= 0) {
      continue;
    }
    let startRow = Math.max(0, first - 1);
    let endRow = Math.min(first + 1, arr.length - 1);
    for (let i = startRow; i <= endRow; i++) {
      let startCol = Math.max(0, sec - 1);
      let endCol = Math.min(sec + 1, arr[i].length - 1);
      for (let j = startCol; j <= endCol; j++) {
        matrix[i][j] -= bomb;
      }
    }
    sum += bomb;
    counter++;
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > 0) {
        sum += matrix[i][j];
        counter++;
      }
    }
  }
  console.log(sum);
  console.log(counter);
}

bunnyKill(["10 10 10", "10 10 10", "10 10 10", "0,0"]);
bunnyKill([
  "5 10 15 20",
  "10 10 10 10",
  "10 15 10 10",
  "10 10 10 10",
  "2,2 0,1",
]);
