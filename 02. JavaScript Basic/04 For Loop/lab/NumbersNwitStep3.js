function numberWithStep(input) {
  let n = Number(input[0]);
  for (let i = 1; i <= n; i = i + 3) {
    console.log(i);
  }
}

numberWithStep(["10"]);
numberWithStep(["7"]);
numberWithStep(["15"]);
