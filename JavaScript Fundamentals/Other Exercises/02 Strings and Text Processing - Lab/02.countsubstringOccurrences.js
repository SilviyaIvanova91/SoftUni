function countsubstringOccurrences(input) {
  let first = input[0];
  let word = input[1].toLowerCase();
  let counter = 0;
  for (let i = 0; i < first.length - word.length + 1; i++) {
    let serchW = first.slice(i, i + word.length).toLowerCase();
    if (word == serchW) {
      counter++;
    }
  }
  console.log(counter);
}

countsubstringOccurrences([
  "Welcome to the Software University (SoftUni)! Welcome to programming. Programming is wellness for developers, said Maxwell.",
  "wel",
]);
countsubstringOccurrences(["aaaaaa", "aa"]);
countsubstringOccurrences(["ababa caba", "aba"]);
countsubstringOccurrences(["Welcome to SoftUni", "Java"]);
