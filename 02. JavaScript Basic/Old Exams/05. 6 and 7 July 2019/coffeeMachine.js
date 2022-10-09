function coffeeMachine(input) {
  let drink = input[0];
  let sugar = input[1];
  let numDrink = Number(input[2]);
  let price = 0;

  if (drink === "Espresso") {
    if (sugar === "Without") {
      price = (0.9 - 0.9 * 0.35) * numDrink;
    } else if (sugar === "Normal") {
      price = 1.0 * numDrink;
    } else if (sugar === "Extra") {
      price = 1.2 * numDrink;
    }
  } else if (drink === "Cappuccino") {
    if (sugar === "Without") {
      price = (1.0 - 1.0 * 0.35) * numDrink;
    } else if (sugar === "Normal") {
      price = 1.2 * numDrink;
    } else if (sugar === "Extra") {
      price = 1.6 * numDrink;
    }
  } else if (drink === "Tea") {
    if (sugar === "Without") {
      price = (0.5 - 0.5 * 0.35) * numDrink;
    } else if (sugar === "Normal") {
      price = 0.6 * numDrink;
    } else if (sugar === "Extra") {
      price = 0.7 * numDrink;
    }
  }

  if (drink === "Espresso" && numDrink >= 5) {
    price -= price * 0.25;
  }

  if (price > 15) {
    price -= price * 0.2;
  }
  console.log(
    `You bought ${numDrink} cups of ${drink} for ${price.toFixed(2)} lv.`
  );
}

coffeeMachine(["Espresso", "Without", "10"]);
coffeeMachine(["Cappuccino", "Normal", "13"]);
coffeeMachine(["Tea", "Extra", "3"]);
