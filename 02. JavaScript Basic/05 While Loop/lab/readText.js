function readText(input) {
  let index = 0;
  let command = input[index++];

  while (command !== "Stop") {
    console.log(command);
    command = input[index++];
  }
}

readText([
  "Nakov",
  "SoftUni",
  "Sofia",
  "Bulgaria",
  "SomeText",
  "Stop",
  "AfterStop",
  "Europe",
  "HelloWorld",
]);
readText([
  "Sofia",
  "Berlin",
  "Moscow",
  "Athens",
  "Madrid",
  "London",
  "Paris",
  "Stop",
  "AfterStop",
]);
