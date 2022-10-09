function modernTimesof(input) {
  input = input.split(" ");
  for (let el of input) {
    if (el.startsWith("#") && el.length > 1) {
      let flag = true;
      let wordLower = el.toLowerCase();
      for (let i = 1; i < el.length; i++) {
        if (wordLower.charCodeAt(i) < 97 || wordLower.charCodeAt(i) > 122) {
          flag = false;
          break;
        }
      }
      if (flag) {
        // console.log(el.slice(1));
        console.log(el.substring(1));
      }
    }
  }
}

modernTimesof(
  "Nowadays everyone uses # to tag a #special125451 word in #socialMedia"
);
modernTimesof(
  "Nowadays everyone uses # to tag a #special word in #socialMedia"
);
modernTimesof(
  "The symbol # is known #variously in English-speaking #regions as the #number sign"
);

//---------------------------------------------------------------
// function modernTimesof(input) {
//   input = input.split(" ");
//   for (let el of input) {
//     if (el.startsWith("#") && el.length > 1) {
//       let asciiCod = el.charCodeAt(1);
//       let isLetter =
//         (asciiCod >= 65 && asciiCod <= 90) ||
//         (asciiCod >= 97 && asciiCod <= 122);
//       if (isLetter) {
//         el = el.substr(1, el.length);
//         console.log(el);
//       }
//     }
//   }
// }

///---------------------------------------------
// function modernTimes(input) {
//   let splited = input.split(" ");
//   let newArray = [];
//   for (word of splited) {
//     if (word.includes("#")) {
//       newArray.push(word);
//     }
//   }
//   let filtered = newArray.filter((x) => x.length > 1);

//   for (let input of filtered) {
//     let isWords = true;
//     for (let i = 1; i < input.length; i++) {
//       if (!isNaN(input[i])) {
//         isWords = false;
//       }
//     }
//     if (isWords) {
//       console.log(input.substring(1));
//     }
//   }
// }
