function thePianist(input) {
  let numPeaces = Number(input.shift());
  let list = {};
  for (let i = 0; i < numPeaces; i++) {
    let [piece, composer, key] = input.shift().split("|");
    list[piece] = { composer, key };
  }
  while (input[0] != "Stop") {
    let token = input.shift().split("|");
    let command = token[0];
    if (command == "Add") {
      let piece = token[1];
      let composer = token[2];
      let key = token[3];
      if (!list.hasOwnProperty(piece)) {
        list[piece] = { composer, key };
        console.log(
          `${piece} by ${composer} in ${key} added to the collection!`
        );
      } else {
        console.log(`${piece} is already in the collection!`);
      }
    } else if (command == "Remove") {
      let piece = token[1];
      if (list.hasOwnProperty(piece)) {
        delete list[piece];
        console.log(`Successfully removed ${piece}!`);
      } else {
        console.log(
          `Invalid operation! ${piece} does not exist in the collection.`
        );
      }
    } else if (command == "ChangeKey") {
      let piece = token[1];
      let newkey = token[2];
      if (list.hasOwnProperty(piece)) {
        list[piece].key = newkey;
        console.log(`Changed the key of ${piece} to ${newkey}!`);
      } else {
        console.log(
          `Invalid operation! ${piece} does not exist in the collection.`
        );
      }
    }
  }
  for (let [piese, el] of Object.entries(list)) {
    console.log(`${piese} -> Composer: ${el.composer}, Key: ${el.key}`);
  }
}

thePianist([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",
  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);
console.log(`----------------------------------`);
thePianist([
  "4",
  "Eine kleine Nachtmusik|Mozart|G Major",
  "La Campanella|Liszt|G# Minor",
  "The Marriage of Figaro|Mozart|G Major",
  "Hungarian Dance No.5|Brahms|G Minor",
  "Add|Spring|Vivaldi|E Major",
  "Remove|The Marriage of Figaro",
  "Remove|Turkish March",
  "ChangeKey|Spring|C Major",
  "Add|Nocturne|Chopin|C# Minor",
  "Stop",
]);

//------------------------------------------------------
// function thePianist(input) {
//   let numPeaces = Number(input.shift());
//   let list = {};
//   for (let i = 0; i < numPeaces; i++) {
//     let [piece, composer, key] = input.shift().split("|");
//     if (!list.hasOwnProperty(piece)) {
//       list[piece] = {};
//     }
//     list[piece][composer] = key;
//   }
//   let line = input.shift();
//   while (line != "Stop") {
//     let [command, piece, composer, key] = line.split("|");
//     switch (key) {
//       case "Add":
//         if (list.hasOwnProperty(piece)) {
//           console.log(`${piece} is already in the collection!`);
//           break;
//         }
//         list[piece] = {};
//         list[piece][composer] = key;
//         console.log(
//           `${piece} by ${composer} in ${key} added to the collection!`
//         );
//         break;
//       case "Remove":
//         if (!list.hasOwnProperty(piece)) {
//           console.log(
//             `Invalid operation! ${piece} does not exist in the collection.`
//           );
//           break;
//         }
//         delete list[piece];
//         console.log(`Successfully removed ${piece}!`);
//         break;
//       case "ChangeKey":
//         if (!list.hasOwnProperty(piece)) {
//           console.log(
//             `Invalid operation! ${piece} does not exist in the collection.`
//           );
//           break
//         }
//         let newkey = composer;
//         for (let [keyCimposer, valueKey] of Object.entries(list)) {
//           list[piece][keyCimposer] = newkey;
//         }
//         console.log(`Changed the key of ${piece} to ${newkey}!`);
//         break;
//     }
//     line = input.shift();
//   }
//   for (let [piese, composer] of Object.entries(list)) {
//     for (let composerKey of Object.keys(list[piese])) {
//       console.log(
//         `${piese} -> Composer: ${composerKey}, Key: ${composer[composerKey]}`
//       );
//     }
//   }
// }
