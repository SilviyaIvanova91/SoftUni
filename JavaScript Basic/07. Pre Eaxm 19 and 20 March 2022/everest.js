function everest(input) {
  let index = 0;
  let command = input[index++];
  let start = 5364;
  let final = 8848;
  let counter = 1;

  while (command !== "END") {
    let haveNight = command;
    if (haveNight === "Yes") {
      counter++;
    }
    let meters = Number(input[index++]);

    if (counter > 5) {
      break;
    }
    start += meters;

    if (start >= final) {
      break;
    }
    command = input[index++];
  }

  if (start >= final) {
    console.log(`Goal reached for ${counter} days!`);
  } else {
    console.log(`Failed!`);
    console.log(`${start}`);
  }
}

everest(["Yes", "1254", "Yes", "1402", "No", "250", "Yes", "635"]);
everest(["Yes", "1000", "Yes", "945", "No", "1200", "END"]);
everest(["Yes", "535", "Yes", "849", "Yes", "499", "Yes", "400", "Yes", "500"]);
everest(["Yes", "700", "END"]);
