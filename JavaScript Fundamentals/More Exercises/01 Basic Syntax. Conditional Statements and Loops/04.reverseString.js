function reverseString(newWord) {
  newWord = newWord.toString();
  newWord = newWord.split("");
  newWord = newWord.reverse();
  newWord = newWord.join("");
  console.log(newWord);
}

reverseString("Hello");
reverseString("SoftUni");
reverseString("12345");
