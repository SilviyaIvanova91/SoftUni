function foodforPets(input) {
  let index = 0;
  let days = Number(input[index++]);
  let allFood = Number(input[index++]);
  let dogFood = 0;
  let catFood = 0;
  let counter = 0;
  let bonus = 0;

  for (let i = 1; i <= days; i++) {
    let dogFoodNew = Number(input[index++]);
    dogFood += dogFoodNew;
    let catFoodNew = Number(input[index++]);
    catFood += catFoodNew;

    counter++;

    if (counter % 3 === 0) {
      bonus += (dogFoodNew + catFoodNew) * 0.1;
    }
  }

  bonus = Math.round(bonus);
  let eatFood = dogFood + catFood;
  let percentallFood = (eatFood / allFood) * 100;
  let percenntDog = (dogFood / eatFood) * 100;
  let percentCat = (catFood / eatFood) * 100;

  console.log(`Total eaten biscuits: ${bonus}gr.`);
  console.log(`${percentallFood.toFixed(2)}% of the food has been eaten.`);
  console.log(`${percenntDog.toFixed(2)}% eaten from the dog.`);
  console.log(`${percentCat.toFixed(2)}% eaten from the cat.`);
}

foodforPets(["3", "1000", "300", "20", "100", "30", "110", "40"]);
foodforPets(["3", "500", "100", "30", "110", "25", "120", "35"]);
