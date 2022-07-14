function arrayManipulations(arr) {
  let newArr = arr.shift().split(" ").map(Number);

  for (let i = 0; i < arr.length; i++) {
    let [arrN, firstNum, secondNum] = arr[i].split(" ");

    firstNum = Number(firstNum);
    secondNum = Number(secondNum);

    if (arrN === "Add") {
      add(firstNum);
    } else if (arrN === "Remove") {
      remove(firstNum);
    } else if (arrN === "RemoveAt") {
      removeAt(firstNum);
    } else if (arrN === "Insert") {
      insert(firstNum, secondNum);
    }
  }

  function add(el) {
    newArr.push(el);
  }
  function remove(num) {
    newArr = newArr.filter((el) => el !== num);
  }
  function removeAt(index) {
    newArr.splice(index, 1);
  }
  function insert(num, index) {
    newArr.splice(index, 0, num);
  }
  console.log(newArr.join(" "));
}

arrayManipulations([
  "4 19 2 53 6 43",
  "Add 3",
  "Remove 2",
  "RemoveAt 1",
  "Insert 8 3",
]);
arrayManipulations([
  "6 12 2 65 6 42",
  "Add 8",
  "Remove 12",
  "RemoveAt 3",
  "Insert 6 2",
]);

//-----------------------------------
// function arrayManipulations(arr) {
//     let newArr = arr.shift().split(" ").map(Number);

//     for (let i = 0; i < arr.length; i++) {
//       let [arrN, firstNum, secondNum] = arr[i].split(" ");

//       firstNum = Number(firstNum);
//       secondNum = Number(secondNum);

//       if (arrN === "Add") {
//         function add(el) {
//           newArr.push(el);
//         }
//       } else if (arrN === "Remove") {
//         function remove(num) {
//           newArr.newArr.filter((el) => el !== num);
//         }
//       } else if (arrN === "RemoveAt") {
//         function reoveAt(index) {
//           newArr.push(index, 1);
//         }
//       } else if (arrN === "Insert") {
//         function insert(num, index) {
//           newArr.splice(index, 0, num);
//         }
//       }
//     }
//   }
