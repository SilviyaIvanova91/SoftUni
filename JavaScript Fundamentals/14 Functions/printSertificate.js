function printSertificate(grade, names) {
  if (pass(grade)) {
    printHeader();
    printName(names);
    formatGrade(grade);
  } else {
    console.log(`Student does not qualify`);
  }
}

function printHeader() {
  console.log("~~~-   {@}   -~~~");
  console.log("~- Certificate -~");
  console.log("~~~-  ~---~  -~~~");
}

function printName(nameArr) {
  console.log(nameArr[0] + " " + nameArr[1]);
}

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

function pass(grade) {
  return grade >= 3;
}

printSertificate(5.25, ["John", "Smith"]);
printSertificate(4.3, ["Peter", "Roberts"]);
printSertificate(2.8, ["George", "Bobson"]);
