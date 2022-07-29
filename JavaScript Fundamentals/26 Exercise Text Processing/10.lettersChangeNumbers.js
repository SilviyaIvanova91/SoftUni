function lettersChangeNumbers(text) {
  let word = text.split(" ").filter((a) => a !== "");
  let res = 0;
  for (let el of word) {
    el = el.split("");
    let letterBefore = el.shift();
    let letterAfter = el.pop();
    let num = Number(el.join(""));
    let charLBefore = letterBefore.charCodeAt();
    let charLAfter = letterAfter.charCodeAt();
    if (charLBefore >= 65 && charLBefore <= 90) {
      charLBefore -= 64;
      res += num / charLBefore;
    } else {
      charLBefore -= 96;
      res += num * charLBefore;
    }
    if (charLAfter >= 65 && charLAfter <= 90) {
      charLAfter -= 64;
      res -= charLAfter;
    } else {
      charLAfter -= 96;
      res += charLAfter;
    }
  }
  console.log(res.toFixed(2));
}

lettersChangeNumbers("A12b s17G");
lettersChangeNumbers("P34562Z q2576f   H456z");
lettersChangeNumbers("a1A");

// function lettersChangeNumbers(text) {
//   let words = text.split(" ").filter((el) => el !== "");
//   let totalSum = 0;
//   let isUpperCase = (Letter) => Letter.toUpperCase() === Letter;
//   let getAlpkabetPosition = (Letter) => Letter.charCodeAt(0) - 96;
//   words.forEach((word) => {
//     let letterBefore = word[0];
//     let letterAfter = word[word.length - 1];
//     let number = Number(word.substring(1, word.length - 1));
//     let beforePosition = getAlpkabetPosition(letterBefore.toLowerCase());
//     let afterPosition = getAlpkabetPosition(letterAfter.toLowerCase());

//     if (isUpperCase(letterBefore)) {
//       number /= beforePosition;
//     } else {
//       number *= beforePosition;
//     }

//     if (isUpperCase(letterAfter)) {
//       number -= afterPosition;
//     } else {
//       number += afterPosition;
//     }
//     totalSum += number;
//   });
//   console.log(totalSum.toFixed(2));
// }
