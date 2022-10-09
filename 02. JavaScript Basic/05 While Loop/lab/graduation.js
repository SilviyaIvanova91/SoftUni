function graduation(input) {
  let index = 0;
  let name = input[index++];
  let counter = 0;
  let clas = 1;
  let sumGrade = 0;
  let isExcluded = false;
  while (clas <= 12) {
    let grade = Number(input[index++]);
    if (grade < 4.0) {
      counter++;
      if (counter > 1) {
        isExcluded = true;
        console.log(`${name} has been excluded at ${clas} grade`);
        break;
      }
      continue;
    }
    sumGrade += grade;
    clas++;
  }
  if (!isExcluded) {
    let avgGrade = sumGrade / 12;
    console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`);
  }
}

graduation([
  "Gosho",
  "5",
  "5.5",
  "6",
  "5.43",
  "5.5",
  "6",
  "5.55",
  "5",
  "6",
  "6",
  "5.43",
  "5",
]);
graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);
