function fuelTankOther(input) {
  let type = input[0];
  let quantity = Number(input[1]);
  let card = input[2];
  let Gasoline = quantity * 2.22;
  let Diesel = quantity * 2.33;
  let Gas = quantity * 0.93;

  if (card === "Yes") {
    if (type === "Gasoline") {
      price = Gasoline - quantity * 0.18;
    } else if (type === "Diesel") {
      price = Diesel - quantity * 0.12;
    } else if (type === "Gas") {
      price = Gas - quantity * 0.08;
    }
  } else {
    if (type === "Gasoline") {
      price = Gasoline;
    } else if (type === "Diesel") {
      price = Diesel;
    } else if (type === "Gas") {
      price = Gas;
    }
  }
  if (quantity >= 20 && quantity <= 25) {
    price = price - price * 0.08;
  } else if (quantity > 25) {
    price = price - price * 0.1;
  } else {
    price = price;
  }
  console.log(`${price.toFixed(2)} lv.`);
}

fuelTankOther(["Gas", "30", "Yes"]);
fuelTankOther(["Gasoline", "25", "No"]);
fuelTankOther(["Diesel", "19", "No"]);
