function dishwasher(input) {
  let index = 0;
  let bottle = Number(input[index++]);
  let allBottle = bottle * 750;
  let command = input[index++];
  let plate = 0;
  let pot = 0;
  let count = 0;

  while (command !== "End") {
    let washer = Number(command);
    count++;

    if (count === 3) {
      count = 0;
      pot += washer;
      allBottle -= washer * 15;
    } else {
      plate += washer;
      allBottle -= washer * 5;
    }
    if (allBottle < 0) {
      break;
    }
    command = input[index++];
  }
  if (0 <= allBottle) {
    console.log(`Detergent was enough!`);
    console.log(`${plate} dishes and ${pot} pots were washed.`);
    console.log(`Leftover detergent ${Math.abs(allBottle)} ml.`);
  } else {
    console.log(
      `Not enough detergent, ${Math.abs(allBottle)} ml. more necessary!`
    );
  }
}
dishwasher(["2", "53", "65", "55", "End"]);
dishwasher(["1", "10", "15", "10", "12", "13", "30"]);
