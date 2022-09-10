function karateStrings(input) {
  let word = input[0];
  let regExp = /\d/gm;
  let mathces = regExp.exec(word);
  let counter = 0;
  while (mathces != null) {
    let index = word.indexOf(mathces);
    let num = Number(mathces[0]);
    counter += num;
    while (counter > 0 && word[index] != ">") {
      word = word.split("");
      word.splice(index, 1);
      word = word.join("");
      counter--;
    }
    mathces = regExp.exec(word);
  }
  console.log(word);
}

karateStrings(["abv>1>1>2>2asdasd"]);
karateStrings(["pesho>2sis>1a>2akarate>4hexmaster"]);
