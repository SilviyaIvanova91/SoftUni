function schoolCamp(input) {
  let season = input[0];
  let typeGroup = input[1];
  let num = Number(input[2]);
  let nights = Number(input[3]);

  let typeSport = "";
  let price = 0;

  if (season === "Winter") {
    price = 9.6 * num * nights;
    if (typeGroup === "boys") {
      typeSport = "Judo";
    } else if (typeGroup === "girls") {
      typeSport = "Gymnastics";
    } else if (typeGroup === "mixed") {
      typeSport = "Ski";
      price = 10 * num * nights;
    }
  } else if (season === "Spring") {
    price = 7.2 * num * nights;
    if (typeGroup === "boys") {
      typeSport = "Tennis";
    } else if (typeGroup === "girls") {
      typeSport = "Athletics";
    } else if (typeGroup === "mixed") {
      typeSport = "Cycling";
      price = 9.5 * num * nights;
    }
  } else if (season === "Summer") {
    price = 15 * num * nights;
    if (typeGroup === "boys") {
      typeSport = "Football";
    } else if (typeGroup === "girls") {
      typeSport = "Volleyball";
    } else if (typeGroup === "mixed") {
      typeSport = "Swimming";
      price = 20 * num * nights;
    }
  }
  if (num >= 10 && num < 20) {
    price -= price * 0.05;
  } else if (num >= 20 && num < 50) {
    price -= price * 0.15;
  } else if (num >= 50) {
    price = price * 0.5;
  }
  console.log(`${typeSport} ${price.toFixed(2)} lv.`);
}

schoolCamp(["Spring", "girls", "20", "7"]);
schoolCamp(["Winter", "mixed", "9", "15"]);
schoolCamp(["Summer", "boys", "60", "7"]);
schoolCamp(["Spring", "mixed", "17", "14"]);
