function safari(input) {
  let budget = Number(input[0]);
  let ltDiesel = Number(input[1]);
  let day = input[2];

  let allD = ltDiesel * 2.1;
  let all = allD + 100;

  if (day === "Saturday") {
    all = all * 0.9;
  } else if (day === "Sunday") {
    all = all * 0.8;
  }
  let diff = Math.abs(all - budget);
  if (all <= budget) {
    console.log(`Safari time! Money left: ${diff.toFixed(2)} lv.`);
  } else {
    console.log(`Not enough money! Money needed: ${diff.toFixed(2)} lv.`);
  }
}

safari(["1000", "10", "Sunday"]);
safari(["120", "30", "Saturday"]);
safari(["105.20", "15", "Sunday"]);
