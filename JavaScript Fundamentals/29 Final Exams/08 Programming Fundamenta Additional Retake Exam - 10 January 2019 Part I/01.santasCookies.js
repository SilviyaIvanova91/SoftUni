function santasCookies(input) {
  let batchesToBake = Number(input.shift());
  let totalBoxes = 0;
  for (let i = 0; i < batchesToBake; i++) {
    let flourGr = Number(input.shift());
    let sugargr = Number(input.shift());
    let cocoaGr = Number(input.shift());
    let flourCup = Math.floor(flourGr / 140);
    let sugarSpoon = Math.floor(sugargr / 20);
    let cocoaSpoon = Math.floor(cocoaGr / 10);
    if (flourCup <= 0 || sugarSpoon <= 0 || cocoaSpoon <= 0) {
      console.log(`Ingredients are not enough for a box of cookies.`);
      continue;
    } else {
      let totalCookieForBake =
        ((140 + 10 + 20) * Math.min(flourCup, sugarSpoon, cocoaSpoon)) / 25;
      let allBox = Math.floor(totalCookieForBake / 5);
      console.log(`Boxes of cookies: ${allBox}`);
      totalBoxes += allBox;
    }
  }
  console.log(`Total boxes: ${totalBoxes}`);
}

santasCookies(["2", "200", "300", "500", "100", "200", "50"]);
santasCookies(["1", "1400", "200", "100"]);
