function theMostPowerfulWord(input) {
  let index = 0;
  let command = input[index++];
  let maxRes = Number.MIN_SAFE_INTEGER;
  let mostPowerful = "";
  let sum = 0;

  while (command !== "End of words") {
    let word = command;
    sum = 0;

    for (let i = 0; i < command.length; i++) {
      let letter = word[i];
      let symbol = letter.charCodeAt(0);
      sum += symbol;
    }
    if (
      command[0] === "a" ||
      command[0] === "A" ||
      command[0] === "e" ||
      command[0] === "E" ||
      command[0] === "i" ||
      command[0] === "I" ||
      command[0] === "o" ||
      command[0] === "O" ||
      command[0] === "u" ||
      command[0] === "U" ||
      command[0] === "y" ||
      command[0] === "Y"
    ) {
      sum = sum * command.length;
    } else {
      sum = Math.floor(sum / command.length);
    }

    if (sum > maxRes) {
      maxRes = sum;
      mostPowerful = word;
    }

    command = input[index++];
  }
  console.log(`The most powerful word is ${mostPowerful} - ${maxRes}`);
}

theMostPowerfulWord([
  "The",
  "Most",
  "Powerful",
  "Word",
  "Is",
  "Experience",
  "End of words",
]);
theMostPowerfulWord([
  "But",
  "Some",
  "People",
  "Say",
  "It's",
  "LOVE",
  "End of words",
]);
