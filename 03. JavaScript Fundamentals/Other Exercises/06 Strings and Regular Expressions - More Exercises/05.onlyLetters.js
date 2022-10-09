function onlyLetters(input) {
  let word = input[0];
  let regexp = /\d+/gm;
  let match = regexp.exec(word);
  while (match != null) {
    let index = word.indexOf(match[0]);
    let length = match[0].length;
    if (index + length == word.length) {
      match = regexp.exec(word);
      continue;
    } else {
      word = word.split("");
      word.splice(index, length, word[index + length]);
      word = word.join("");
      match = regexp.exec(word);
    }
  }
  console.log(word);
}

onlyLetters(["ChangeThis12andThis56k"]);
onlyLetters(["1Beware72ForThe4End88888"]);
