function censorship(input) {
  let word = input.shift();
  let sentence = input.shift();
  while (sentence.includes(word)) {
    sentence = sentence.replace(word, "*".repeat(word.length));
  }
  console.log(sentence);
}

censorship(["money", "Show me the money"]);
censorship(["Doom", "Doom and Gloom"]);
censorship(["Java", "I love Java and JavaScript, but I hate Rxjava"]);
