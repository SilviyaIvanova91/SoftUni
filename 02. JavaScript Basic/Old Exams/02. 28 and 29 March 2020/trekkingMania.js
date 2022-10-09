function trekkingMania(input) {
  let index = 0;
  let numGroups = Number(input[index++]);
  let counter = 0;
  let musala = 0;
  let monblan = 0;
  let kalimadzaro = 0;
  let ka2 = 0;
  let everest = 0;
  for (let i = 1; i <= numGroups; i++) {
    let numPeople = Number(input[index]);
    if (numPeople <= 5) {
      musala += numPeople;
    } else if (numPeople >= 6 && numPeople <= 12) {
      monblan += numPeople;
    } else if (numPeople >= 13 && numPeople <= 25) {
      kalimadzaro += numPeople;
    } else if (numPeople >= 26 && numPeople <= 40) {
      ka2 += numPeople;
    } else {
      everest += numPeople;
    }
    counter += numPeople;
    index++;
  }
  let persentMusala = (musala / counter) * 100;
  let persentMonblan = (monblan / counter) * 100;
  let persentKalimadzaro = (kalimadzaro / counter) * 100;
  let persentKa2 = (ka2 / counter) * 100;
  let persentEverest = (everest / counter) * 100;

  console.log(`${persentMusala.toFixed(2)}%`);
  console.log(`${persentMonblan.toFixed(2)}%`);
  console.log(`${persentKalimadzaro.toFixed(2)}%`);
  console.log(`${persentKa2.toFixed(2)}%`);
  console.log(`${persentEverest.toFixed(2)}%`);
}

trekkingMania([
  "10",
  "10",
  "5",
  "1",
  "100",
  "12",
  "26",
  "17",
  "37",
  "40",
  "78",
]);
trekkingMania(["5", "25", "41", "31", "250", "6"]);
