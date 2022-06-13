function trainTheTrainers(input) {
  let index = 0;
  let people = Number(input[index++]);
  let command = input[index++];

  let counter = 0;
  let sumGrade = 0;

  while (command !== "Finish") {
    let name = command;
    counter++;
    let sumTempGrade = 0;
    for (let i = 0; i < people; i++) {
      let grade = Number(input[index++]);
      sumTempGrade += grade;
    }
    let tempAvgGrade = sumTempGrade / people;
    console.log(`${name} - ${tempAvgGrade.toFixed(2)}.`);
    sumGrade += tempAvgGrade;

    command = input[index++];
  }
  let avg = sumGrade / counter;
  console.log(`Student's final assessment is ${avg.toFixed(2)}.`);
}

trainTheTrainers([
  "2",
  "While-Loop",
  "6.00",
  "5.50",
  "For-Loop",
  "5.84",
  "5.66",
  "Finish",
]);
trainTheTrainers([
  "3",
  "Arrays",
  "4.53",
  "5.23",
  "5.00",
  "Lists",
  "5.83",
  "6.00",
  "5.42",
  "Finish",
]);
trainTheTrainers([
  "2",
  "Objects and Classes",
  "5.77",
  "4.23",
  "Dictionaries",
  "4.62",
  "5.02",
  "RegEx",
  "2.88",
  "3.42",
  "Finish",
]);
