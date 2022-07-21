function blackFlag(arr) {
  let dayOfPlunder = Number(arr.shift());
  let plunderFirst = Number(arr.shift());
  let expectedPlunder = Number(arr.shift());
  let allPlunder = 0;
  for (let i = 01; i <= dayOfPlunder; i++) {
    let plunderForDay = plunderFirst;
    if (i % 3 == 0) {
      plunderForDay += plunderForDay * 0.5;
    }
    allPlunder += plunderForDay;
    if (i % 5 == 0) {
      allPlunder *= 0.7;
      continue;
    }
  }
  if (allPlunder >= expectedPlunder) {
    console.log(`Ahoy! ${allPlunder.toFixed(2)} plunder gained.`);
  } else {
    let percent = (allPlunder / expectedPlunder) * 100;
    console.log(`Collected only ${percent.toFixed(2)}% of the plunder.`);
  }
}

blackFlag(["5", "40", "100"]);
blackFlag(["10", "20", "380"]);
