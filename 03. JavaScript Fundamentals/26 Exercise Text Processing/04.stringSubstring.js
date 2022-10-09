function stringSubstring(word, text) {
  text = text.split(" ");
  let newStr = [];
  for (let el of text) {
    let myWord = el.toLowerCase();
    newStr.push(myWord);
  }
  if (newStr.includes(word)) {
    console.log(word);
  } else {
    console.log(`${word} not found!`);
  }
}

stringSubstring("javascript", "JavaScript is the best programming language");
stringSubstring("python", "JavaScript is the best programming language");

// function stringSubstring(word, text) {
//   text = text.split(" ");
//   for (let el of text) {
//     if (el.toLowerCase() == word.toLowerCase()) {
//       console.log(word);
//       return;
//     }
//   }
//   console.log(`${word} not found!`);
// }
//------------------------------------
// function stringSubstring(word, text) {
//   text = text.split(" ");
//   for (let el of text) {
//     if (word.toLowerCase() === el.toLowerCase()) {
//       console.log(word);
//       return;
//     }
//   }
//   console.log(`${word} not found!`);
// }
