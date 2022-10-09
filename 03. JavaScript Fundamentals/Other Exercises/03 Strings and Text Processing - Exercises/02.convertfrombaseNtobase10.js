function convertfrombaseNtobase10(input) {
  let token = input[0].split(" ");
  let baseN = Number(token[0]);
  let converted = token[1];
  let sum = 0;
  for (let i = 0; i < converted.length; i++) {
    sum +=
      Number(converted[i]) * Math.pow(Number(baseN), converted.length - i - 1);
  }
  console.log(sum);
}

convertfrombaseNtobase10(["7 13"]);
convertfrombaseNtobase10(["3 12201"]);
convertfrombaseNtobase10(["5 443"]);
convertfrombaseNtobase10(["4 33220"]);
convertfrombaseNtobase10(["9 4704"]);
