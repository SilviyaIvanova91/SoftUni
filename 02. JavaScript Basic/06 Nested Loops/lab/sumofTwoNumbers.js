function sumofTwoNumbers(input) {
  let start = Number(input[0]);
  let end = Number(input[1]);
  let n = Number(input[2]);

  let isFound = false;
  let counter = 0;

  for (let x = start; x <= end; x++) {
    for (let y = start; y <= end; y++) {
      counter++;
      let res = x + y;
      if (res === n) {
        console.log(`Combination N:${counter} (${x} + ${y} = ${n})`);
        isFound = true;
        break;
      }
    }
    if (isFound) {
      break;
    }
  }
  if (!isFound) {
    console.log(`${counter} combinations - neither equals ${n}`);
  }
}

sumofTwoNumbers(["1", "10", "5"]);
sumofTwoNumbers(["23", "24", "20"]);
sumofTwoNumbers(["88", "888", "1000"]);
sumofTwoNumbers(["88", "888", "2000"]);
