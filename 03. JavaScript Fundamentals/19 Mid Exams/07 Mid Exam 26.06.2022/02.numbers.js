function numbers(arr) {
  let newLine = arr.shift().split(" ").map(Number);
  let command = arr.shift();

  while (command != "Finish") {
    command = command.split(" ");
    let value = Number(command[1]);
    if (command[0] == "Add") {
      newLine.push(value);
    } else if (command[0] == "Remove") {
      if (newLine.includes(value)) {
        let index = newLine.indexOf(value);
        newLine.splice(index, 1);
      }
    } else if (command[0] == "Replace") {
      let replacement = Number(command[2]);
      if (newLine.includes(value)) {
        let index = newLine.indexOf(value);
        newLine.splice(index, 1, replacement);
      }
    } else if (command[0] == "Collapse") {
      newLine = newLine.filter((a) => a >= value);
    }
    command = arr.shift();
  }
  console.log(newLine.join(" "));
}

numbers(["1 4 5 19", "Add 1", "Remove 4", "Finish"]);
numbers(["1 20 -1 10", "Collapse 8", "Finish"]);
numbers(["5 9 70 -56 9 9", "Replace 9 10", "Remove 9", "Finish"]);
