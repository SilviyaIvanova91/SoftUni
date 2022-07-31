function starEnigma(input) {
  let numMessages = Number(input.shift());
  let newMessage = [];
  for (let i = 0; i < numMessages; i++) {
    let count = 0;
    for (let el of input[i]) {
      let firstPattern = /[star]/gim;
      let firstMatch = firstPattern.exec(el);
      if (firstMatch != null) {
        count++;
      }
    }
    let newWord = [];
    for (let el of input[i]) {
      let newChar = el.charCodeAt();
      let char = String.fromCharCode(newChar - count);
      newWord.push(char);
    }
    newMessage.push(newWord.join(""));
  }
  let attacedPlanet = [];
  let destroyPlanet = [];
  for (let messge of newMessage) {
    let pattern =
      /@(?<planet>[A-za-z]+)[^@\-!:>]*:(?<planetPopulation>\d+)[^@\-!:>]*!(?<attackType>[AD])![^@\-!:>]*->(?<soldierCount>\d+)/gim;
    let matches = pattern.exec(messge);
    if (matches != null) {
      if (matches.groups.attackType == "A") {
        attacedPlanet.push(matches.groups.planet);
      } else if (matches.groups.attackType == "D") {
        destroyPlanet.push(matches.groups.planet);
      }
    }
  }
  let sortedA = attacedPlanet.sort((a, b) => a.localeCompare(b));
  console.log(`Attacked planets: ${sortedA.length}`);
  if (sortedA.length > 0) {
    sortedA.forEach((a) => console.log(`-> ${a}`));
  }
  let sortedD = destroyPlanet.sort((a, b) => a.localeCompare(b));
  console.log(`Destroyed planets: ${sortedD.length}`);
  if (sortedD.length > 0) {
    sortedD.forEach((a) => console.log(`-> ${a}`));
  }
}

starEnigma(["2", "STCDoghudd4=63333$D$0A53333", "EHfsytsnhf?8555&I&2C9555SR"]);
starEnigma([
  "3",
  "tt(''DGsvywgerx>6444444444%H%1B9444",
  "GQhrr|A977777(H(TTTT",
  "EHfsytsnhf?8555&I&2C9555SR",
]);

// function starEnigma(input) {
//   let message = Number(input.shift());
//   let regex = /@([A-Z][a-z]+)[^@\-!:>]*:\d+[^@\-!:>]*!(A|D)![^@\-!:>]*->\d+/;
//   let attacked = [];
//   let destroyed = [];
//   for (let i = 0; i < message; i++) {
//     let encoryptedMessage = input[i];
//     let count = encoryptedMessage
//       .toLowerCase()
//       .split("")
//       .filter(
//         (char) => char == "s" || char == "t" || char == "a" || char == "r"
//       ).length;
//     let decryptedMessage = encoryptedMessage
//       .split("")
//       .map((c) => String.fromCharCode(c.charCodeAt(0) - count))
//       .join("");
//     let regMatch = decryptedMessage.match(regex);

//     if (regMatch) {
//       if (regMatch[2] == "A") {
//         attacked.push(regMatch[1]);
//       } else if (regMatch[2] == "D") {
//         destroyed.push(regMatch[1]);
//       }
//     }
//   }
//   console.log(`Attacked planets: ${attacked.length}`);
//   Object.entries(attacked)
//     .sort((a, b) => a[1].localeCompare(b[1]))
//     .forEach((p) => console.log(`-> ${p[1]}`));
//   console.log(`Destroyed planets: ${destroyed.length}`);
//   Object.entries(destroyed)
//     .sort((a, b) => a[1].localeCompare(b[1]))
//     .forEach((p) => console.log(`-> ${p[1]}`));
// }
