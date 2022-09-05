function playCatch(input) {
  let text = input.shift().split(" ").map(Number);
  for (let line of input) {
    let [command, startIndex, endIndex] = line.split(" ");
    startIndex = Number(startIndex);
    endIndex = Number(endIndex);
    if (command == "Replace") {
      if (endIndex != Number(endIndex)) {
        console.log(`The variable is not in the correct format!`);
      } else if (!text[startIndex]) {
        console.log(`The index does not exist!`);
      } else if (text[startIndex]) {
        text.splice(startIndex, 1, endIndex);
      }
    } else if (command == "Print") {
      if (endIndex != Number(endIndex) || startIndex != Number(startIndex)) {
        console.log(`The variable is not in the correct format!`);
      } else if (!text[startIndex] || !text[endIndex]) {
        console.log(`The index does not exist!`);
      } else if (text[startIndex] && text[endIndex]) {
        let newtxt = text.slice(startIndex, endIndex + 1);
        console.log(newtxt.join(", "));
      }
    } else if (command == "Show") {
      if (startIndex != Number(startIndex)) {
        console.log(`The variable is not in the correct format!`);
      } else if (!text[startIndex]) {
        console.log(`The index does not exist!`);
      } else if (text[startIndex]) {
        console.log(text[startIndex]);
      }
    }
  }
  console.log(text.join(", "));
}

playCatch([
  "1 2 3 4 5",
  "Replace 1 9",
  "Replace 6 3",
  "Show 3",
  "Show pesho",
  "Show 6",
]);
playCatch([
  "1 2 3 4 5",
  "Replace 3 9",
  "Print 1 4",
  "Print -3 12",
  "Print 1 5",
  "Show 3",
  "Show 12.3",
]);
