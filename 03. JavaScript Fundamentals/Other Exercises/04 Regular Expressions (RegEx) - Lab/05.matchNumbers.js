function matchNumbers(input) {
  let regExp = /(^|(?<=\s))-?\d+(\.\d+)?($|(?=\s))/gm;
  let match = regExp.exec(input[0]);
  let all = [];
  while (match != null) {
    all.push(match[0]);
    match = regExp.exec(input[0]);
  }
  console.log(all.join(" "));
}

matchNumbers([
  "1 -1 1s 123 s-s -123 _55_ _f 123.456 -123.456 s-1.1 s2 -1- zs-2 s-3.5",
]);
