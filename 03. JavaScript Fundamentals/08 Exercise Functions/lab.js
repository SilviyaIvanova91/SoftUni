 function firstProgram(firstNum, secondNum) {
   let res = firstNum + secondNum;
   return res;
 }
 console.log(firstProgram(1, 2));
 let funcRes = firstProgram(5, 5);
 console.log(funcRes);
 firstProgram();

// //--------------------------------------------------
 firstProgram = function (firstNum, secondNum) {
   let res = firstNum + secondNum;
   return res;
 };

 let res = firstProgram(1, 2);
 console.log(res);

// //---------------------------------------------------
 console.log(firstProgram(1, 2));
 function firstProgram(firstNum, secondNum) {
   let res = firstNum + secondNum;
   return res;
 }

 let newFunc = function (num, num2) {
   return num + num2;
 };

// //----------------------------------------------------
 let arrowFunc = (num1, num2) => num1 + num2;
 let newFunction = function (num1, num2) {
   return num1 + num2;
 };

 console.log(arrowFunc(1, 2));
 console.log(newFunction(2, 3));

//--------------------------------------------------
 function firstProgram(firstName, secondName, cityName, age) {
   let fullName = firstName + " " + secondName;
   let fullWord = function (fullName, city, age) {
     return `My full name is ${fullName} and I am from town ${
       city ? city : "Sofia"
     } and I am ${age} years old.`;
   };
   let wordResult = fullWord(fullName, cityName, age)
   console.log(wordResult);
 }

 console.log(firstProgram("Pesho", "Peshov", "Gorna Dolina", 25));
 console.log(firstProgram("Pesho", "Georgiev"));

//---------------------------------------------------
let sum = (a, b) => a + b;
console.log(sum(3, 4) % 2 === 0 ? "Yes" : "no");
function someSum(a, b) {
  return a + b;
}
console.log(someSum(5, 7) % 2 === 0 ? "yes" : "no");
