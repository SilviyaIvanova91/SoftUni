function replaceRepeatingChars(input) {
  let newarr = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== input[i - 1]) {
      newarr.push(input[i]);
    }
  }
  console.log(newarr.join(""));
}

replaceRepeatingChars("aaaaabbbbbcdddeeeedssaa");
replaceRepeatingChars("qqqwerqwecccwd");

// function replaceRepeatingChars(input) {
//   let index = 1;
//   let end = input.length;
//   let text = input[0];
//   while (index < end) {
//     if (input[index] !== input[index - 1]) {
//       text += input[index];
//     }
//     index++;
//   }
//   console.log(text);
// }
//----------------------------------------
// function replaceRepeatingChars(input) {
//   let newarr = "";
//   for (let i = 0; i < input.length; i++) {
//     let currChar = input.charAt(i);
//     let nextChar = input.charAt(i + 1);
//     if (currChar !== nextChar) {
//       newarr += currChar;
//     }
//   }
//   console.log(newarr);
// }
