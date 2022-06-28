function cinema(input) {
  let index = 0;
  let fullSalon = Number(input[index++]);
  let command = input[index++];
  let allticket = 0;
  let numPeople = 0;
  let all = 0;
  let finalSum = 0;

  while (command !== "Movie time!") {
    let numPeople = Number(command);

    fullSalon -= numPeople;
    allticket++;

    if (fullSalon < 0) {
      console.log(`The cinema is full.`);
      break;
    }
    if (numPeople % 3 === 0) {
      all = numPeople * 5 - 5;
    } else {
      all = numPeople * 5;
    }
    finalSum += all;
    command = input[index++];
  }
  if (fullSalon >= 0) {
    console.log(`There are ${fullSalon} seats left in the cinema.`);
  }

  console.log(`Cinema income - ${finalSum} lv.`);
}

cinema(["60", "10", "6", "3", "20", "15", "Movie time!"]);
cinema(["50", "15", "10", "10", "15", "5"]);
cinema([
  "100",
  "10",
  "10",
  "10",
  "10",
  "10",
  "10",
  "10",
  "10",
  "10",
  "10",
  "Movie time!",
]);
