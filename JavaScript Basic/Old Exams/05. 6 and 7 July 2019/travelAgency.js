function travelAgency(input) {
  let city = input[0];
  let pack = input[1];
  let card = input[2];
  let day = Number(input[3]);
  let price = 0;
  let priceNew = 0;

  if (city === "Bansko" || city === "Borovets") {
    if (pack === "withEquipment") {
      price = 100;
      if (card === "yes") {
        price = 100 * 0.9;
      }
    } else if (pack === "noEquipment") {
      price = 80;
      if (card === "yes") {
        price = 80 * 0.95;
      }
    }
  } else if (city === "Varna" || city === "Burgas") {
    if (pack === "withBreakfast") {
      price = 130;
      if (card === "yes") {
        price = 130 * 0.88;
      }
    } else if (pack === "noBreakfast") {
      price = 100;
      if (card === "yes") {
        price = 100 * 0.93;
      }
    }
  }
  if (day > 7) {
    priceNew = price * (day - 1);
  } else {
    priceNew = price * day;
  }

  if (
    city !== "Bansko" &&
    city !== "Borovets" &&
    city !== "Varna" &&
    city !== "Burgas"
  ) {
    console.log(`Invalid input!`);
  } else if (
    pack !== "noEquipment" &&
    pack !== "withEquipment" &&
    pack !== "noBreakfast" &&
    pack !== "withBreakfast"
  ) {
    console.log(`Invalid input!`);
  } else if (day <= 0) {
    console.log(`Days must be positive number!`);
  } else {
    console.log(`The price is ${priceNew.toFixed(2)}lv! Have a nice time!`);
  }
}

travelAgency(["Borovets", "noEquipment", "yes", "6"]);
travelAgency(["Bansko", "withEquipment", "no", "2"]);
travelAgency(["Varna", "withBreakfast", "yes", "5"]);
travelAgency(["Burgas", "noBreakfast", "no", "4"]);
travelAgency(["Varna", "withBreakfast", "no", "0"]);
travelAgency(["Gabrovo", "noBreakfast", "no", "3"]);
