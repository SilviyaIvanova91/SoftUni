function theImitationGame(input) {
  let message = input.shift();
  let line = input.shift();
  while (line != "Decode") {
    let [command, firstInfo, secInfo] = line.split("|");
    if (command == "Move") {
      let newM = message.slice(0, Number(firstInfo));
      let otherM = message.slice(Number(firstInfo));
      message = otherM + newM;
    } else if (command == "Insert") {
      message = message.split("");
      message.splice(Number(firstInfo), 0, secInfo);
      message = message.join("");
    } else if (command == "ChangeAll") {
      while (message.includes(firstInfo)) {
        message = message.replace(firstInfo, secInfo);
      }
    }
    line = input.shift();
  }
  console.log(`The decrypted message is: ${message}`);
}

theImitationGame([
  "owyouh",
  "Move|2",
  "Move|3",
  "Insert|3|are",
  "Insert|9|?",
  "Decode",
]);
theImitationGame(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);

//---------------------------------------
// function theImitationGame(input) {
//     let commands = {
//       Move,
//       Insert,
//       ChangeAll,
//     };
//     let message = input.shift();
//     while (input[0] !== "Decode") {
//       let line = input.shift();
//       let [name, param1, param2] = line.split("|");
//       let command = commands[name];
//       message = command(message, param1, param2);
//     }
//     console.log(`The decrypted message is: ${message}`);

//     function Move(str, num) {
//       let start = str.substring(0, num);
//       let end = str.substring(num);
//       return end + start;
//     }

//     function Insert(str, index, text) {
//       let start = str.substring(0, index);
//       let end = str.substring(index);
//       return start + text + end;
//     }

//     function ChangeAll(str, match, text) {
//       let tokens = str.split(match);
//       return tokens.join(text);
//     }
//   }
