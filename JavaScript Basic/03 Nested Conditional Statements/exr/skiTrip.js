function skiTrip(input) {
  let day = Number(input[0]);
  let kind = input[1];
  let subscribe = input[2];
  let night = day - 1;
  let price = 0;
  switch (kind) {
    case "room for one person":
      price = 18.0 * night;
      break;
    case "apartment":
      price = 25.0 * night;
      if (day < 9) {
        price = price - price * 0.3;
      } else if (day >= 9 && day <= 14) {
        price = price - price * 0.35;
      } else {
        price = price - price * 0.5;
      }
      break;
    case "president apartment":
      price = 35.0 * night;
      if (day < 9) {
        price = price - price * 0.1;
      } else if (day >= 9 && day <= 14) {
        price = price - price * 0.15;
      } else {
        price = price - price * 0.2;
      }
      break;
  }
  if (subscribe === "positive") {
    finalprice = price + price * 0.25;
  } else {
    finalprice = price - price * 0.1;
  }
  
  //--------other case-------------------
     switch (subscribe) {
       case "positive":
         finalprice = price + price * 0.25;
         break;
       case "negative":
         finalprice = price - price * 0.1;
         break;
     }
  //----------------------------------------
  {
    console.log(finalprice.toFixed(2));
  }
}

skiTrip(["14", "apartment", "positive"]);
skiTrip(["30", "president apartment", "negative"]);
skiTrip(["12", "room for one person", "positive"]);
skiTrip(["2", "apartment", "positive"]);
