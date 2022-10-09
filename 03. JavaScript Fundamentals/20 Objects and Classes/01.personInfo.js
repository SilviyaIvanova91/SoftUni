function personInfo(firstName, lastName, age) {
  let person = {
    firstName: firstName,
    lastName: lastName,
    age: age,
  };
  return person;
}

console.log(personInfo("Peter", "Pan", "20"));
console.log(personInfo("George", "Smith", "18"));

//----------------------------------------
// function personInfo(firstName, lastName, age) {
//     let person = {
//       'firstName': firstName,
//       'lastName': lastName,
//       'age': age,
//     };
//     return person;
//   }

//-----------------------------------------
// function personInfo(firstName, lastName, age) {
//     let person = {}

//     person.firstName = firstName;
//     person.lastName = lastName;
//     person.age = age;
//     return person;
//   }

//---------------------------------------
// function personInfo(firstName, lastName, age) {
//   let person = {
//     firstName,
//     lastName,
//     age,
//   };
//   return person;
// }
