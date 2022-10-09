function summerOutfit(input) {
  let degrees = Number(input[0]);
  let timeOfDay = input[1];
  let outfit = 0;
  let shoes = 0;
  if (10 <= degrees && degrees <= 18) {
    switch (timeOfDay) {
      case "Morning":
        outfit = "Sweatshirt";
        shoes = "Sneakers";
        break;
      case "Afternoon" || "Evening":
        outfit = "Shirt";
        shoes = "Moccasins";
        break;
    }
  } else if (18 < degrees && degrees <= 24) {
    switch (timeOfDay) {
      case "Morning" || "Evening":
        outfit = "Shirt";
        shoes = "Moccasins";
        break;
      case "Afternoon":
        outfit = "T-Shirt";
        shoes = "Sandals";
        break;
    }
  } else if (degrees >= 25) {
    switch (timeOfDay) {
      case "Morning":
        outfit = "T-Shirt";
        shoes = "Sandals";
        break;
      case "Afternoon":
        outfit = "Swim Suit";
        shoes = "Barefoot";
        break;
      case "Evening":
        outfit = "Shirt";
        shoes = "Moccasins";
        break;
    }
  }
  {
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
  }
}

summerOutfit(["16", "Morning"]);
summerOutfit(["22", "Afternoon"]);
summerOutfit(["28", "Evening"]);
