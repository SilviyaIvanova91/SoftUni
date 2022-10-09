function passwordGenerator(input) {
  let firstString = input.shift();
  let secString = input.shift();
  let word = input.shift().split("");
  let newWord = firstString.concat(secString);
  let counter = 0;
  for (let el of newWord) {
    if (el == "a" || el == "o" || el == "i" || el == "e" || el == "u") {
      newWord = newWord.replace(el, word[counter].toUpperCase());
      counter++;
      if (word.length == counter) {
        counter = 0;
      }
    }
  }
  newWord = newWord.split("").reverse().join("");
  console.log(`Your generated password is ${newWord}`);
}

passwordGenerator(["ilovepizza", "ihatevegetables", "orange"]);
passwordGenerator(["easymoneyeazylife", "atleasttencharacters", "absolute"]);
passwordGenerator([
  "areyousureaboutthisone",
  "notquitebutitrustyou",
  "disturbed",
]);

//----------------------------------------
// function passwordGenerator(input) {
//   let vowels = ["a", "o", "i", "e", "u"];
//   let [firstString, secString, word] = input;
//   let newWord = firstString.concat(secString);
//   let reversedPassword = "";
//   word = word.toLowerCase();
//   let vouelIndex = 0;
//   for (let i = 0; i < newWord.length; i++) {
//     if (vowels.includes(newWord[i])) {
//       let indexOfChar = vouelIndex % word.length;
//       vouelIndex++;
//       let currChar = word.charAt(indexOfChar);
//       reversedPassword += currChar.toUpperCase();
//     } else {
//       reversedPassword += newWord[i];
//     }
//   }
//   reversedPassword = reversedPassword.split("").reverse().join("");
//   console.log(`Your generated password is ${reversedPassword}`);
// }
