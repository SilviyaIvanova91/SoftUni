function uniquePINCodes(input) {
  let a = Number(input[0]);
  let b = Number(input[1]);
  let c = Number(input[2]);
  let command = "";

  for (let i = 2; i <= a; i += 2) {
    for (let j = 2; j <= b; j++) {
      for (let k = 2; k <= c; k += 2) {
        if (j === 2 || j === 3 || j === 5 || b === 7) {
          if (i % 2 === 0 && k % 2 === 0) {
            command = `${i} ${j} ${k}`;
          }
        } else {
          continue;
        }
        console.log(command);
      }
    }
  }
}

uniquePINCodes(["3", "5", "5"]);
uniquePINCodes(["8", "2", "8"]);
