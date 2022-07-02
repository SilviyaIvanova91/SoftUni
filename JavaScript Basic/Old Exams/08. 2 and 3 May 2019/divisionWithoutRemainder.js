function divisionWithoutRemainder(input) {
  let index = 0;
  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  let num = Number(input[index++]);
  for (let i = 0; index <= num; i++) {
    let mun = Number(input[index++]);
    if (mun % 2 === 0) {
      p1++;
    }
    if (mun % 3 === 0) {
      p2++;
    }
    if (mun % 4 === 0) {
      p3++;
    }
  }
  let percentp1 = (p1 / num) * 100;
  let percentp2 = (p2 / num) * 100;
  let percentp3 = (p3 / num) * 100;
  console.log(`${percentp1.toFixed(2)}%`);
  console.log(`${percentp2.toFixed(2)}%`);
  console.log(`${percentp3.toFixed(2)}%`);
}

divisionWithoutRemainder([
  "10",
  "680",
  "2",
  "600",
  "200",
  "800",
  "799",
  "199",
  "46",
  "128",
  "65",
]);
divisionWithoutRemainder(["3", "3", "6", "9"]);
