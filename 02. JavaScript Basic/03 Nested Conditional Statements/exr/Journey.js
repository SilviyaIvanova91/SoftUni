function journey(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let destination = 0;
  let vacantion = 0;
  let sum = 0;

  switch (season) {
    case "summer":
      vacantion = "Camp";
      if (budget <= 100) {
        destination = "Bulgaria";
        sum = budget * 0.3;
      } else if (budget <= 1000 && budget > 100) {
        destination = "Balkans";
        sum = budget * 0.4;
      } else {
        destination = "Europe";
        sum = budget * 0.9;
        vacantion = "Hotel";
      }
      break;

    case "winter":
      vacantion = "Hotel";
      if (budget <= 100) {
        destination = "Bulgaria";
        sum = budget * 0.7;
      } else if (budget <= 1000 && budget > 100) {
        destination = "Balkans";
        sum = budget * 0.8;
      } else {
        destination = "Europe";
        sum = budget * 0.9;
      }
      break;
  }
  {
    console.log(`Somewhere in ${destination}`);
  }
  {
    console.log(`${vacantion} - ${sum.toFixed(2)}`);
  }
}

journey(["50", "summer"]);
journey(["75", "winter"]);
journey(["312", "summer"]);
journey(["678.53", "winter"]);
journey(["1500", "summer"]);
