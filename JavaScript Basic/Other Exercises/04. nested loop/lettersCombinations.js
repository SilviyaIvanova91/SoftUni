function lettersCombinations(input) {
  let a = input[0].charCodeAt();
  let b = input[1].charCodeAt();
  let c = input[2].charCodeAt();
  let res = "";
  let count = 0;

  for (let i = a; i <= b; i++) {
    if (i === c) {
      continue;
    }
    for (let j = a; j <= b; j++) {
      if (j === c) {
        continue;
      }
      for (let k = a; k <= b; k++) {
        if (k === c) {
          continue;
        }
        res +=
          String.fromCharCode(i) +
          String.fromCharCode(j) +
          String.fromCharCode(k) +
          " ";
        count++;
      }
    }
  }
  res += count;
  console.log(res);
}

lettersCombinations(["a", "c", "b"]);
lettersCombinations(["f", "k", "h"]);
lettersCombinations(["a", "c", "z"]);
