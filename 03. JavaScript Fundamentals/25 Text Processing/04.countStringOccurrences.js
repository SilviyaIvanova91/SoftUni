function countStringOccurrences(sentense, word) {
  let txt = sentense.split(" ");
  let counter = 0;
  for (let el of txt) {
    if (el == word) {
      counter++;
    }
  }
  console.log(counter);
}

countStringOccurrences("This is a word and it also is a sentence", "is");
countStringOccurrences(
  "softuni is great place for learning new programming languages",
  "softuni"
);

//------------------------------------------
// function countStringOccurrences(sentense, word) {
//   let counter = sentense.split(" ").filter((x) => x == word);
//   console.log(counter.length);
// }

//----------------------------------------------
// function countStringOccurrences(sentense, word) {
//   word = ` ${word} `;
//   text = ` ${text} `;
//   let counter = 0;
//   let index = 0;
//   while (sentense.indexOf(word, index) != -1) {
//     counter++;
//     index = sentense.indexOf(word, index) + 1;
//   }
// }
