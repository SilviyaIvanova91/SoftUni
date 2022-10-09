function careofPuppy(input) {
  let index = 0;
  let foodinKG = Number(input[index++]);
  let foodinGr = foodinKG * 1000;
  let command = input[index++];
  let eatfood = 0;
  while (command !== "Adopted") {
    let everyEat = Number(command);
    eatfood += everyEat;
    command = input[index++];
  }

  let diff = Math.abs(foodinGr - eatfood);
  if (foodinGr >= eatfood) {
    console.log(`Food is enough! Leftovers: ${diff} grams.`);
  } else {
    console.log(`Food is not enough. You need ${diff} grams more.`);
  }
}

careofPuppy(["4", "130", "345", "400", "180", "230", "120", "Adopted"]);
careofPuppy(["3", "1000", "1000", "1000", "Adopted"]);
careofPuppy(["2", "999", "456", "999", "999", "123", "456", "Adopted"]);
