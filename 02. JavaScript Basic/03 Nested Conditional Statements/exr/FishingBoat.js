function fishingBoat(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let numberFisherman = Number(input[2]);
  let boat = 0;
  switch (season) {
    case "Summer":
    case "Autumn":
      boat = 4200;
      if (numberFisherman <= 6) {
        boat = boat - boat * 0.1;
      } else if (numberFisherman >= 7 && numberFisherman <= 11) {
        boat = boat - boat * 0.15;
      } else {
        boat = boat - boat * 0.25;
      }
      break;
    case "Winter":
      boat = 2600;
      if (numberFisherman <= 6) {
        boat = boat - boat * 0.1;
      } else if (numberFisherman >= 7 && numberFisherman <= 11) {
        boat = boat - boat * 0.15;
      } else {
        boat = boat - boat * 0.25;
      }
      break;
    case "Spring":
      boat = 3000;
      if (numberFisherman <= 6) {
        boat = boat - boat * 0.1;
      } else if (numberFisherman >= 7 && numberFisherman <= 11) {
        boat = boat - boat * 0.15;
      } else {
        boat = boat - boat * 0.25;
      }
      break;
  }
  if (numberFisherman % 2 === 0 && season !== "Autumn") {
    boat = boat - boat * 0.05;
  }
  let diff = Math.abs(budget - boat);
  if (budget >= boat) {
    console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
  }
  if (budget < boat) {
    console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
  }
}

fishingBoat(["3000", "Summer", "11"]);
fishingBoat(["3600", "Autumn", "6"]);
fishingBoat(["2000", "Winter", "13"]);
