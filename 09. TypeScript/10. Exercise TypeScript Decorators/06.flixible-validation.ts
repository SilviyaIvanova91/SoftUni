function validateName(minLength: number) {
  return function (
    target: object,
    propName: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalSet = descriptor.set!;

    descriptor.set = function (val: string) {
      if (val.length < minLength) {
        throw new Error(
          `name must have a min length of ${minLength} characters`,
        );
      }

      originalSet.call(this, val);
    };
    return descriptor;
  };
}

function validateAge(min: number, max: number) {
  return function (
    target: object,
    propName: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalSet = descriptor.set!;

    descriptor.set = function (val: number) {
      if (val < min || val > max) {
        throw new Error(`age must be between ${min} and ${max}`);
      }

      originalSet.call(this, val);
    };
    return descriptor;
  };
}

function validatePassword(pattern: RegExp) {
  return function (
    target: object,
    propName: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalSet = descriptor.set!;

    descriptor.set = function (val: string) {
      if (!val.match(pattern)) {
        throw new Error(`password needs to match ${pattern}`);
      }

      originalSet.call(this, val);
    };
    return descriptor;
  };
}

class User2 {
  private _name!: string;
  private _age!: number;
  private _password!: string;

  constructor(name: string, age: number, password: string) {
    this.name = name;
    this.age = age;
    this.password = password;
  }

  @validateName(1)
  set name(val: string) {
    this._name = val;
  }

  @validateAge(1, 150)
  set age(val: number) {
    this._age = val;
  }

  @validatePassword(/^[a-zA-Z0-9!@]+$/g)
  set password(val: string) {
    this._password = val;
  }

  get name() {
    return this._name;
  }
  get age() {
    return this._age;
  }
}

let user = new User2("John", 130, "hardPassword12");
let userr2 = new User2("John", 30, "!test");
let user3 = new User2("John", 25, "@werty");
let user4 = new User2("Jo", 20, "password123");

//let user = new User2("John", 130, "hardPassword12");
//let user2 = new User2("John", 30, "!test");
//let user3 = new User2("John", 25, "@werty");
//let user4 = new User2("Jo", 20, "password123");
