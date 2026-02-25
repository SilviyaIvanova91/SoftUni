//---Enums---
enum HttpStatus {
  Success = 200,
  Error = 400,
  Warning = 300,
}

let status1: HttpStatus = HttpStatus.Success;
console.log(status1);

//---Generics ---
// function identity<T>(arg: T): T {
//   return arg;
// }
// let output = identity<string>("myString");
// // type of output will be 'string'
// let output2 = identity(5);
// // type of output will be

//---Interfacec---
// function printLabel(labelledObj: { label: string }) {
//   console.log(labelledObj.label);
// }

// let myObj = { size: 10, label: "Size 10 Object" };
// printLabel(myObj);

// interface LabelledValue {
//   label: string;
// }

// function printLabel2(labelledObj: LabelledValue) {
//   console.log(labelledObj.label);
// }

// let myObj2 = { size: 10, label: "Size 10 Object" };
// printLabel(myObj2);

//---Inheritance-
// class Animal {
//   move(distanceInMeters: number = 0): void {
//     console.log(`Animal moved ${distanceInMeters}m.`);
//   }
// }

// class Dog extends Animal {
//   bark(): void {
//     console.log("Woof! Woof!");
//   }
// }

// const dog = new Dog();
// dog.bark();
// dog.move(10);
// dog.bark();

//---Classes---
// class Greeter {
//   public greeting: string;
//   constructor(message: string) {
//     this.greeting = message;
//   }
//   greet(): string {
//     return `Hello, ${this.greeting}`;
//   }
// }
// let greeter: Greeter = new Greeter("world!");
// console.log(greeter.greet());

// let list: number[] = [1, 2, 3];
// let list2: Array<number> = [1, 2, 3];
