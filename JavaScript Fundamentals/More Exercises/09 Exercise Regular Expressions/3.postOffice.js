function postOffice(input) {
  let [firstPart, secPart, thirdPart] = input[0].split("|");
  let firstMatch = /([#$%*&])([A-Z]+)\1/g;
  let w = firstPart.match(firstMatch);
  let word = w[0].slice(1, w[0].length - 1).split("");
  let secMatchAsci = /\d{2}:\d{2}/g;
  let secMatch = secPart.match(secMatchAsci);
  thirdPart = thirdPart.split(" ");
  let info = {};
  for (let el of word) {
    if (!info.hasOwnProperty(el)) {
      el = el.charCodeAt();
      info[el] = 0;
    }
  }
  for (let el of secMatch) {
    let [char, len] = el.split(":").map(Number);
    if (info.hasOwnProperty(char)) {
      info[char] = len + 1;
    }
  }
  let key = Object.keys(info).map((a) => String.fromCharCode(a));
  let newArr = [];
  for (let el of thirdPart) {
    let length = el.length;
    if (length == info[el[0].charCodeAt()] && key.includes(el[0])) {
      newArr.push(el);
    }
  }
  for (let el of word) {
    for (let char of newArr) {
      if (el == char[0]) {
        console.log(char);
      }
    }
  }
}

postOffice([
  "sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|adsaArmyd Gara So La Arm Armyw21 Argo O daOfa Or Ti Sar saTheww The Parahaos",
]);
postOffice([
  'Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig',
]);

//----------------------------------
// function solve(input) {
//     input = input.join('');
//     let [firstPart, secondPart, thirdPart] = input.split('|');
//     let regexForFirstPart = /(\$([A-Z])+\$|\#[A-Z]+\#|\%[A-Z]+\%|\*[A-Z]+\*|\&[A-Z]+\&)/g
//     let regexForSecondPart = /([7-8][0-9]|90|65|66|67|68|69):([0-1][1-9]|20|10)/g
//     // Extracting the string that matches the regex
//     let capitalLetters = regexForFirstPart.exec(firstPart);
//     // Making it an array
//     capitalLetters = capitalLetters[1].split('');
//     // Removing the symbols
//     capitalLetters.shift();
//     capitalLetters.pop();
//     let lettersAndLengths = secondPart.match(regexForSecondPart);
//     let myMap = new Map();
//     for (let letter of capitalLetters) {
//         myMap.set(letter, 0)
//     }
//     let unique = [];
//     for (let combination of lettersAndLengths) {
//         let [letterAsciiCode, length] = combination.split(':');
//         letterAsciiCode = String.fromCharCode(letterAsciiCode);
//         if (!unique.includes(letterAsciiCode)) {
//             unique.push(letterAsciiCode);
//         } else {
//             continue;
//         }
//         length = Number(length) + 1;
//         if (myMap.has(letterAsciiCode)) {
//             myMap.set(letterAsciiCode, length);
//         }
//     }
//     thirdPart = thirdPart.split(' ');
//     for (let letter of capitalLetters) {
//         for (let word of thirdPart) {
//             if (letter === word[0] && word.length === myMap.get(letter)) {
//                 console.log(word);
//             }
//         }
//     }
// }
