function companyUsers(input) {
  let res = {};
  for (let line of input) {
    let [name, student] = line.split(" -> ");
    if (!res.hasOwnProperty(name)) {
      res[name] = new Set();
    }
    if (!res.hasOwnProperty(student)) {
      res[name].add(student);
    }
  }
  let sorted = Object.entries(res);
  sorted.sort((a, b) => a[0].localeCompare(b[0]));

  for (let [company, students] of sorted) {
    console.log(company);
    let s = Array.from(students);
    for (let student of s) {
      console.log(`-- ${student}`);
    }
  }
}

companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);
companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> CC12344",
  "Lenovo -> XX23456",
  "SoftUni -> AA12345",
  "Movement -> DD11111",
]);
