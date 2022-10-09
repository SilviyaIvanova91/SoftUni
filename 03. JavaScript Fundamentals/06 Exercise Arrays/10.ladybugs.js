function ladyBugs(input) {
  let n = input.shift();
  let field = new Array(n).fill(0);
  //parse field
  let ladyBugIndex = input.shift().split(" ");
  for (let index of ladyBugIndex) {
    index = Number(index);
    if (index >= 0 && index < n) {
      field[index] = 1;
    }
  }

  for (let command of input) {
    //parse command
    //if direction is right -> add offset to current index
    // otherwise -> subtract offset from current index
    let tokens = command.split(" ");
    let startIndex = Number(tokens[0]);
    if (field[startIndex] == 1) {
      let currentIndex = startIndex;
      let direction = tokens[1];
      let offset = Number(tokens[2]);
      if (direction == "left") {
        offset *= -1;
      }

      //repet fly operation until
      //1)found empty space;
      //2) end of field
      while (
        currentIndex >= 0 &&
        currentIndex < n &&
        field[currentIndex] == 1
      ) {
        currentIndex += offset;
      }
      field[startIndex] = 0;
      if (currentIndex >= 0 && currentIndex < n) {
        field[currentIndex] = 1;
      }
    }
  }
  console.log(field.join(" "));
  //print result
}

ladyBugs([3, "0 1", "0 right 1", "2 right 1"]);
ladyBugs([3, "0 1 2", "0 right 1", "1 right 1", "2 right 1"]);
ladyBugs([5, "3", "3 left 2", "1 left -2"]);

//------------------------------------------------------
// function ladyBugs(array) {
//   let workingArray = array.slice();
//   let fieldSize = workingArray.shift();
//   let bugsPosition = workingArray.shift().split(" ");
//   let finalBugsArray = new Array(fieldSize).fill(0);

//   for (let position of bugsPosition) {
//     let currentBug = Number(position);
//     if (currentBug < 0 || currentBug >= fieldSize) {
//       continue;
//     }
//     finalBugsArray[currentBug] = 1;
//   }

//   for (let i = 0; i < workingArray.length; i++) {
//     let [ladybugIndex, command, jumpLength] = workingArray[i].split(" ");

//     ladybugIndex = Number(ladybugIndex);

//     if (
//       ladybugIndex < 0 ||
//       ladybugIndex >= finalBugsArray.length ||
//       finalBugsArray[ladybugIndex] !== 1
//     ) {
//       continue;
//     }

//     // Free Position
//     finalBugsArray[ladybugIndex] = 0;

//     jumpLength = Number(jumpLength);

//     if (command === "left") {
//       jumpLength = -jumpLength;
//     }

//     ladybugIndex += jumpLength;
//     while (ladybugIndex >= 0 && ladybugIndex < finalBugsArray.length) {
//       if (finalBugsArray[ladybugIndex] === 0) {
//         finalBugsArray[ladybugIndex] = 1;
//         break;
//       }
//       ladybugIndex += jumpLength;
//     }
//   }

//   console.log(finalBugsArray.join(" "));
// }

//-----------------------------------------------------------------------
// function ladyBugs(arr) {
//   let sizeofField = arr[0];
//   let initalIndex = arr[1];
//   initalIndex = initalIndex.split(" ");
//   let command = arr.slice(2);
//   let field = [];

//   for (let i = 0; i < sizeofField; i++) {
//     field.push(0);
//   }

//   for (let i = 0; i < initalIndex.length; i++) {
//     let position = Number(initalIndex[i]);
//     if (position > field.length - 1) {
//       continue;
//     }
//     field[position] = 1;
//   }

//   for (let i = 0; i < command.length; i++) {
//     let currentComand = command[i];
//     currentComand = currentComand.split(" ");

//     let position = Number(currentComand[0]);
//     let direction = currentComand[1];
//     let flyCount = Number(currentComand[2]);

//     if (field[position] === 0 || position < 0 || position > field.length - 1) {
//       continue;
//     }

//     field[position] = 0;

//     if (flyCount < 0) {
//       direction = direction === "right" ? "left" : "right";
//       flyCount = Math.abs(flyCount);
//     }

//     let nextPosition = 0;

//     if (direction === "right") {
//       nextPosition = position + flyCount;
//     } else if (direction === "left") {
//       nextPosition = position - flyCount;
//     }

