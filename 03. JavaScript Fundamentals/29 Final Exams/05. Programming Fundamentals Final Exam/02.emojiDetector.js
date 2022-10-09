function emojiDetector(input) {
  let dugutRegExp = /\d/gm;
  let allNumbers = dugutRegExp.exec(input[0]);
  let sum = 1;
  while (allNumbers != null) {
    sum *= allNumbers[0];
    allNumbers = dugutRegExp.exec(input[0]);
  }
  let regExpWord = /(\:{2}|\*{2})(?<word>[A-Z][a-z]{2,})(\1)/gm;
  let match = regExpWord.exec(input[0]);
  let strWord = [];
  let count = 0;
  while (match != null) {
    count++;
    let newSum = 0;
    let finalword = match.groups.word
      .split("")
      .forEach((a) => (newSum += a.charCodeAt()));
    if (newSum >= sum) {
      strWord.push(match[0]);
    }
    match = regExpWord.exec(input[0]);
  }
  console.log(`Cool threshold: ${sum}`);
  console.log(`${count} emojis found in the text. The cool ones are:`);
  console.log(strWord.join("\n"));
}

emojiDetector([
  "In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**",
]);
emojiDetector([
  "5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::",
]);
emojiDetector([
  "It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**.",
]);

// function emojiDetector(inp) {
//   let count = 0;
//   let pattern = /([::**]){2}([A-Z][a-z]{2,})(\1){2}/gm;
//   let patterndig = /\d/gm;
//   let matches = [];
//   let cooltreshold = 1;
//   let sumel = 0;
//   let validname = null;
//   let finallis = [];

//   while ((validname = patterndig.exec(inp)) !== null) {
//     cooltreshold *= Number(validname[0]);
//   }
//   while ((validname = pattern.exec(inp)) !== null) {
//     matches.push(validname[0]);
//     count++;
//   }
//   console.log(`Cool threshold: ${cooltreshold}`);
//   console.log(`${count} emojis found in the text. The cool ones are:`);
//   let WordsWithSymbols = matches.shift();

//   while (WordsWithSymbols != null) {
//     sumel = 0;
//     //removingthefirstandlastsymbols
//     //example: ::Shy:: = Shy
//     let WordsWithoutSymbols = WordsWithSymbols.slice(2, -2);
//     for (let el of WordsWithoutSymbols) {
//       sumel += el.charCodeAt();
//     }
//     if (sumel >= cooltreshold) {
//       finallis.push(WordsWithSymbols);
//     }
//     WordsWithSymbols = matches.shift();
//   }
//   console.log(finallis.join("\n"));
// }
