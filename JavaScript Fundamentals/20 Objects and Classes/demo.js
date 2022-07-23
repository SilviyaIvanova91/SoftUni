let person = { name: "Peter", age: 20 };

console.log(person.name);

person.age++;
console.log(person.age);

person.age = 24;
console.log(person.age);

person["age"] = 25;
console.log(person["age"]);

let propName = "age";
console.log(person[propName]);
console.log(person["a" + "ge"]);

let index = 2;
let myArr = [10, 20, 30, 40, 50];
console.log(myArr[index]);
console.log(person);

person.lastName = "Johnson";
console.log(person);

//------------------------------------------------
///-----Методи в обекти------------------------
//  1) вариант
let person = {
  name: "Peter",
  age: 20,
  sayHi: function () {
    console.log("Hello!");
  },
};
//  2) вариант
let person = {
  name: "Peter",
  age: 20,
  sayHi() {
    console.log("Hello!");
  },
};
//  3) вариант
let person = {
  name: "Peter",
  age: 20,
  sayHi: () => console.log("Hello!"),
};
//  4) вариант
person.sayHi = function () {
  console.log("Hello!");
};
person.sayHi();
//  5) вариант
person["sayHi"] = function () {
  console.log("Hello!");
};
person.sayHi();

//--------------------------------------------
//---------object.keys------------------------
let keys = Object.keys(person);
for (let key of keys) {
  console.log(key, person[key]);
}

//-----------------------------------------
//-----------Примитивни и референтни стойности-----
//-------с примитиви---steak--------
function increment(value) {
  value += 1;
}
let num = 10;
increment(num);
console.log(num);
//----- приема обект---heap-------
function increment(ref) {
  ref.number += 1;
}
let myObj = { number: 5 };

increment(myObj);
console.log(myObj);

//----------------------------------------------------
///------------------Класове--------------------------
// function crateStudent(name, grade) {
//   let res = ()

//   res.name = name
//   res.grade = grade

//   return res
// }

// let myStudent = crateStudent('Peter', 5.30)
// console.log(myStudent);

// let otherStudent = crateStudent('John', 4.80)
// console.log(otherStudent);

//----------------------
// class Student {
//   constructor(name, grade) {
//     this.name = name
//     this.grade = grade
//   }
// }
// let myStudent = crateStudent('Peter', 5.30)
// console.log(myStudent);

// let otherStudent = crateStudent('John', 4.80)
// console.log(otherStudent);
//--------------------------------------
class Student {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }
  sayHi() {
    console.log(`${this.name} says hi!`);
  }
}
let myStudent = new Student("Peter", 5.3);
myStudent.sayHi();

let otherStudent = new Student("John", 4.8);
otherStudent.sayHi();
