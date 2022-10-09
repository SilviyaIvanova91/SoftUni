function heartDelivery(arr) {
  let even = arr.shift().split("@").map(Number);
  let command = arr.shift();
  let position = 0;

  while (command !== "Love!") {
    command = command.split(" ");
    let jump = Number(command[1]);

    position += jump;
    if (position >= even.length) {
      position = 0;
    }

    if (even[position] === 0) {
      console.log(`Place ${position} already had Valentine's day.`);
    } else {
      even[position] -= 2;
      if (even[position] === 0) {
        console.log(`Place ${position} has Valentine's day.`);
      }
    }
    command = arr.shift();
  }

  console.log(`Cupid's last position was ${position}.`);

  let filtered = even.filter((x) => x > 0);
  if (filtered.length > 0) {
    console.log(`Cupid has failed ${filtered.length} places.`);
  } else {
    console.log(`Mission was successful.`);
  }
}

heartDelivery(["10@10@10@2", "Jump 1", "Jump 2", "Love!"]);
heartDelivery([
  "2@4@2",
  "Jump 2",
  "Jump 2",
  "Jump 8",
  "Jump 3",
  "Jump 1",
  "Love!",
]);
heartDelivery([
  "4@2@4@2",
  "Jump 1",
  "Jump 2",
  "Jump 1",
  "Jump 2",
  "Jump 2",
  "Jump 2",
  "Love!",
]);

// function heartDelivery(arr) {
//   let even = arr.shift().split("@").map(Number);
//   let command = arr.shift();
//   let position = 0;
//   let length = even.length;

//   while (command != "Love!") {
//     command = command.split(" ");
//     let move = command[0];
//     let jump = command[1];

//     while (jump > 0) {
//       position++;
//       if (position >= length) {
//         position = 0;
//         break;
//       }
//       jump--;
//     }
//     let action = even[position] - 2;
//     action = even.splice(position, 1, action);

//     if (even[position] == 0) {
//       console.log(`Place ${position} has Valentine's day.`);
//     } else if (even[position] < 0) {
//       console.log(`Place ${position} already had Valentine's day.`);
//     }

//     command = arr.shift();
//   }
//   console.log(`Cupid's last position was ${position}.`);
//   let filtered = even.filter((x) => x > 0);
//   if (filtered.length > 0) {
//     console.log(`Cupid has failed ${filtered.length} places.`);
//   } else {
//     console.log(`Mission was successful.`);
//   }
// }

//------------------------------------------------------
// function heartDelivery(arr) {
//   let even = arr.shift().split("@").map(Number);
//   let command = arr.shift();
//   let position = 0;
//   let length = even.length;
//   while (command != "Love!") {
//     command = command.split(" ");
//     let jump = Number(command[1]);
//     position += jump;

//     if (position >= length) {
//       position = 0;
//     }

//     let action = even[position] - 2;
//     action = even.splice(position, 1, action);

//     if (even[position] == 0) {
//       console.log(`Place ${position} has Valentine's day.`);
//     } else if (even[position] < 0) {
//       console.log(`Place ${position} already had Valentine's day.`);
//     }

//     command = arr.shift();
//   }
//   console.log(`Cupid's last position was ${position}.`);
//   let filtered = even.filter((x) => x > 0);
//   if (filtered.length > 0) {
//     console.log(`Cupid has failed ${filtered.length} places.`);
//   } else {
//     console.log(`Mission was successful.`);
//   }
// }

//-----------------------------------------------------------
// function heartDelivery(input = []) {
//   let houses = input.shift().split("@").map(Number);
//   let commands = input.shift();

//   let currentIndex = 0;

//   while (commands !== "Love!") {
//     let tokens = commands.split(" ");
//     let jumpLength = +tokens[1];

//     currentIndex += jumpLength;

//     if (currentIndex >= houses.length) {
//       currentIndex = 0;
//     }

//     if (houses[currentIndex] === 0) {
//       console.log(`Place ${currentIndex} already had Valentine's day.`);
//     } else {
//       houses[currentIndex] -= 2;
//       if (houses[currentIndex] === 0) {
//         console.log(`Place ${currentIndex} has Valentine's day.`);
//       }
//     }

//     commands = input.shift();
//   }

//   console.log(`Cupid's last position was ${currentIndex}.`);

//   let isSuccess = true;
//   let count = 0;

//   for (const house of houses) {
//     if (house !== 0) {
//       isSuccess = false;
//       count++;
//     }
//   }

//   if (isSuccess) {
//     console.log(`Mission was successful.`);
//   } else {
//     console.log(`Cupid has failed ${count} places.`);
//   }
// }
