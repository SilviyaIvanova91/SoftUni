function carWash(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let command = arr[i];
    if (command === "soap") {
      sum += 10;
    } else if (command === "water") {
      sum += sum * 0.2;
    } else if (command === "vacuum cleaner") {
      sum += sum * 0.25;
    } else if (command === "mud") {
      sum -= sum * 0.1;
    }
  }
  console.log(`The car is ${sum.toFixed(2)}% clean.`);
}

carWash(["soap", "soap", "vacuum cleaner", "mud", "soap", "water"]);
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);
