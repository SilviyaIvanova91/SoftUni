function hardWord(input) {
  let letter = input.shift();
  let word = input.shift();
  word = word.sort((a, b) => b.length - a.length);
  for (let el of word) {
    letter = letter.replace("_".repeat(el.length), el);
  }
  console.log(letter);
}

hardWord([
  "Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
  ["pie", "bring", "glad", "During", "amazing", "pharmacist", "sprained"],
]);

//---------------------------------------------
// function hardWord(input) {
//   let text = input[0];
//   let missingWords = input[1];
//   let underscores = [];
//   for (let el of missingWords) {
//     let underscore = "_".repeat(el.length);
//     underscores.push(underscore);
//   }
//   missingWords.sort((a, b) => b.length - a.length);
//   underscores.sort((a, b) => b.length - a.length);

//   for (let i = 0; i < underscores.length; i++) {
//     text = text.replace(underscores[i], missingWords[i]);
//   }
//   console.log(text);
// }
