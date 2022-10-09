function schoolGrades(input) {
  let res = new Map();
  for (let line of input) {
    let tokens = line.split(" ");
    let name = tokens.shift();
    let setOfGrades = tokens;

    if (!res.has(name)) {
      res.set(name, setOfGrades);
    } else {
      let oldSet = res.get(name);
      for (let grade of setOfGrades) {
        oldSet.push(grade);
      }
      res.set(name, oldSet);
    }
  }
  let sorted = Array.from(res.entries()).sort(([keyA], [keyB]) => {
    return keyA.localeCompare(keyB);
  });

  for (let [k, v] of sorted) {
    let sumGrade = 0;
    for (let grade of v) {
      sumGrade += Number(grade);
    }
    let avgGrade = sumGrade / v.length;
    console.log(`${k}: ${avgGrade.toFixed(2)}`);
  }
}

schoolGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
schoolGrades(["Steven 3 5 6 4", "George 4 6", "Tammy 2 5 3", "Steven 6 3"]);

//-----------------------------
// function schoolGrades(input) {
//   let res = new Map();
//   for (let line of input) {
//     let tokens = line.split(" ");
//     let name = tokens.shift();
//     let grades = tokens.map(Number);

//     if (res.has(name) == false) {
//       res.set(name, []);
//     }
//     let existing = res.get(name);
//     for (let grade of grades) {
//       existing.push(grade);
//     }
//   }
//   let sorted = Array.from(res);
//   sorted.sort((a, b) => a[0].localeCompare(b[0]));

//   for (let [name, grades] of sorted) {
//     let average = 0;
//     for (let grade of grades) {
//       average += grade;
//     }
//     average /= grades.length;
//     console.log(`${name}: ${average.toFixed(2)}`);
//   }
// }

//--------с Обект------------
// function schoolGrades(input) {
//   let res = {};
//   for (let line of input) {
//     let tokens = line.split(" ");
//     let name = tokens.shift();
//     let grades = tokens.map(Number);

//     if (res.hasOwnProperty(name) == false) {
//       res[name] = [];
//     }
//     let existing = res[name];
//     for (let grade of grades) {
//       existing.push(grade);
//     }
//   }
//   let sorted = Object.entries(res);
//   sorted.sort((a, b) => a[0].localeCompare(b[0]));

//   for (let [name, grades] of sorted) {
//     let average = 0;
//     for (let grade of grades) {
//       average += grade;
//     }
//     average /= grades.length;
//     console.log(`${name}: ${average.toFixed(2)}`);
//   }
// }
