function safePasswordsGenerator(input) {
  let aPass = Number(input[0]);
  let bPass = Number(input[1]);
  let maxPass = Number(input[2]);
  let A = 35;
  let B = 64;
  let counter = 0;
  let aOut = "";
  let bOut = "";
  let res = "";
  let output = "";

  for (let x = 1; x <= aPass; x++) {
    for (let y = 1; y <= bPass; y++) {
      aOut = String.fromCharCode(A);
      bOut = String.fromCharCode(B);
      res = `${aOut}${bOut}${x}${y}${bOut}${aOut}`;
      output += `${res}|`;
      A++;
      B++;

      if (A === 56) {
        A = 35;
      }
      if (B === 97) {
        B = 64;
      }
      counter++;
      if (counter === maxPass) {
        break;
      }
    }
    if (maxPass <= counter) {
      break;
    }
  }
  console.log(output);
}

safePasswordsGenerator(["2", "3", "10"]);
safePasswordsGenerator(["20", "50", "10"]);
