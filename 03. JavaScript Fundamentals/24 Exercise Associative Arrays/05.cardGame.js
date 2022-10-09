function cardGame(input) {
  let suits = {
    C: 1,
    D: 2,
    H: 3,
    S: 4,
  };
  let facec = {
    1: 10,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
  };
  let players = {};

  for (let line of input) {
    let [name, crads] = line.split(": ");
    crads = crads.split(", ");
    if (players.hasOwnProperty(name) == false) {
      players[name] = new Set();
    }
    for (let card of crads) {
      players[name].add(card);
    }
  }
  for (let [name, cards] of Object.entries(players)) {
    let power = 0;
    for (let card of cards) {
      let facePower = facec[card[0]];
      let suitPower = suits[card.slice(-1)];
      power += facePower * suitPower;
    }
    console.log(`${name}: ${power}`);
  }
}

cardGame([
  "Peter: 2C, 4H, 9H, AS, QS",
  "Tomas: 3H, 10S, JC, KD, 5S, 10S",
  "Andrea: QH, QC, QS, QD",
  "Tomas: 6H, 7S, KC, KD, 5S, 10C",
  "Andrea: QH, QC, JS, JD, JC",
  "Peter: JD, JD, JD, JD, JD, JD",
]);
cardGame([
  "John: 2C, 4H, 9H, AS, QS",
  "Slav: 3H, 10S, JC, KD, 5S, 10S",
  "Alex: 6H, 7S, KC, KD, 5S, 10C",
  "Thomas: QH, QC, JS, JD, JC",
  "Slav: 6H, 7S, KC, KD, 5S, 10C",
  "Thomas: QH, QC, JS, JD, JC",
  "Alex: 6H, 7S, KC, KD, 5S, 10C",
  "Thomas: QH, QC, JS, JD, JC",
  "John: JD, JD, JD, JD",
]);

//-----------------------------------------------------
// function cardGame(input) {
//   let players = new Map();

//   for (let line of input) {
//     let token = line.split(": ");
//     let name = token.shift();
//     let cards = token[0];
//     let crads = cards.split(", ");
//     if (!players.has(name)) {
//       players.set(name, new Set());
//     }
//     for (let card of crads) {
//       players.get(name).add(card);
//     }
//   }
//   for (let [name, cards] of players) {
//     let power = calcCard(cards);
//     console.log(`${name}: ${power}`);
//   }
//   function calcCard(cardDeck) {
//     let suits = {
//       C: 1,
//       D: 2,
//       H: 3,
//       S: 4,
//     };
//     let facec = {
//       2: 2,
//       3: 3,
//       4: 4,
//       5: 5,
//       6: 6,
//       7: 7,
//       8: 8,
//       9: 9,
//       10: 10,
//       J: 11,
//       Q: 12,
//       K: 13,
//       A: 14,
//     };
//     let power = 0;
//     for (let card of cardDeck) {
//       let cardInfo = card.split("");
//       let cardType = cardInfo.pop();
//       let cardPower = cardInfo.join("");
//       let facePower = facec[cardPower];
//       let suitPower = suits[cardType];
//       power += facePower * suitPower;
//     }
//     return power;
//   }
// }
