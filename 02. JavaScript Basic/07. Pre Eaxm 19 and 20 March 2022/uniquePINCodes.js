function uniquePINCodes(input) {
  let index = 0;
  let n1 = Number(input[index++]);
  let n2 = Number(input[index++]);
  let n3 = Number(input[index++]);

  for (let a = 2; a <= n1; a += 2) {
    for (let b = 2; b <= n2; b++) {
      for (let c = 2; c <= n3; c += 2) {
        if (b === 2 || b === 3 || b === 5 || b === 7) {
          if (a % 2 === 0 && c % 2 === 0) {
            command = `${a} ${b} ${c}`;
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
