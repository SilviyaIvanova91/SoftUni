function exam(input) {
  let index = 0;
  let numstudent = Number(input[index++]);
  let command = input[index++];
  let fail = 0;
  let three = 0;
  let four = 0;
  let exc = 0;
  let allRating = 0;

  for (let i = 1; i <= numstudent; i++) {
    let rating = Number(command);
    if (rating <= 2.99 && rating >= 2.0) {
      fail++;
    } else if (rating <= 3.99 && rating >= 3.0) {
      three++;
    } else if (rating <= 4.99 && rating >= 4.0) {
      four++;
    } else if (rating >= 5.0) {
      exc++;
    }
    allRating += rating;
    command = input[index++];
  }

  let percentTop = (exc / numstudent) * 100;
  let percentFour = (four / numstudent) * 100;
  let percentThree = (three / numstudent) * 100;
  let percentFai = (fail / numstudent) * 100;
  let avg = allRating / numstudent;

  console.log(`Top students: ${percentTop.toFixed(2)}%`);
  console.log(`Between 4.00 and 4.99: ${percentFour.toFixed(2)}%`);
  console.log(`Between 3.00 and 3.99: ${percentThree.toFixed(2)}%`);
  console.log(`Fail: ${percentFai.toFixed(2)}%`);
  console.log(`Average: ${avg.toFixed(2)}`);
}

exam([
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
exam(["6", "2", "3", "4", "5", "6", "2.2"]);
