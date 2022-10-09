function matchhexadecimalNumbers(input) {
  let regexp = /\b(?:0x)?[A-F0-9]+\b/gm;
  let match = regexp.exec(input[0]);
  let all = [];
  while (match != null) {
    all.push(match[0]);
    match = regexp.exec(input[0]);
  }
  console.log(all.join(" "));
}

matchhexadecimalNumbers([
  "1F 0xG 0x1F G 0x4G 4G 0xAB 0xFG FG 0x10   10 AB  FF",
]);
