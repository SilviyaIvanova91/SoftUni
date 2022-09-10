function morseCodeUpgraded(input) {
  let code = input[0].split("|");
  let finalWord = [];
  while (code.length > 0) {
    let word = code.shift();
    let counterForZero = 0;
    let counterForOne = 0;
    word.split("").forEach((a) => {
      if (a == "0") {
        counterForZero++;
      }
    });
    word.split("").forEach((a) => {
      if (a == "1") {
        counterForOne++;
      }
    });
    let sum = counterForZero * 3 + counterForOne * 5;
    while (word.length > 0) {
      let counter = 1;
      word = word.split("");
      let a = word[0];
      if (a != word[counter]) {
        sum += 0;
        word.splice(0, 1);
      } else {
        while (a == word[counter]) {
          counter++;
        }
        sum += counter;
        word.splice(0, counter);
      }
      word = word.join("");
    }
    let char = String.fromCharCode(sum);
    finalWord.push(char);
  }
  console.log(finalWord.join(""));
}

morseCodeUpgraded(["111000001110000|111111110111111111"]);
morseCodeUpgraded([
  "01010101010101011|111001111100001111110|111001111100001111110|000011000011111010110|110010011010101011100|11110000000100110011010101|110001100101110101101",
]);
