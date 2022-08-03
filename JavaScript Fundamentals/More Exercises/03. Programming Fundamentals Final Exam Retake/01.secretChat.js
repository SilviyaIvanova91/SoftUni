function secretChat(input) {
  let message = input.shift();
  let line = input.shift();

  while (line != "Reveal") {
    let [command, firstInfo, secInfo] = line.split(":|:");
    if (command == "InsertSpace") {
      message = message.split("");
      message.splice(Number(firstInfo), 0, " ");
      message = message.join("");
    } else if (command == "Reverse") {
      if (message.includes(firstInfo)) {
        let index = message.indexOf(firstInfo);
        let length = firstInfo.length;
        message = message.split("");
        let word = message
          .slice(index, index + length)
          .reverse()
          .join("");
        let start = message.slice(0, index).join("");
        let end = message.slice(index + length, message.length).join("");
        message = start + end + word;
      } else {
        console.log(`error`);
        line = input.shift();
        continue;
      }
    } else if (command == "ChangeAll") {
      while (message.includes(firstInfo)) {
        message = message.replace(firstInfo, secInfo);
      }
    }
    console.log(message);
    line = input.shift();
  }
  console.log(`You have a new text message: ${message}`);
}

secretChat([
  "heVVodar!gniV",
  "ChangeAll:|:V:|:l",
  "Reverse:|:!gnil",
  "InsertSpace:|:5",
  "Reveal",
]);
secretChat([
  "Hiware?uiy",
  "ChangeAll:|:i:|:o",
  "Reverse:|:?uoy",
  "Reverse:|:jd",
  "InsertSpace:|:3",
  "InsertSpace:|:7",
  "Reveal",
]);
