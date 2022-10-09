function minNumber(input) {
  let index = 0;
  let command = input[index++];
  let minNumber = Number.MAX_SAFE_INTEGER;

  while (command !== "Stop") {
    let n = Number(command);

    if (minNumber > n) {
      minNumber = n;
    }
    command = input[index++];
  }
  console.log(minNumber);
}

minNumber(["100", "99", "80", "70", "Stop"]);
minNumber(["-10", "20", "-30", "Stop"]);
minNumber(["45", "-20", "7", "99", "Stop"]);
minNumber(["999", "Stop"]);
minNumber(["-1", "-2", "Stop"]);
