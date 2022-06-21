function sumofTwoNumbers(input) {
  let start = Number(input[0]);
  let end = Number(input[1]);
  let magicNum = Number(input[2]);
  let counter = 0;
  let flag = false;

  for (let x = start; x <= end; x++) {
    for (let y = start; y <= end; y++) {
      counter++;
      if (x + y === magicNum) {
        console.log(`Combination N:${counter} (${x} + ${y} = ${magicNum})`);
        flag = true;
        break;
      }
    }
    if (flag === true) {
      break;
    }
  }
  if (flag === false) {
    console.log(`${counter} combinations - neither equals ${magicNum}`);
  }
}

sumofTwoNumbers(["1", "10", "5"]);
sumofTwoNumbers(["88", "888", "1000"]);
sumofTwoNumbers(["23", "24", "20"]);
sumofTwoNumbers(["88", "888", "2000"]);
