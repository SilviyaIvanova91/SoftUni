function foodDelivery(input) {
  let chiken = Number(input[0]);
  let fish = Number(input[1]);
  let vegetarian = Number(input[2]);
  let newChiken = chiken * 10.35;
  let newFish = fish * 12.4;
  let newVegetarian = vegetarian * 8.15;
  let food = newChiken + newFish + newVegetarian;
  let desert = food * 0.2;
  let allFood = food + desert + 2.5;
  console.log(allFood);
}

foodDelivery(["2 ", "4 ", "3 "]);
foodDelivery(["9 ", "2 ", "6 "]);
