function worldTour(input) {
  let allStops = input.shift();
  let line = input.shift();
  while (line != "Travel") {
    let token = line.split(":");
    let command = token[0].trim();
    if (command == "Add Stop") {
      let index = Number(token[1]);
      let string = token[2];
      if (index >= 0 && index <= allStops.length) {
        allStops = allStops.split("");
        allStops.splice(index, 0, string);
        allStops = allStops.join("");
      }
    } else if (command == "Remove Stop") {
      let startI = Number(token[1]);
      let endI = Number(token[2]);
      if (
        startI >= 0 &&
        startI < allStops.length &&
        endI >= 0 &&
        endI < allStops.length &&
        startI <= endI
      ) {
        let delited = endI - startI + 1;
        allStops = allStops.split("");
        allStops.splice(startI, delited);
        allStops = allStops.join("");
      }
    } else if (command == "Switch") {
      let oldStr = token[1];
      let newStr = token[2];
      if (oldStr != newStr) {
        if (allStops.includes(oldStr)) {
          allStops = allStops.replace(oldStr, newStr);
        }
      }
    }
    console.log(allStops);
    line = input.shift();
  }
  console.log(`Ready for world tour! Planned stops: ${allStops}`);
}

worldTour([
  "Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel",
]);

//-------------------------------------------------------------
// function worldTour(input) {
//   let myObj = {
//     AddStop: function (index, value, initalStr) {
//       startIndex = Number(index);
//       if (startIndex < 0 || startIndex >= initalStr.length) {
//         return initalStr;
//       }
//       let firstPart = initalStr.slice(0, startIndex);
//       let secPart = initalStr.slice(startIndex);
//       initalStr = firstPart + value + secPart;
//       return initalStr;
//     },
//     RemoveStop: function (startIndex, endIndex, initalStr) {
//       startIndex = Number(startIndex);
//       endIndex = Number(endIndex);
//       if (!initalStr[startIndex] || !initalStr[endIndex]) {
//         return initalStr;
//       }
//       let substr = initalStr.substring(startIndex, endIndex + 1);
//       return initalStr.replace(substr, "");
//     },
//     Switch: function (oldValue, newValue, initalStr) {
//       let pattern = new RegExp(oldValue, "g");
//       return initalStr.replace(pattern, newValue);
//     },
//   };

//   let initalStr = input.shift();
//   let line = input.shift();

//   while (line != "Travel") {
//     let [command, firistParam, lastParam] = line.split(":");
//     let startIndex;
//     let endIndex;
//     command = command.split(" ").join("");
//     initalStr = myObj[command](firistParam, lastParam, initalStr);
//     console.log(initalStr);

//     line = input.shift();
//   }
//   console.log(`Ready for world tour! Planned stops: ${initalStr}`);
// }

//-----------------------------------------
// function worldTour(input) {
//   let initalStr = input.shift();
//   let line = input.shift();
//   while (line != "Travel") {
//     let [command, firistParam, lastParam] = line.split(":");
//     switch (command) {
//       case "Add Stop":
//         initalStr = addStop(firistParam, lastParam, initalStr);
//         console.log(initalStr);
//         break;
//       case "Remove Stop":
//         initalStr = removeStop(firistParam, lastParam, initalStr);
//         console.log(initalStr);
//         break;
//       case "Switch":
//         initalStr = switchValue(firistParam, lastParam, initalStr);
//         console.log(initalStr);
//         break;
//     }
//     line = input.shift();
//   }
//   console.log(`Ready for world tour! Planned stops: ${initalStr}`);

//   function addStop(index, value, initalStr) {
//     startIndex = Number(index);
//     if (startIndex < 0 || startIndex >= initalStr.length) {
//       return initalStr;
//     }
//     let firstPart = initalStr.slice(0, startIndex);
//     let secPart = initalStr.slice(startIndex);
//     initalStr = firstPart + value + secPart;
//     return initalStr;
//   }

//   function removeStop(startIndex, endIndex, initalStr) {
//     startIndex = Number(startIndex);
//     endIndex = Number(endIndex);
//     if (!initalStr[startIndex] || !initalStr[endIndex]) {
//       return initalStr;
//     }
//     let substr = initalStr.substring(startIndex, endIndex + 1);
//     return initalStr.replace(substr, "");
//   }

//   function switchValue(oldValue, newValue, initalStr) {
//     let pattern = new RegExp(oldValue, "g");
//     return initalStr.replace(pattern, newValue);
//   }
// }

//-------------------------------------------------
// function worldTour(input) {
//   let initalStr = input.shift();
//   let line = input.shift();
//   while (line != "Travel") {
//     let [command, firistParam, lastParam] = line.split(":");
//     let startIndex;
//     let endIndex;
//     switch (command) {
//       case "Add Stop":
//         if (startIndex < 0 || startIndex >= initalStr.length) {
//           console.log(initalStr);
//           break;
//         }
//         startIndex = Number(firistParam);
//         let value = lastParam;
//         let firstPart = initalStr.slice(0, startIndex);
//         let secPart = initalStr.slice(startIndex);
//         initalStr = firstPart + value + secPart;
//         console.log(initalStr);
//         break;
//       case "Remove Stop":
//         startIndex = Number(firistParam);
//         endIndex = Number(lastParam);
//         if (!initalStr[startIndex] || !initalStr[endIndex]) {
//           console.log(initalStr);
//           break;
//         }
//         let substr = initalStr.substring(startIndex, endIndex + 1);
//         initalStr = initalStr.replace(substr, "");
//         console.log(initalStr);
//         break;
//       case "Switch":
//         let oldValue = firistParam;
//         let newValue = lastParam;
//         let pattern = new RegExp(oldValue, "g");
//         initalStr = initalStr.replace(pattern, newValue);
//         console.log(initalStr);
//         break;
//     }
//     line = input.shift();
//   }
//   console.log(`Ready for world tour! Planned stops: ${initalStr}`);
// }

//-----------------------------------------
// function worldTour(input) {
//     let allStops = input.shift();
//     for (let line of input) {
//       if (line == "Travel") {
//         break;
//       }
//       let token = line.split(":");
//       let command = token[0].trim();
//       if (command == "Add Stop") {
//         let index = Number(token[1]);
//         let string = token[2];
//         if (index >= 0 && index <= allStops.length) {
//           allStops = allStops.split("");
//           allStops.splice(index, 0, string);
//           allStops = allStops.join("");
//         }
//       } else if (command == "Remove Stop") {
//         let startI = Number(token[1]);
//         let endI = Number(token[2]);
//         if (
//           startI >= 0 &&
//           startI < allStops.length &&
//           endI >= 0 &&
//           endI < allStops.length
//         ) {
//           let delited = endI - startI + 1;
//           allStops = allStops.split("");
//           allStops.splice(startI, delited);
//           allStops = allStops.join("");
//         }
//       } else if (command == "Switch") {
//         let oldStr = token[1];
//         let newStr = token[2];
//         let offset = 0;
//         while (allStops.indexOf(oldStr, offset > 0)) {
//           let a = allStops.indexOf(oldStr, offset);
//           offset = allStops.indexOf(oldStr, offset) + newStr.length;
//         }
//       }
//       console.log(allStops);
//     }
//     console.log(`Ready for world tour! Planned stops: ${allStops}`);
//   }
