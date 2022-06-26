function energyBooster(input) {
  let type = input[0];
  let set = input[1];
  let numSet = Number(input[2]);

  switch (type) {
    case "Watermelon":
      if (set === "small") {
        price = 56 * 2 * numSet;
      } else {
        price = 28.7 * 5 * numSet;
      }
      break;
    case "Mango":
      if (set === "small") {
        price = 36.66 * 2 * numSet;
      } else {
        price = 19.6 * 5 * numSet;
      }
      break;
    case "Pineapple":
      if (set === "small") {
        price = 42.1 * 2 * numSet;
      } else {
        price = 24.8 * 5 * numSet;
      }
      break;
    case "Raspberry":
      if (set === "small") {
        price = 20 * 2 * numSet;
      } else {
        price = 15.2 * 5 * numSet;
      }
      break;
  }
  if (price >= 400 && price <= 1000) {
    all = price - price * 0.15;
  } else if (price > 1000) {
    all = price - price * 0.5;
  } else {
    all = price;
  }
  console.log(`${all.toFixed(2)} lv.`);
}

energyBooster(["Watermelon", "big", "4"]);
energyBooster(["Pineapple", "small", "1"]);
energyBooster(["Raspberry", "small", "50"]);
energyBooster(["Mango", "big", "8"]);
