function combinations(input) {
  let n = Number(input[0]);
  let validCombinationsCount = 0;

  for (let x = 0; x <= n; x++) {
    for (let y = 0; y <= n; y++) {
      for (let a = 0; a <= n; a++) {
        if (x + y + a === n) {
          validCombinationsCount++;
        }
      }
    }
  }
  console.log(validCombinationsCount);
}

combinations(["25"]);
combinations(["20"]);
combinations(["5"]);