//     while (field[nextPosition] === 1) {
//       if (direction === "right") {
//         nextPosition += flyCount;
//       } else if (direction === "left") {
//         nextPosition -= flyCount;
//       }
//     }

//     if (nextPosition > field.length - 1 || nextPosition < 0) {
//       continue;
//     }
//     field[nextPosition] = 1;
//   }
//   console.log(field.join(" "));
// }

//--------------------------------------------------------------------
// function ladyBugs(arr) {
//   let sizeOfField = arr[0];
//   let ladybugsPositions = arr[1].split(" ").map(Number);
//   let ladybugsArray = [];

//   // fill the array with 0
//   for (let i = 0; i < sizeOfField; i++) {
//     ladybugsArray.push(0);
//   }
//   // mark starting ladybugs index
//   for (let i = 0; i < sizeOfField; i++) {
//     let ladybugIndex = ladybugsPositions[i];
//     if (ladybugIndex >= 0 && ladybugIndex < sizeOfField) {
//       ladybugsArray[ladybugIndex] = 1;
//     }
//   }

//   for (let i = 2; i < arr.length; i++) {
//     // JS destructuring
//     let [ladybugIndex, command, jumpLength] = arr[i].split(" ");
//     ladybugIndex = +ladybugIndex;
//     jumpLength = +jumpLength;

//     if (
//       ladybugsArray[ladybugIndex] !== 1 ||
//       ladybugIndex < 0 ||
//       ladybugIndex >= ladybugsArray.length
//     ) {
//       continue;
//     }
//     // check for negative steps
//     if (jumpLength < 0) {
//       jumpLength = Math.abs(jumpLength);
//       if (command === "right") {
//         command = "left";
//       } else if (command === "left") {
//         command = "right";
//       }
//     }
//     // Free Position
//     ladybugsArray[ladybugIndex] = 0;
//     if (command === "right") {
//       // Ladybug jumps one time
//       let newPosition = ladybugIndex + jumpLength;
//       // Jump another time if there is a lady bug
//       if (ladybugsArray[newPosition] === 1) {
//         newPosition = newPosition + jumpLength;
//       }
//       if (newPosition <= ladybugsArray.length) {
//         ladybugsArray[newPosition] = 1;
//       }
//     } else {
//       // Lady bug jumps to the left
//       let newPosition = ladybugIndex - jumpLength;
//       // Jump another time if there is a lady bug
//       if (ladybugsArray[newPosition] === 1) {
//         newPosition = newPosition - jumpLength;
//       }
//       if (newPosition >= 0) {
//         ladybugsArray[newPosition] = 1;
//       }
//     }
//   }

//   console.log(ladybugsArray.join(" "));
// }

//-------------------------------------------------------------------------

// function ladybugs(array) {
//   let workingArray = array.slice();
//   let fieldSize = workingArray.shift();
//   let bugsPosition = workingArray.shift().split(" ");
//   let finalBugsArray = new Array(fieldSize).fill(0);

//   for (let position of bugsPosition) {
//     let currentBug = Number(position);
//     if (currentBug < 0 || currentBug >= fieldSize) {
//       continue;
//     }
//     finalBugsArray[currentBug] = 1;
//   }

//   for (let i = 0; i < workingArray.length; i++) {
//     let [ladybugIndex, command, jumpLength] = workingArray[i].split(" ");

//     ladybugIndex = Number(ladybugIndex);

//     if (
//       ladybugIndex < 0 ||
//       ladybugIndex >= finalBugsArray.length ||
//       finalBugsArray[ladybugIndex] !== 1
//     ) {
//       continue;
//     }

//     // Free Position
//     finalBugsArray[ladybugIndex] = 0;

//     jumpLength = Number(jumpLength);

//     if (command === "left") {
//       jumpLength = -jumpLength;
//     }

//     ladybugIndex += jumpLength;
//     while (ladybugIndex >= 0 && ladybugIndex < finalBugsArray.length) {
//       if (finalBugsArray[ladybugIndex] === 0) {
//         finalBugsArray[ladybugIndex] = 1;
//         break;
//       }
//       ladybugIndex += jumpLength;
//     }
//   }

//   console.log(finalBugsArray.join(" "));
// }

// ladybugs([3, "0 1", "0 right 1", "2 right 1"]);
// ladybugs([3, "0 1 2", "0 right 1", "1 right 1", "2 right 1"]);
// ladybugs([5, "3", "3 left 2", "1 left -2"]);
