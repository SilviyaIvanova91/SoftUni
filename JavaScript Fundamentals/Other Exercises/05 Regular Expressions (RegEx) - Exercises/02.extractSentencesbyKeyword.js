function xtractSentencesbyKeyword(input) {
  let word = input.shift();
  let sentence = input[0].split(/[\?|\!|\.]/g);
  let regexp = new RegExp(`(?<!\\w)${word}(?=\\s)`);
  for (let el of sentence) {
    if (regexp.test(el)) {
      console.log(el.trim());
    }
  }
}

xtractSentencesbyKeyword([
  "to",
  "Welcome to SoftUni! You will learn programming, algorithms, problem solving and software technologies. You need to allocate for study 20-30 hours weekly. Good luck! I am fan of Motorhead. To be or not to be - that is the question. TO DO OR NOT?",
]);
