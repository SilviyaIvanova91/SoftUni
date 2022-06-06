function numberIninterval(input) {
  let number = Number(input[0]);
  if (number >= -100 && number <= 100 && number != 0) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

numberIninterval(["-25"]);
numberIninterval(["0"]);
numberIninterval(["25"]);
