function evenPower(input) {
  let n = Number(input[0]);
  for (let i = 0; i <= n; i += 2) {
    let res = Math.pow(2, i);
    console.log(res);
  }
}

evenPower(["3"]);
evenPower(["4"]);
evenPower(["5"]);
evenPower(["6"]);
evenPower(["7"]);
