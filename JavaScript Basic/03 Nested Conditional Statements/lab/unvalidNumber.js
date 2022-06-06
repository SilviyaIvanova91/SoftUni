function unvalidNumber(input) {
  let number = Number(input[0]);
  let isValid = (number >= 100 && number <= 200) || number === 0;
  if (!isValid) {
    console.log("invalid");
  } else {
    console.log("няма изход");
  }
}

unvalidNumber(["75"]);
unvalidNumber(["150"]);
unvalidNumber(["220"]);
unvalidNumber(["199"]);
unvalidNumber(["-1"]);
unvalidNumber(["100"]);
unvalidNumber(["200"]);
unvalidNumber(["0"]);
