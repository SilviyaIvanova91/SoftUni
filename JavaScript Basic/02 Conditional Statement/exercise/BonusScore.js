function bonusScore(input) {
  let firstScore = Number(input[0]);
  let bonus = 0.0;
  if (firstScore <= 100) {
    bonus = 5;
  } else if (firstScore >= 1000) {
    bonus = firstScore * 0.1;
  } else {
    bonus = firstScore * 0.2;
  }
  if (firstScore % 2 == 0) {
    bonus = bonus + 1;
  } else if (firstScore % 10 == 5) {
    bonus = bonus + 2;
  }
  console.log(bonus);
  console.log(firstScore + bonus);
}

bonusScore(["20"]);
bonusScore(["175"]);
bonusScore(["2703"]);
bonusScore(["15875"]);
