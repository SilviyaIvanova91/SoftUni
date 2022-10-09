function addressBook(input) {
  let res = {};
  for (let line of input) {
    let [name, adress] = line.split(":");
    res[name] = adress;
  }
  let sortedKeys = Object.keys(res);
  sortedKeys.sort((a, b) => a.localeCompare(b));

  for (let name of sortedKeys) {
    console.log(name, "->", res[name]);
  }
}

addressBook([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
addressBook([
  "Bob:Huxley Rd",
  "John:Milwaukee Crossing",
  "Peter:Fordem Ave",
  "Bob:Redwing Ave",
  "George:Mesta Crossing",
  "Ted:Gateway Way",
  "Bill:Gateway Way",
  "John:Grover Rd",
  "Peter:Huxley Rd",
  "Jeff:Gateway Way",
  "Jeff:Huxley Rd",
]);

//----------------------------------------
function addressBook(input) {
  let res = {};
  for (let line of input) {
    let [name, adress] = line.split(":");
    res[name] = adress;
  }

  let entries = Object.entries(res);
  let sortedEnties = entries.sort(([keyA, valueA], [keyB, valueB]) => {
    return keyA.localeCompare(keyB);
  });

  for (let [name, adress] of sortedEnties) {
    console.log(name, "->", adress);
  }
}

//-----------------------------------------
// function addressBook(input) {
//     let res = {};
//     for (let line of input) {
//       let [name, adress] = line.split(":");
//       res[name] = adress;
//     }
//     let sorted = Object.entries(res);
//     sorted.sort((a, b) => a[0].localeCompare(b[0]));

//     for (let [name, adress] of sorted) {
//       console.log(name, "->", adress);
//     }
//   }

//------------------------------------------
// function addressBook(input) {
//     let res = {};
//     for (let line of input) {
//       let [name, adress] = line.split(":");
//       res[name] = adress;
//     }
//     let sorted = Object.entries(res);
//     sorted.sort((a, b) => {
//       let nameA = a[0];
//       let nameB = b[0];

//       return nameA.localeCompare(nameB);
//     });

//     for (let [name, adress] of sorted) {
//       console.log(name, "->", adress);
//     }
//   }
