function easterTrip(input) {
  let destination = input[0];
  let date = input[1];
  let numberNight = Number(input[2]);
  let price = 0;

  if (destination === "France") {
    if (date === "21-23") {
      price = numberNight * 30;
    } else if (date === "24-27") {
      price = numberNight * 35;
    } else {
      price = numberNight * 40;
    }
  } else if (destination === "Italy") {
    if (date === "21-23") {
      price = numberNight * 28;
    } else if (date === "24-27") {
      price = numberNight * 32;
    } else {
      price = numberNight * 39;
    }
  } else if (destination === "Germany") {
    if (date === "21-23") {
      price = numberNight * 32;
    } else if (date === "24-27") {
      price = numberNight * 37;
    } else {
      price = numberNight * 43;
    }
  }
  console.log(`Easter trip to ${destination} : ${price.toFixed(2)} leva.`);
}

easterTrip(["Germany", "24-27", "5"]);
easterTrip(["Italy", "21-23", "7"]);
easterTrip(["France", "28-31", "8"]);
