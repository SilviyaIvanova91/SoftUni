function formatGrade(grade) {
  let formated = grade.toFixed(2);
  let desc = 0;
  if (grade < 3.0) {
    formated = "2";
    desc = "Fail";
  } else if (grade < 3.5) {
    desc = "Poor";
  } else if (grade < 4.5) {
    desc = "Good";
  } else if (grade < 5.5) {
    desc = "Very good";
  } else {
    desc = "Excellent";
  }
  console.log(`${desc} (${formated})`);
}

formatGrade(3.33);
formatGrade(4.5);
formatGrade(2.99);
