function grades(input) {
  let index = 0;
  let student = Number(input[index++]);
  let fail = 0;
  let three = 0;
  let four = 0;
  let top = 0;
  let all = 0;

  for (let i = 0; i < student; i++) {
    let know = Number(input[index++]);
    all += know;
    if (know >= 2.0 && know <= 2.99) {
      fail++;
    } else if (know >= 3.0 && know <= 3.99) {
      three++;
    } else if (know >= 4.0 && know <= 4.99) {
      four++;
    } else if (know >= 5.0) {
      top++;
    }
  }
  let percentTop = (top / student) * 100;
  let percentFour = (four / student) * 100;
  let percentThree = (three / student) * 100;
  let percentFail = (fail / student) * 100;
  let avg = all / student;

  console.log(`Top students: ${percentTop.toFixed(2)}%`);
  console.log(`Between 4.00 and 4.99: ${percentFour.toFixed(2)}%`);
  console.log(`Between 3.00 and 3.99: ${percentThree.toFixed(2)}%`);
  console.log(`Fail: ${percentFail.toFixed(2)}%`);
  console.log(`Average: ${avg.toFixed(2)}`);
}

grades([
  "10",
  "3.00",
  "2.99",
  "5.68",
  "3.01",
  "4",
  "4",
  "6.00",
  "4.50",
  "2.44",
  "5",
]);
grades(["6", "2", "3", "4", "5", "6", "2.2"]);
