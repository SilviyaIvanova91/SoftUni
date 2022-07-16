function memoryGame(arr) {
  let arrNum = arr.shift().split(" ");
  let command = arr.shift();
  let counter = 0;
  while (command != "end") {
    command = command.split(" ");
    let firstIndex = Number(command[0]);
    let secondIndex = Number(command[1]);
    if (
      firstIndex >= arrNum.length ||
      secondIndex >= arrNum.length ||
      firstIndex < 0 ||
      secondIndex < 0 ||
      firstIndex == secondIndex
    ) {
      console.log(`Invalid input! Adding additional elements to the board`);
      counter++;
      let newEl = `-${counter}a`;
      arrNum.splice(arrNum.length / 2, 0, newEl, newEl);
    } else if (arrNum[firstIndex] == arrNum[secondIndex]) {
      counter++;
      console.log(
        `Congrats! You have found matching elements - ${arrNum[firstIndex]}!`
      );
      if (firstIndex > secondIndex) {
        arrNum.splice(firstIndex, 1);
        arrNum.splice(secondIndex, 1);
      } else if (firstIndex < secondIndex) {
        arrNum.splice(secondIndex, 1);
        arrNum.splice(firstIndex, 1);
      }

      if (arrNum.length == 0) {
        break;
      }
    } else if (arrNum[firstIndex] != arrNum[secondIndex]) {
      console.log(`Try again!`);
    }
    command = arr.shift();
  }
  if (arrNum.length > 0) {
    console.log(`Sorry you lose :(`);
    console.log(arrNum.join(" "));
  } else {
    console.log(`You have won in ${counter} turns!`);
  }
}

memoryGame(["1 1 2 2 3 3 4 4 5 5", "1 0", "-1 0", "1 0", "1 0", "1 0", "end"]);
memoryGame(["a 2 4 a 2 4", "0 3", "0 2", "0 1", "0 1", "end"]);
memoryGame(["a 2 4 a 2 4", "4 0", "0 2", "0 1", "0 1", "end"]);

//-----------------------------------------------------

// function memoryGame(input) {
//     let board = input.shift().split(' ');
//     let command = input.shift();
//     let turns = 1;

//     while (command !== 'end' && board.length > 0) {

//         let [first, second] = command.split(' ').map(Number);
//         //same as row 7
//         // let row = command.split(' ').map(Number);
//         // let first = row[0];
//         // let second = row[1];
//         let isInvalidInput = (first < 0 || first >= board.length) || (second < 0 || second >= board.length) || first === second;
//         if (isInvalidInput) {
//             console.log("Invalid input! Adding additional elements to the board");
//             let middleIndex = Math.floor(board.length / 2);
//             let elementToAdd = `-${turns}a-${turns}a`;
//             board.splice(middleIndex, 0, elementToAdd);
//         } else {
//             if (board[first] === board[second]) {
//                 console.log(`Congrats! You have found matching elements - ${board[first]}!`);
//                 board = board.filter(e => e !== board[first]);
//             } else {
//                 console.log("Try again!");
//             }
//         }

//         if (board.length === 0) {
//             console.log(`You have won in ${turns} turns!`);
//             break;
//         }

//         command = input.shift();
//         turns++;
//     }
//     if (board.length > 0) {
//         console.log(`Sorry you lose :(\n${board.join(' ')}`);
//     }
// }
