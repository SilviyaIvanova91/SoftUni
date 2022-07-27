function wordTracker(input) {
  let words = input.shift().split(" ");
  let res = {};
  for (let word of words) {
    res[word] = 0;
  }
  for (let word of input) {
    if (res.hasOwnProperty(word)) {
      res[word]++;
    }
  }
  let sorted = Object.entries(res);
  sorted.sort((a, b) => b[1] - a[1]);

  for (let [key, value] of sorted) {
    console.log(key, "-", value);
  }
}

wordTracker([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
wordTracker([
  "is the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "the",
  "And",
  "finally",
  "the",
  "the",
  "sentence",
]);

//-----------------------------------------------
// function wordTracker(input) {
//   let words = input.shift().split(" ");
//   let res = new Map();
//   for (let word of words) {
//     res.set(word, 0);
//   }
//   for (let word of input) {
//     if (res.has(word)) {
//       let oldValue = res.get(word);
//       res.set(word, oldValue + 1);

// или -----res.set(word, res.get(word) + 1);
//     }
//   }
//   let sorted = Array.from(res).sort((a, b) => b[1] - a[1]);
//   for (let [key, value] of sorted) {
//     console.log(key, "-", value);
//   }
// }

//-----------------------------------------------
// function wordTracker(input) {
//   let words = input.shift().split(" ");
//   let res = {};

//   words.forEach((word) => (res[word] = 0));
//   input.forEach((word) => {
//     if (res.hasOwnProperty(word)) {
//       res[word]++;
//     }
//   });

//   let sorted = Object.entries(res);
//   sorted.sort((a, b) => b[1] - a[1]);

//   for (let [word, res] of sorted) {
//     console.log(word, "-", res);
//   }
// }
