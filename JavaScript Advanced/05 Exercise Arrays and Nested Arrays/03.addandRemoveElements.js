function addandRemoveElements(arr) {
  let count = 0;
  let newArr = [];
  for (let el of arr) {
    count++;
    el == "add" ? newArr.push(count) : newArr.pop(count);
  }
  newArr.length != 0 ? console.log(newArr.join("\n")) : console.log(`Empty`);
}

addandRemoveElements(["add", "add", "add", "add"]);
addandRemoveElements(["add", "add", "remove", "add", "add"]);
addandRemoveElements(["remove", "remove", "remove"]);

//-------------------------------------------
// function addandRemoveElements(arr) {
//     let count = 0;
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//       count++;
//       if (arr[i] == "add") {
//         newArr.push(count);
//       } else if (arr[i] == "remove") {
//         newArr.pop(count);
//       }
//     }
//     newArr.length != 0 ? console.log(newArr.join("\n")) : console.log(`Empty`);
//   }
