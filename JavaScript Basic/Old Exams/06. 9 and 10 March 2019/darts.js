function darts(input) {
  let index = 0;
  let name = input[index++];
  let startPoints = 301;
  let points = 0;
  let shoots = 0;
  let shootsN = 0;

  let command = input[index++];

  while (command !== "Retire") {
    let pole = command;
    let points = Number(input[index++]);
    if (pole === "Single") {
      startPoints -= points;
      shoots++;
      if (startPoints < 0) {
        startPoints += points;
        shootsN++;
        shoots--;
      }
    } else if (pole === "Double") {
      startPoints -= points * 2;
      shoots++;
      if (startPoints < 0) {
        startPoints += points * 2;
        shootsN++;
        shoots--;
      }
    } else if (pole === "Triple") {
      startPoints -= points * 3;
      shoots++;
      if (startPoints < 0) {
        startPoints += points * 3;
        shootsN++;
        shoots--;
      }
    }
    if (startPoints === 0) {
      break;
    }

    command = input[index++];
    if (command === "Retire") {
      break;
    }
  }

  if (command === "Retire") {
    console.log(`${name} retired after ${shootsN++} unsuccessful shots.`);
  } else {
    console.log(`${name} won the leg with ${shoots} shots.`);
  }
}

darts([
  "Michael van Gerwen",
  "Triple",
  "20",
  "Triple",
  "19",
  "Double",
  "10",
  "Single",
  "3",
  "Single",
  "1",
  "Triple",
  "20",
  "Triple",
  "20",
  "Double",
  "20",
]);
darts([
  "Stephen Bunting",
  "Triple",
  "20",
  "Triple",
  "20",
  "Triple",
  "20",
  "Triple",
  "20",
  "Triple",
  "20",
  "Triple",
  "20",
  "Double",
  "7",
  "Single",
  "12",
  "Double",
  "1",
  "Single",
  "1",
]);
darts([
  "Rob Cross",
  "Triple",
  "20",
  "Triple",
  "20",
  "Triple",
  "20",
  "Triple",
  "20",
  "Double",
  "20",
  "Triple",
  "20",
  "Double",
  "5",
  "Triple",
  "10",
  "Double",
  "6",
  "Retire",
]);
