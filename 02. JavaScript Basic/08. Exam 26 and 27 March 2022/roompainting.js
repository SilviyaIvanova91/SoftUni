function roompainting(input) {
  let numColour = Number(input[0]);
  let numRol = Number(input[1]);
  let priceHand = Number(input[2]);
  let priceCh = Number(input[3]);

  let allPriceColout = 21.5 * numColour;
  let allPrRol = 5.2 * numRol;
  let hand = Math.ceil(numRol * 0.35);
  let ch = Math.floor(numColour * 0.48);
  let allpriceHand = hand * priceHand;
  let allpriceCh = ch * priceCh;
  let allPr = allPrRol + allPriceColout + allpriceCh + allpriceHand;
  let deliver = allPr / 15;
  console.log(`This delivery will cost ${deliver.toFixed(2)} lv.`);
}

roompainting(["10", "8", "2.2", "5"]);
roompainting(["21", "18", "5", "2.2"]);
roompainting(["1", "3", "10.9", "1"]);
