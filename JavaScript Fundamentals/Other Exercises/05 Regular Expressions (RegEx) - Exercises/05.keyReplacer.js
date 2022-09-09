function keyReplacer(input) {
  let firstStr = input.shift();
  let secStr = input.shift();
  let firstRegEx = /(start[<\|](?<word>[A-Za-z]+)[<\|]end)/gm;
  let firstmatch = firstRegEx.exec(firstStr);
  let allMatches = [];
  let secRegexp = /start(?!end)(?<word>.*?)end/g;
  let secMatch = secRegexp.exec(secStr);
  while (firstmatch != null) {
    allMatches.push(firstmatch.groups.word);
    firstRegEx.exec(firstStr);
  }
  while (secMatch != null) {
    allMatches.push(secMatch.groups.word);
    secMatch = secRegexp.exec(secStr);
  }
  if (allMatches.length == 0) {
    console.log(`Empty result`);
  } else {
    console.log(allMatches.join(""));
  }
}

keyReplacer([
  "start<213asfaas|end",
  "saaastarthelloendsdarstartFromTheOtherenddvsefdsfstartSideend",
]);
keyReplacer(["A|safafasfsadf|B", "NoMEssageABhereYeyAB"]);
