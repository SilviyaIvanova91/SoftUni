function examPreparation(input) {
  let index = 0;
  let countNegativeGrade = Number(input[index++]);
  let command = input[index++];

  let currentNegativeGrade = 0;
  let sumGrade = 0;
  let countProblems = 0;
  let lastName = "";
  let isNeedBreak = false;

  while (command !== "Enough") {
    let problemName = command;
    let grade = Number(input[index++]);

    lastName = problemName;
    countProblems++;
    sumGrade += grade;

    if (grade <= 4) {
      currentNegativeGrade++;
    }

    if (currentNegativeGrade === countNegativeGrade) {
      console.log(`You need a break, ${countNegativeGrade} poor grades.`);
      isNeedBreak = true;
      break;
    }

    command = input[index++];
  }
  if (!isNeedBreak) {
    let avg = sumGrade / countProblems;
    console.log(`Average score: ${avg.toFixed(2)}`);
    console.log(`Number of problems: ${countProblems}`);
    console.log(`Last problem: ${lastName}`);
  }
}

examPreparation([
  "3",
  "Money",
  "6",
  "Story",
  "4",
  "Spring Time",
  "5",
  "Bus",
  "6",
  "Enough",
]);
examPreparation(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);
