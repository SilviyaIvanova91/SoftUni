function mobileoperator(input) {
  let period = input[0];
  let type = input[1];
  let mobileNet = input[2];
  let month = Number(input[3]);
  let price = 0;

  if (period === "one") {
    if (type === "Small") {
      price = 9.98;
    } else if (type === "Middle") {
      price = 18.99;
    } else if (type === "Large") {
      price = 25.98;
    } else if (type === "ExtraLarge") {
      price = 35.99;
    }
  } else if (period === "two") {
    if (type === "Small") {
      price = 8.58;
    } else if (type === "Middle") {
      price = 17.09;
    } else if (type === "Large") {
      price = 23.59;
    } else if (type === "ExtraLarge") {
      price = 31.79;
    }
  }
  if (mobileNet === "yes") {
    if (price <= 10) {
      price = (price + 5.5) * month;
    } else if (price > 10 && price <= 30) {
      price = (price + 4.35) * month;
    } else if (price > 30) {
      price = (price + 3.85) * month;
    }
  } else if (mobileNet === "no") {
    price = price * month;
  }
  if (period === "two") {
    price -= price * 0.0375;
  }
  console.log(`${price.toFixed(2)} lv.`);
}

mobileoperator(["one", "Small", "yes", "10"]);
mobileoperator(["two", "Large", "no", "10"]);
mobileoperator(["two", "ExtraLarge", "yes", "20"]);
mobileoperator(["two", "Small", "yes", "20"]);
