function wordOccurrences(input) {
  let res = new Map();

  for (let line of input) {
    if (!res.has(line)) {
      res.set(line, 0);
    }
    res.set(line, res.get(line) + 1);
  }
  let sorted = Array.from(res);
  sorted.sort((a, b) => b[1] - a[1]);
  for (let [word, words] of sorted) {
    console.log(`${word} -> ${words} times`);
  }
}

wordOccurrences([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);
wordOccurrences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);
