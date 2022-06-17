function pets(input) {
  let day = Number(input[0]);
  let food = Number(input[1]);
  let foodForDog = Number(input[2]);
  let foodForCat = Number(input[3]);
  let foodForTurtoise = Number(input[4]);
  let foodForTurtoiseKg = foodForTurtoise / 1000;
  let allFood = foodForDog + foodForCat + foodForTurtoiseKg;
  let forAllDay = day * allFood;
  let diff = Math.abs(food - forAllDay);
  if (food >= forAllDay) {
    console.log(`${Math.floor(diff)} kilos of food left.`);
  } else {
    console.log(`${Math.ceil(diff)} more kilos of food are needed.`);
  }
}

pets(["2", "10", "1", "1", "1200"]);
pets(["5", "10", "2.1", "0.8", "321"]);
