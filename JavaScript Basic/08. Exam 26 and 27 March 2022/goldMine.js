function goldMine(input) {
  let index = 0;
  let location = Number(input[index++]);
  let dayGold = 0;
  let goldFromLocation = 0;

  for (let i = 1; i <= location; i++) {
    let expectedGold = Number(input[index++]);
    let day = Number(input[index++]);
    for (let x = 1; x <= day; x++) {
      let goldForday = Number(input[index++]);
      dayGold += goldForday;
    }
    let avgGold = dayGold / day;
    let gold = Math.abs(expectedGold - avgGold);
    if (avgGold >= expectedGold) {
      console.log(`Good job! Average gold per day: ${avgGold.toFixed(2)}.`);
    } else {
      console.log(`You need ${gold.toFixed(2)} gold.`);
    }
    dayGold = 0;
  }
}

goldMine(["2", "10", "3", "10", "10", "11", "20", "2", "20", "10"]);
goldMine(["1", "5", "3", "10", "1", "3"]);
