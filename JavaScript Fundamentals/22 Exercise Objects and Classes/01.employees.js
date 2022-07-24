function employees(input) {
  let person = Object.keys(input);
  for (let key of person) {
    console.log(`Name: ${input[key]} -- Personal Number: ${input[key].length}`);
  }
}

employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
employees(["Samuel Jackson", "Will Smith", "Bruce Willis", "Tom Holland"]);

//-----------------------------------
// function employees(input) {
//   let listObject = {};
//   for (let key of person) {
//     listObject.name = person;
//     listObject.number = person.length;
//     console.log(
//       `Name: ${listObject.name} -- Personal Number: ${listObject.number}`
//     );
//   }
// }

//-------------------------------------------------------------
// function employees(input) {
//     let person = {};
//     for (let keyWrd of input) {
//         person.name = keyWrd
//         person.personalNumber = keyWrd.length
//       console.log(`Name: ${person.name} -- Personal Number: ${person.personalNumber}`);
//     }
//   }

//--------------------------------------------------------------
// function employees(input) {
//   let listOfperson = [];
//   class Persons {
//     constructor(name, length) {
//       this.name = name;
//       this.length = length;
//     }
//   }
//   for (let keyWrd of input) {
//     listOfperson.name = keyWrd;
//     listOfperson.personalNumber = keyWrd.length;
//     let currPersonal = new Persons(keyWrd, keyWrd.length);
//     listOfperson.push(currPersonal);
//   }
//   listOfperson.forEach((currPersonal) =>
//     console.log(
//       `Name: ${currPersonal.name} -- Personal Number: ${currPersonal.length}`
//     )
//   );
// }
