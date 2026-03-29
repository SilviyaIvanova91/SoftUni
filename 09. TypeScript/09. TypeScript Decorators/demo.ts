//---Decorator factories---
function log1() {
  console.log("log1 factory evaluated");
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    console.log("log1 decorator executed");
  };
}

function log2() {
  console.log("log2 factory evaluated ");
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    console.log("log2 decorator executed ");
  };
}

class ExampleClass {
  @log1()
  @log2()
  method() {}
}

//--- Accessor Decorator ---
class Point {
  constructor(
    private _x: number,
    private _y: number,
  ) {}

  @double set x(value: number) {
    this._x = value;
  }

  @double set y(value: number) {
    this._y = value;
  }
}

function double(target: any, key: string, descriptor: PropertyDescriptor) {
  let originalSet = descriptor.set;

  descriptor.set = function (val: any) {
    originalSet?.call(this, val * 2);
  };
}

let p = new Point(20, 20);
p.x = 2;
p.y = 3;
console.log(p);

//--- Method decorator ---
// class Num {
//   constructor(private _number: number) {}

//   @add10 getNumber() {
//     return this._number;
//   }
// }

// function add10(
//   target: Object,
//   methodName: string,
//   descriptor: PropertyDescriptor,
// ) {
//   let originalMethod = descriptor.value;

//   descriptor.value = function (...arg: any[]) {
//     let result = originalMethod.call(this, arg);
//     result += 10;
//     return result;
//   };

//   return descriptor;
// }

// let num = new Num(20);
// console.log(num.getNumber());

//--- Class Decorator ---
// function classDecorator(construgtor: Function) {
//   // console.log("Decorated class");
//   return function () {
//     return { age: 30 };
//   } as any;
// }

// function methodDecorator() {
//   console.log("Decorated method");
// }

// @classDecorator
// class Person {
//   firstName: string; //instance property
//   lastName: string; //instance property

//   constructor(firstName: string, lastName: string) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   // @methodDecorator
//   printInfo(showShortenedInfo: boolean): void {
//     if (showShortenedInfo) {
//       console.log(this.firstName, this.lastName);
//     } else {
//       console.log(`Person's name is ${this.firstName} ${this.lastName}`);
//     }
//   }
// }

// let person = new Person("Sil", "Iv");
// console.log(person);
