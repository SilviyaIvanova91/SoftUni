function bitCoin(input) {
  let priceBitCoin = 11949.16;
  let priceGramGold = 67.51;
  let day = 0;
  let goldcounter = 0;
  let bitCoinCounter = 0;
  let firstDaycounter = 0;

  for (let i = 0; i < input.length; i++) {
    day++;
    let gold = input[i];
    if (day % 3 === 0) {
      gold -= gold * 0.3;
    }
    goldcounter += gold * priceGramGold;
    while (goldcounter >= priceBitCoin) {
      bitCoinCounter++;
      goldcounter -= priceBitCoin;
      if (bitCoinCounter === 1) {
        firstDaycounter = day;
      }
    }
  }
  console.log(`Bought bitcoins: ${bitCoinCounter}`);
  if (bitCoinCounter > 0) {
    console.log(`Day of the first purchased bitcoin: ${firstDaycounter}`);
  }
  console.log(`Left money: ${goldcounter.toFixed(2)} lv.`);
}

bitCoin([100, 200, 300]);
bitCoin([50, 100]);
bitCoin([3124.15, 504.212, 2511.124]);

// function bitCoin(input) {
//   let index = 0;
//   let gold = Number(input[index++]);

//   let priceBitCoin = 11949.16;
//   let priceGramGold = 67.51;

//   let day = 0;
//   let goldcounter = 0;
//   let bitCoinCounter = 0;
//   let firstDaycounter = 0;

//   while (gold) {
//     day++;
//     if (day % 3 === 0) {
//       gold -= gold * 0.3;
//     }
//     goldcounter += gold * priceGramGold;

//     if (goldcounter >= priceBitCoin) {
//       bitCoinCounter++;
//       if (bitCoinCounter === 1) {
//         firstDaycounter = day;
//       }
//     }
//     gold = Number(input[index++]);
//   }
//   if (goldcounter >= priceBitCoin) {
//     bitCoinCounter = Math.trunc(goldcounter / priceBitCoin);
//   }
//   goldcounter -= bitCoinCounter * priceBitCoin;

//   console.log(`Bought bitcoins: ${bitCoinCounter}`);
//   if (bitCoinCounter > 0) {
//     console.log(`Day of the first purchased bitcoin: ${firstDaycounter}`);
//   }
//   console.log(`Left money: ${goldcounter.toFixed(2)} lv.`);
// }

// bitCoin([100, 200, 300]);
// bitCoin([50, 100]);
// bitCoin([3124.15, 504.212, 2511.124]);
