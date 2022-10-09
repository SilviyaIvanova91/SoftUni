function punctuationFinder(input) {
  let arr = input[0].split("");
  let all = [];
  for (let el of arr) {
    if (el == "." || el == "," || el == "?" || el == "!" || el == ":") {
      all.push(el);
    }
  }
  console.log(all.join(", "));
}

punctuationFinder([
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
]);
