function truckDriver(input) {
  let season = input[0];
  let kilemeters = Number(input[1]);
  let price = 0;

  if (kilemeters <= 5000) {
    if (season === "Spring" || season === "Autumn") {
      price = kilemeters * 0.75;
    } else if (season === "Summer") {
      price = kilemeters * 0.9;
    } else if (season === "Winter") {
      price = kilemeters * 1.05;
    }
  } else if (kilemeters > 5000 && kilemeters <= 10000) {
    if (season === "Spring" || season === "Autumn") {
      price = kilemeters * 0.95;
    } else if (season === "Summer") {
      price = kilemeters * 1.1;
    } else if (season === "Winter") {
      price = kilemeters * 1.25;
    }
  } else if (kilemeters > 10000 && kilemeters <= 20000) {
    price = kilemeters * 1.45;
  }
  price = price * 4;
  price = price * 0.9;
  console.log(price.toFixed(2));
}

truckDriver(["Summer", "3455"]);
truckDriver(["Winter", "4350"]);
truckDriver(["Spring", "1600"]);
truckDriver(["Winter", "5678"]);
truckDriver(["Autumn", "8600"]);
truckDriver(["Winter", "16042"]);
truckDriver(["Spring", "16942"]);
