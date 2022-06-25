function equalPairs(input) {
  let index = 0;
  let couples = Number(input[index++]);
  let lasttot = 0;
  let maxDiff = 0;
  let diff = 0;
  let total = 0;

  for (let i = 0; i < couples; i++) {
    let first = Number(input[index++]);
    let second = Number(input[index++]);
    total = first + second;
    diff = Math.abs(lasttot - total);
    if (diff > maxDiff && i !== 0) {
      maxDiff = diff;
    }
    lasttot = total;
    total = 0;
  }
  if (maxDiff === 0) {
    console.log(`Yes, value=${lasttot}`);
  } else {
    console.log(`No, maxdiff=${maxDiff}`);
  }
}

equalPairs(["3", "1", "2", "0", "3", "4", "-1"]);
equalPairs(["4", "1", "1", "3", "1", "2", "2", "0", "0"]);
equalPairs(["2", "-1", "0", "0", "-1"]);
equalPairs(["2", "1", "2", "2", "2"]);
equalPairs(["1", "5", "5"]);
equalPairs(["2", "-1", "2", "0", "-1"]);
