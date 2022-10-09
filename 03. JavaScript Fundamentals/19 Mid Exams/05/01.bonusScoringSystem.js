function bonusScoringSystem(arr) {
  let numOfStudents = Number(arr.shift());
  let totalNumLecture = Number(arr.shift());
  let aditionalBonus = Number(arr.shift());
  let maxBonus = 0;
  let firstStudentAtendense = 0;
  for (let i = 0; i < numOfStudents; i++) {
    let studentAtendense = arr[i];
    let tottalBonus =
      (studentAtendense / totalNumLecture) * (5 + aditionalBonus);
    if (tottalBonus > maxBonus) {
      maxBonus = tottalBonus;
      firstStudentAtendense = studentAtendense;
    }
  }
  console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
  console.log(`The student has attended ${firstStudentAtendense} lectures.`);
}

bonusScoringSystem(["5", "25", "30", "12", "19", "24", "16", "20"]);
bonusScoringSystem([
  "10",
  "30",
  "14",
  "8",
  "23",
  "27",
  "28",
  "15",
  "17",
  "25",
  "26",
  "5",
  "18",
]);
