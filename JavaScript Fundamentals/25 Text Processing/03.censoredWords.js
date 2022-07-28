function censoredWords(sentense, word) {
  let tokens = sentense.split(word);
  console.log(tokens.join("*".repeat(word.length)));
}

censoredWords("A small sentence with some words", "small");
censoredWords("Find the hidden word", "hidden");

//------------------------------------------------
// function censoredWords(sentense, word) {
//     while (sentense.includes(word)) {
//       sentense = sentense.replace(word, "*".repeat(word.length));
//     }
//     console.log(sentense);
//   }
