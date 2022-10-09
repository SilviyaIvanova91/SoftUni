function pascalCaseSplitter(input) {
  let newArr = [];
  for (let el of input) {
    let newEl = el.charCodeAt();
    if (el != input[0] && newEl >= 65 && newEl <= 90) {
      newArr.push(" ");
      newArr.push(el);
    } else {
      newArr.push(el);
    }
  }
  newArr = newArr.join("");
  newArr = newArr.split(" ");
  console.log(newArr.join(", "));
}

pascalCaseSplitter("SplitMeIfYouCanHaHaYouCantOrYouCan");
pascalCaseSplitter("HoldTheDoor");
pascalCaseSplitter("ThisIsSoAnnoyingToDo");

// function pascalCaseSplitter(input) {
//   let newArr = [];
//   let index = 1;
//   let end = input.length;
//   let cut = 0;
//   while (index < end) {
//     if (input.charCodeAt(index) >= 65 && input.charCodeAt(index) <= 90) {
//       newArr.push(input.slice(cut, input.length));
//       cut = index;
//     }

//     index++;
//   }
//   newArr.push(input.slice(cut, input.length));
//   for (let i = 1; i < newArr.length; i++) {
//     newArr[i - 1] = newArr[i - 1].replace(newArr[i], "");
//   }
//   console.log(newArr.join(", "));
// }
//-------------------------------
// function pascalCaseSplitter(input) {
//   let newArr = [];
//   let curWord = input[0];
//   for (let i = 1; i < input.length; i++) {
//     if (input[i].toUpperCase() !== input[i]) {
//       curWord = curWord.concat(input[i]);
//     } else {
//       newArr.push(curWord);
//       curWord = input[i];
//     }
//   }
//   newArr.push(curWord);
//   console.log(newArr.join(", "));
// }
