function happyCatParking(input) {
  let index = 0;
  let day = Number(input[index++]);
  let hours = Number(input[index++]);

  let tax = 0;
  let alltax = 0;
  let dayluTax = 0;

  for (let d = 1; d <= day; d++) {
    for (let h = 1; h <= hours; h++) {
      if (d % 2 === 0 && h % 2 !== 0) {
        tax = 2.5;
      } else if (d % 2 !== 0 && h % 2 === 0) {
        tax = 1.25;
      } else {
        tax = 1;
      }
      alltax += tax;
    }
    dayluTax += alltax;
    console.log(`Day: ${d} - ${alltax.toFixed(2)} leva`);
    h = 0;
    alltax = 0;
  }
  console.log(`Total: ${dayluTax.toFixed(2)} leva`);
}

happyCatParking(["2", "5"]);
happyCatParking(["5", "2"]);
