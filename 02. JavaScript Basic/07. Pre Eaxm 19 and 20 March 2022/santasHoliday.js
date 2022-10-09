function santasHoliday(input) {
  let day = Number(input[0]);
  let room = input[1];
  let price = input[2];

  let night = day - 1;
  let newPrice = 0;
  let priceNo = 0;
  let finalPrice = 0;

  if (room === "room for one person") {
    newPrice = 18 * night;
  } else if (room === "apartment") {
    if (day < 10) {
      priceNo = 25 * night;
      newPrice = priceNo - priceNo * 0.3;
    } else if (day >= 10 && day <= 15) {
      priceNo = 25 * night;
      newPrice = priceNo - priceNo * 0.35;
    } else if (day > 15) {
      priceNo = 25 * night;
      newPrice = priceNo - priceNo * 0.5;
    }
  } else if (room === "president apartment") {
    if (day < 10) {
      priceNo = 35 * night;
      newPrice = priceNo - priceNo * 0.1;
    } else if (day >= 10 && day <= 15) {
      priceNo = 35 * night;
      newPrice = priceNo - priceNo * 0.15;
    } else if (day > 15) {
      priceNo = 35 * night;
      newPrice = priceNo - priceNo * 0.2;
    }
  }
  if (price === "positive") {
    finalPrice = newPrice + newPrice * 0.25;
  } else {
    finalPrice = newPrice - newPrice * 0.1;
  }
  console.log(finalPrice.toFixed(2));
}

santasHoliday(["14", "apartment", "positive"]);
santasHoliday(["30", "president apartment", "negative"]);
santasHoliday(["12", "room for one person", "positive"]);
santasHoliday(["2", "apartment", "positive"]);
