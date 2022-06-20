function streamOfLetters(input) {
  let validLetters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let isC = false;
  let isO = false;
  let isN = false;

  let secret = "";
  let secretWord = "";
  let i = 0;

  while (i < input.length) {
    let currentSumbol = input[i];

    for (let i = 0; i < validLetters.length; i++) {
      if (isC === true && isO === true && isN === true) {
        secret += secretWord + " ";
        secretWord = "";
        isC = false;
        isO = false;
        isN = false;
      }

      let currentChar = validLetters[i];
      let isValid = currentSumbol === currentChar;
      if (isValid) {
        if (currentChar === "c") {
          if (isC === false) {
            isC = true;
          } else {
            secretWord += currentChar;
          }
        } else if (currentChar === "o") {
          if (isO === false) {
            isO = true;
          } else {
            secretWord += currentChar;
          }
        } else if (currentChar === "n") {
          if (isN === false) {
            isN = true;
          }
        } else {
          secretWord += currentChar;
        }
      }
    }

    i++;
  }
  console.log(secret);
}

streamOfLetters([
  "H",
  "n",
  "e",
  "l",
  "l",
  "o",
  "o",
  "c",
  "t",
  "c",
  "h",
  "o",
  "e",
  "r",
  "e",
  "n",
  "e",
  "End",
]);
streamOfLetters([
  "%",
  "!",
  "c",
  "^",
  "B",
  "`",
  "o",
  "%",
  "o",
  "o",
  "M",
  ")",
  "{",
  "n",
  "/",
  "A",
  "D",
  "End",
]);

streamOfLetters([
  "o",
  "S",
  "%",
  "o",
  "l",
  "^",
  "v",
  "e",
  "c",
  "n",
  "&",
  "m",
  "e",
  "c",
  "o",
  "n",
  "End",
]);

// function streamOfLetters(input) {
//   let index = 0;
//   let letter = input[index++];

//   let nIsAppeared = false;
//   let cIsAppeared = false;
//   let oIsAppeared = false;
//   let printLine = "";
//   let newWord = "";

//   while (letter !== "End") {
//     let firstCondition =
//       letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90;
//     let secondCondition =
//       letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122;

//     if (firstCondition || secondCondition) {
//       if (letter === "n") {
//         if (nIsAppeared) {
//           newWord += letter;
//         }
//         nIsAppeared = true;
//       } else if (letter === "c") {
//         if (cIsAppeared) {
//           newWord += letter;
//         }
//         cIsAppeared = true;
//       } else if (letter === "o") {
//         if (oIsAppeared) {
//           newWord += letter;
//         }
//         oIsAppeared = true;
//       } else {
//         newWord += letter;
//       }

//       if (nIsAppeared && cIsAppeared && oIsAppeared) {
//         printLine += `${newWord}`;
//         newWord = " ";
//         nIsAppeared = false;
//         cIsAppeared = false;
//         oIsAppeared = false;
//       }
//     }
//     letter = input[index++];
//   }
//   console.log(printLine);
// }

// --------------------------------------------------------

// function streamOfLetters(input) {
//   let str = input.filter((line) => line.match(/^[a-z]$/i)).join("");
//   const getIndexes = (text) => [
//     text.search(/n/),
//     text.search(/o/),
//     text.search(/c/),
//   ];

//   let message = "";

//   let indexes;
//   while (Math.min(...(indexes = getIndexes(str))) >= 0) {
//     let chars = Math.max(...indexes) + 1;

//     let word = str
//       .substring(0, chars)
//       .replace(/n/, "")
//       .replace(/o/, "")
//       .replace(/c/, "");

//     message += word + " ";

//     str = str.substring(chars);
//   }
//   console.log(message);
// }
