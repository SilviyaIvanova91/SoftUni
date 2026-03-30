function addCreatedOn(constructor: { new (...args: any[]): User3 }) {
  return class extends constructor {
    createdOn = new Date();
  };
}

@addCreatedOn
class User3 {
  public name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public displayUserInfo(): void {
    console.log(`${this.name} is ${this.age} years old.`);
  }
}

const userr = new User3("John Doe", 30);
userr.displayUserInfo();
console.log(userr);
console.log((userr as any).createdOn);
