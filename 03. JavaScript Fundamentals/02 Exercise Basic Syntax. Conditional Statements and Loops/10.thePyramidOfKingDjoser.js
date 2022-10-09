function thePyramidOfKingDjoser(base, increments) {
  let stone = 0;
  let marable = 0;
  let lapuslazul = 0;
  let gold = 0;
  let steps = 1;

  while (base > 2) {
    stone += Math.pow(base - 2, 2) * increments;
    if (steps % 5 === 0) {
      marable += 0;
      lapuslazul += (base - 1) * 4 * increments;
    } else {
      marable += (base - 1) * 4 * increments;
      lapuslazul += 0;
    }
    base -= 2;
    steps++;
  }
  gold = base * base;

  console.log(`Stone required: ${Math.ceil(stone)}`);
  console.log(`Marble required: ${Math.ceil(marable)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapuslazul)}`);
  console.log(`Gold required: ${Math.ceil(gold)}`);
  console.log(`Final pyramid height: ${Math.floor(steps * increments)}`);
}

thePyramidOfKingDjoser(11, 1);
thePyramidOfKingDjoser(11, 0.75);
thePyramidOfKingDjoser(12, 1);
thePyramidOfKingDjoser(23, 0.5);

function thePyramidOfKingDjoser(base, increments) {
  let stone = 0;
  let marable = 0;
  let gold = 0;
  let steps = 0;

  let totalStone = 0;
  let totalMarbel = 0;
  let totalLap = 0;

  while (base > 2) {
    marable = base * 4 - 4;
    stone = base * base - marable;
    totalStone += stone;

    steps++;
    if (steps % 5 === 0) {
      totalLap += marable;
    } else {
      totalMarbel += marable;
    }

    base -= 2;
  }
  steps++;
  gold = base * base;

  stone = Math.ceil(totalStone * increments);
  marable = Math.ceil(totalMarbel * increments);
  totalLap = Math.ceil(totalLap * increments);
  gold = Math.ceil(gold * increments);
  steps = Math.floor(steps * increments);

  console.log(`Stone required: ${stone}`);
  console.log(`Marble required: ${marable}`);
  console.log(`Lapis Lazuli required: ${totalLap}`);
  console.log(`Gold required: ${gold}`);
  console.log(`Final pyramid height: ${steps}`);
}

thePyramidOfKingDjoser(11, 1);
thePyramidOfKingDjoser(11, 0.75);
thePyramidOfKingDjoser(12, 1);
thePyramidOfKingDjoser(23, 0.5);

// function thePyramidOfKingDjoser(size, increments) {
//   let stone = 0;
//   let marable = 0;
//   let gold = 0;
//   let lapuslazul = 0;
//   let steps = 1;

//   while (size >= 1) {
//     if (size > 2) {
//       if (steps % 5 === 0) {
//         lapuslazul += size * 4 - 4 * increments;
//       } else {
//         marable += size * 4 - 4 * increments;
//       }
//       steps++;
//       stone += Math.pow(size - 2, 2) * increments;
//     } else {
//       gold += Math.pow(size, 2) * increments;
//     }

//     size -= 2;
//   }
//   console.log(
//     `Stone required: ${Math.ceil(stone)}\nMarble required: ${Math.ceil(
//       marable
//     )}\nLapis Lazuli required: ${Math.ceil(
//       lapuslazul
//     )}\nGold required: ${gold}\nFinal pyramid height: ${Math.floor(
//       steps * increments
//     )}`
//   );
// }

// thePyramidOfKingDjoser(11, 1);
// thePyramidOfKingDjoser(11, 0.75);
// thePyramidOfKingDjoser(12, 1);
// thePyramidOfKingDjoser(23, 0.5);
