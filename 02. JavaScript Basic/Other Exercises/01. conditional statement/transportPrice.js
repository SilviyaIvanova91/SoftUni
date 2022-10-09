function transportPrice(input) {
  let nKilometres = Number(input[0]);
  let time = input[1];
  let train = nKilometres * 0.06;
  let autobus = nKilometres * 0.09;
  let dayTaxi = 0.7 + nKilometres * 0.79;
  let nightTaxi = 0.7 + nKilometres * 0.9;
  if (nKilometres >= 100) {
    console.log(train.toFixed(2));
  } else if (nKilometres < 100 && nKilometres >= 20) {
    console.log(autobus.toFixed(2));
  } else if (nKilometres < 20 && time === "day") {
    console.log(dayTaxi.toFixed(2));
  } else if (nKilometres < 20 && time === "night") {
    console.log(nightTaxi.toFixed(2));
  }
}

transportPrice(["5", "day"]);
transportPrice(["7", "night"]);
transportPrice(["25", "day"]);
transportPrice(["180", "night"]);
