function secretDoorLock(input) {
  let maxS = Number(input[0]);
  let maxD = Number(input[1]);
  let maxE = Number(input[2]);

  for (let a = 2; a <= maxS; a++) {
    for (let b = 2; b <= maxD; b++) {
      for (let c = 2; c <= maxE; c++) {
        if (a % 2 === 0 && c % 2 === 0) {
          if (b === 2 || b === 3 || b === 5 || b === 7) {
            console.log(a + " " + b + " " + c);
          }
        }
      }
    }
  }
}

secretDoorLock(["3", "5", "5"]);
secretDoorLock(["8", "2", "8"]);
