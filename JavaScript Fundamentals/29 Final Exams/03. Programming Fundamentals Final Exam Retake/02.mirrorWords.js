function mirrorWords(input) {
  let regexp =
    /([@#]{1})(?<firstWord>[A-Za-z]{3,})\1{2}(?<secWord>[A-Za-z]{3,})/gm;
  let match = regexp.exec(input);
  let count = 0;
  let words = [];
  if (match == null) {
    console.log(`No word pairs found!`);
  } else {
    while (match != null) {
      words.push(match.groups.firstWord, match.groups.secWord);
      count++;
      match = regexp.exec(input);
    }
  }
  if (count != 0) {
    console.log(`${count} word pairs found!`);
  }
  let finalList = [];
  for (let i = 0; i < words.length; i += 2) {
    let newWord = words[i].split("").reverse().join("");
    if (newWord == words[i + 1]) {
      finalList.push(`${words[i]} <=> ${words[i + 1]}`);
    }
  }
  if (finalList.length == 0) {
    console.log(`No mirror words!`);
  } else {
    console.log(`The mirror words are: \n${finalList.join(", ")}`);
  }
}

mirrorWords([
  "@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r",
]);
mirrorWords(["#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@"]);
mirrorWords(["#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#"]);
