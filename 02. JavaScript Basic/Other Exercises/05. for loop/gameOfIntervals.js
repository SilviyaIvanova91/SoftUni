function gameOfIntervals(input) {
  let index = 0;
  let interval = Number(input[index++]);
  let zero = 0;
  let one = 0;
  let two = 0;
  let tree = 0;
  let four = 0;
  let other = 0;
  let all = 0;
  for (let i = 0; i < interval; i++) {
    let num = Number(input[index++]);
    if (num >= 0 && num <= 9) {
      zero++;
      all += num * 0.2;
    } else if (num >= 10 && num <= 19) {
      one++;
      all += num * 0.3;
    } else if (num >= 20 && num <= 29) {
      two++;
      all += num * 0.4;
    } else if (num >= 30 && num <= 39) {
      tree++;
      all += 50;
    } else if (num >= 40 && num <= 50) {
      four++;
      all += 100;
    } else {
      other++;
      all = all / 2;
    }
  }
  let percentZero = (zero / interval) * 100;
  let percentOne = (one / interval) * 100;
  let percentTwo = (two / interval) * 100;
  let percentTree = (tree / interval) * 100;
  let percentFour = (four / interval) * 100;
  let percentOther = (other / interval) * 100;

  console.log(all.toFixed(2));
  console.log(`From 0 to 9: ${percentZero.toFixed(2)}%`);
  console.log(`From 10 to 19: ${percentOne.toFixed(2)}%`);
  console.log(`From 20 to 29: ${percentTwo.toFixed(2)}%`);
  console.log(`From 30 to 39: ${percentTree.toFixed(2)}%`);
  console.log(`From 40 to 50: ${percentFour.toFixed(2)}%`);
  console.log(`Invalid numbers: ${percentOther.toFixed(2)}%`);
}

gameOfIntervals([
  "10",
  "43",
  "57",
  "-12",
  "23",
  "12",
  "0",
  "50",
  "40",
  "30",
  "20",
]);
