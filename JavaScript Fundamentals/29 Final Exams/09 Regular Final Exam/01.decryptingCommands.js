function decryptingCommands(input) {
  let message = input.shift();
  let line = input.shift();
  while (line != "Finish") {
    let [command, firstInfo, secInfo] = line.split(" ");
    if (command == "Replace") {
      while (message.includes(firstInfo)) {
        message = message.replace(firstInfo, secInfo);
      }
      console.log(message);
    } else if (command == "Cut") {
      let startIndex = Number(firstInfo);
      let endIndex = Number(secInfo);
      let wordLength = endIndex - startIndex + 1;
      if (startIndex >= 0 && endIndex < message.length) {
        message = message.split("");
        message.splice(startIndex, wordLength);
        message = message.join("");
        console.log(message);
      } else {
        console.log(`Invalid indices!`);
      }
    } else if (command == "Make") {
      if (firstInfo == "Upper") {
        message = message.toUpperCase();
      } else if (firstInfo == "Lower") {
        message = message.toLowerCase();
      }
      console.log(message);
    } else if (command == "Check") {
      if (message.includes(firstInfo)) {
        console.log(`Message contains ${firstInfo}`);
      } else {
        console.log(`Message doesn't contain ${firstInfo}`);
      }
    } else if (command == "Sum") {
      let startIndex = Number(firstInfo);
      let endIndex = Number(secInfo);
      let sum = 0;
      if (startIndex >= 0 && endIndex < message.length) {
        let word = message.slice(startIndex, endIndex + 1).split("");
        for (let i = 0; i < word.length; i++) {
          let num = Number(word[i].charCodeAt());
          sum += num;
        }
        console.log(sum);
      } else {
        console.log(`Invalid indices!`);
      }
    }
    line = input.shift();
  }
}

// decryptingCommands([
//   "ILikeSoftUni",
//   "Replace I We",
//   "Make Upper",
//   "Check SoftUni",
//   "Sum 1 4",
//   "Cut 1 4",
//   "Finish",
// ]);
decryptingCommands([
  "ILikeSoftUni",
  "Replace I We",
  "Make Upper",
  "Check SoftUni",
  "Sum 1 4",
  "Cut 1 4",
  "Finish",
]);

decryptingCommands([
  "HappyNameDay",
  "Replace p r",
  "Make Lower",
  "Cut 2 23",
  "Sum -2 2",
  "Finish",
]);

//---------------------------------------
// function decryptingCommands(input) {
//     let message = input.shift();
//     let line = input.shift();
//     while (line != "Finish") {
//       let [command, firstInfo, secInfo] = line.split(" ");
//       if (command == "Replace") {
//         while (message.includes(firstInfo)) {
//           message = message.replace(firstInfo, secInfo);
//         }
//         console.log(message);
//       } else if (command == "Cut") {
//         let startIndex = Number(firstInfo);
//         let endIndex = Number(secInfo);
//         if (message[startIndex] && message[endIndex]) {
//           message = message.split("");
//           let firsMess = message.splice(0, startIndex).join("");
//           let endMess = message.splice(endIndex, message.length).join("");
//           message = firsMess + endMess;
//           console.log(message);
//         } else {
//           console.log(`Invalid indices!`);
//         }
//       } else if (command == "Make") {
//         if (firstInfo == "Upper") {
//           message = message.toUpperCase();
//         } else if (firstInfo == "Lower") {
//           message = message.toLowerCase();
//         }
//         console.log(message);
//       } else if (command == "Check") {
//         if (message.includes(firstInfo)) {
//           console.log(`Message contains ${firstInfo}`);
//         } else {
//           console.log(`Message doesn't contain ${firstInfo}`);
//         }
//       } else if (command == "Sum") {
//         let startIndex = Number(firstInfo);
//         let endIndex = Number(secInfo);
//         let sum = 0;
//         if (message[startIndex] && message[endIndex]) {
//           let word = message.slice(startIndex, endIndex + 1).split("");
//           for (let i = 0; i < word.length; i++) {
//             let num = Number(word[i].charCodeAt());
//             sum += num;
//           }
//           console.log(sum);
//         } else {
//           console.log(`Invalid indices!`);
//         }
//       }
//       line = input.shift();
//     }
//   }
