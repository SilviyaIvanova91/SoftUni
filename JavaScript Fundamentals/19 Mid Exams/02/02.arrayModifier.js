function arrayModifier(arr) {
  let newValues = arr.shift().split(" ");
  let command = arr.shift();

  while (command != "end") {
    command = command.split(" ");
    if (command[0] == "swap") {
      let temp = newValues[command[1]];
      newValues[command[1]] = newValues[command[2]];
      newValues[command[2]] = temp;
    } else if (command[0] == "multiply") {
      let newEl = newValues[command[1]] * newValues[command[2]];
      newValues.splice(command[1], 1, newEl);
    } else if (command[0] == "decrease") {
      newValues = newValues.map((a) => a - 1);
    }
    command = arr.shift();
  }
  console.log(newValues.join(", "));
}

arrayModifier([
  "23 -2 321 87 42 90 -123",
  "swap 1 3",
  "swap 3 6",
  "swap 1 0",
  "multiply 1 2",
  "multiply 2 1",
  "decrease",
  "end",
]);
arrayModifier([
  "1 2 3 4",
  "swap 0 1",
  "swap 1 2",
  "swap 2 3",
  "multiply 1 2",
  "decrease",
  "end",
]);
