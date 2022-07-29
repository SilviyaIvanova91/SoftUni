function revealWords(word, text) {
  word = word.split(", ");
  for (let el of word) {
    let newWord = "*".repeat(el.length);
    if (text.includes(newWord)) {
      text = text.replace(newWord, el);
    }
  }
  console.log(text);
}

revealWords(
  "great",
  "softuni is ***** place for learning new programming languages"
);
revealWords(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);

//------------------------------------
// function revealWords(word, text) {
//   word = word.split(", ");
//   let newtext = text.split(" ");
//   for (let el of word) {
//     for (let w of newtext) {
//       if (w.includes("*") && w.length === el.length) {
//         text = text.replace(w, el);
//       }
//     }
//   }
//   console.log(text);
// }
