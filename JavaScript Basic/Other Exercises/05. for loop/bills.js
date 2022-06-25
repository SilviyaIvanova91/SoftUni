function bills(input) {
  let index = 0;
  let all = 0;
  let electrysity = 0;
  let water = 0;
  let internet = 0;
  let other = 0;
  let allot = 0;
  let month = Number(input[index++]);
  for (let i = 0; i < month; i++) {
    let energy = Number(input[index++]);
    electrysity += energy;
    water += 20;
    internet += 15;
    other = (energy + 20 + 15) * 0.2 + (energy + 20 + 15);

    allot += other;
    all = electrysity + water + internet + allot;
    other = 0;
  }
  let avg = all / month;
  console.log(`Electricity: ${electrysity.toFixed(2)} lv`);
  console.log(`Water: ${water.toFixed(2)} lv`);
  console.log(`Internet: ${internet.toFixed(2)} lv`);
  console.log(`Other: ${allot.toFixed(2)} lv`);
  console.log(`Average: ${avg.toFixed(2)} lv`);
}
bills(["5", "68.63", "89.25", "132.53", "93.53", "63.22"]);
bills([
  "8",
  "123.54",
  "231.54",
  "140.23",
  "100",
  "122.4",
  "430",
  "178.52",
  "64.2",
]);
