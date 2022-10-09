function train(arr) {
  let wagon = arr.shift().split(" ").map(Number);
  let capacity = Number(arr.shift());
  for (let i = 0; i < arr.length; i++) {
    let command = arr[i].split(" ");
    if (command[0] == "Add") {
      wagon.push(Number(command[1]));
    } else {
      for (let j = 0; j < wagon.length; j++) {
        if (wagon[j] + Number(command) <= capacity) {
          wagon[j] += command;
          break;
        }
      }
    }
  }
  console.log(wagon.join(" "));
}

train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
train(["0 0 0 10 2 4", "10", "Add 10", "10", "10", "10", "8", "6"]);

// function train(arr) {
//   let wagon = arr.shift().split(" ").map(Number);
//   let capacity = arr.shift();
//   for (let i = 0; i < arr.length; i++) {
//     let [command, num] = arr[i].split(" ");
//     if (command == "Add") {
//       num = Number(num);
//       add(num);
//     } else {
//       command = Number(command);
//       for (let j = 0; j < wagon.length; j++) {
//         if (wagon[j] + command <= capacity) {
//           wagon[j] += command;
//           break;
//         }
//       }
//     }
//   }
//   function add(el) {
//     wagon.push(el);
//   }
//   console.log(wagon.join(" "));
// }
// function train(arr) {
//     let wagon = arr.shift().split(" ").map(Number);
//     let capacity = arr.shift();
//     for (let com of arr) {
//       let currCommand =  com.split(" ")
//       if (currCommand[0] == "Add") {
//        wagon.push(Number(currCommand[1]))
//       } else {
//         for (let j = 0; j < wagon.length; j++) {
//           if (wagon[j] + Number(currCommand[0]) <= capacity) {
//             wagon[j] += Number(currCommand[0]);
//             break;
//           }
//         }
//       }
//     }
//     console.log(wagon.join(" "));
//   }
