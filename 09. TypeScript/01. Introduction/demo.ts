const firstName: string = "Silviya";
const lastName: string = "Ivanova";
const age: number = 29;
const hasFraduated: boolean = false;

const binaryNum: number = 0b0011;
console.log(binaryNum);

const hexNum: number = 0xb;
console.log(hexNum);

const coursesTaken: string[] = ["One", "Two"];

// personInfo -> 1. string -> name, number -> age
const personInfo: [string, number] = ["Silviya", 20];

enum TodoStates {
  NOT_STARTED,
  IN_PROGRESS,
  COMPLETED,
}
console.log(TodoStates);

function printFullName(
  firstNAme: string,
  lastName: string,
  middleName?: string,
): void {
  const fullName = middleName
    ? `${firstNAme} ${middleName} ${lastName}`
    : `${firstNAme} ${lastName}`;

  console.log(`Hello, ${fullName}`);
}
printFullName("Petya", "Mihova", "Ivanova");
printFullName("Petya", "Ivanova");

let httpCode = {
  code: 404,
  text: "Page not found",
};

let val: unknown = 20;
let str = val as string;
console.log(str.length);

//---Type Assertions
const nameInputEl = document.getElementById("name");
// console.log(nameInputEl!.value); !!!false
console.log((nameInputEl! as HTMLInputElement).value);
console.log((<HTMLInputElement>nameInputEl!).value);

//---Type Guards
function printSth(val: unknown) {
  if (typeof val === "string") {
    console.log(val.length);
  }
}

function isValidObj(val: unknown) {
  return typeof val === "object" && val !== null;
}
console.log(isValidObj(null)); //false
console.log(isValidObj({ name: "Ivan", age: 10 })); //true
console.log(isValidObj({})); //true

//ако върне true вече ще третира стойноста като {Object}
function isValidObjSec(val: unknown): val is object {
  return typeof val === "object" && val !== null;
}
