class Employee {
  public name: string;
  public age: number;
  public salary: number;
  public task: Array<string>;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.salary = 0;
    this.task = [];
  }

  public work(): void {
    const currentTask = this.task.shift();
    this.task.push(currentTask);
    console.log(this.name + currentTask);
  }

  public collectSalary(): void {
    console.log(`${this.name} recived ${this.getSAlary()} this month.`);
  }

  public getSAlary(): number {
    return this.salary;
  }
}

export class Junior extends Employee {
  constructor(name: string, age: number) {
    super(name, age);
    this.task.push(` is working on a simple task.`);
  }
}

export class Senior extends Employee {
  constructor(name: string, age: number) {
    super(name, age);
    this.task.push(` is working on a complicated task.`);
    this.task.push(` is taking time off work.`);
    this.task.push(` is supervising junior workers.`);
  }
}

export class Manager extends Employee {
  public divident: number;

  constructor(name: string, age: number) {
    super(name, age);
    this.divident = 0;
    this.task.push(` sheduled a meeting.`);
    this.task.push(` is preparing a quarterly report.`);
  }

  public getSAlary(): number {
    return this.salary + this.divident;
  }

  //   public getSAlary(): void {
  //     console.log(
  //       `${this.name} received ${this.salary + this.divident} this month.`,
  //     );
  //   }
}

//--------------------------
// const seniorDev = new Senior("Daniel", 29);
// seniorDev.salary = 3500;
// seniorDev.collectSalary();
// // Daniel received 3500 this month.
// seniorDev.salary += 500; // raise
// seniorDev.collectSalary();
// // Daniel received 4000 this month.

//---------------------------
// const employees = [
//   new Junior("Alex", 21),
//   new Senior("Sophia", 35),
//   new Manager("Robert", 50),
// ];
// employees[0].salary = 1000;
// employees[1].salary = 4000;
// employees[2].salary = 6000;
// (employees[2] as Manager).divident = 2000;
// for (const employee of employees) {
//   employee.work();
//   employee.collectSalary();
// }

//----------------------------------
// const manager = new Manager("John", 45);
// manager.salary = 5000;
// manager.divident = 1500;
// manager.work();
// // John scheduled a meeting.
// manager.work();
// // John is preparing a quarterly report.
// manager.work();
// // John scheduled a meeting. (cycles)
// manager.collectSalary();
// // John received 6500 this month.

//----------------------------------
// const senior = new Senior("Maria", 32);
// senior.salary = 3000;
// senior.work();
// // Maria is working on a complicated task.
// senior.work();
// // Maria is taking time off work.
// senior.work();
// // Maria is supervising junior workers.
// senior.work();
// // Maria is working on a complicated task. (starts over)
// senior.collectSalary();
// // Maria received 3000 this month.

//-------------------------------------------
// const manager = new Manager("Alice", 40);
// manager.salary = 5000;
// manager.divident = 2000;
// manager.work(); // Alice scheduled a meeting.
// manager.collectSalary(); // Alice received 7000 this month.

//---------------------------------
// const junior = new Junior("Peter", 22);
// junior.salary = 1200;
// junior.work();
// // Peter is working on a simple task.
// junior.work();
// // Peter is working on a simple task. (cycles because only 1 task)
// junior.collectSalary();
// // Peter received 1200 this month.
