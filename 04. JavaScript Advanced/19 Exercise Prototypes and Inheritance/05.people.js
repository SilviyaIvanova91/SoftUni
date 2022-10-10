function solution() {
  class Employee {
    constructor(name, age) {
      if (new.target === Employee) {
        throw new Error("Cannot make instance of abstract class Employee");
      }
      this.name = name;
      this.age = age;
      this.salary = 0;
      this.task = [];
    }
    work() {
      let currTask = this.task.shift();
      console.log(currTask);
      this.task.push(currTask);
    }
    collectSalary() {
      console.log(
        `${this.name} received ${
          this.salary + (this.dividend ? this.dividend : 0)
        } this month.`
      );
    }
  }

  class Junior extends Employee {
    constructor(name, age) {
      super(name, age);
      this.task = [`${this.name} is working on a simple task.`];
    }
  }

  class Senior extends Employee {
    constructor(name, age) {
      super(name, age);
      this.task = [
        `${this.name} is working on a complicated task.`,
        `${this.name} is taking time off work.`,
        `${this.name} is supervising junior workers.`,
      ];
    }
  }

  class Manager extends Employee {
    constructor(name, age) {
      super(name, age);
      this.dividend = 0;
      this.task = [
        `${this.name} scheduled a meeting.`,
        `${this.name} is preparing a quarterly report.`,
      ];
    }
  }

  return {
    Employee,
    Junior,
    Senior,
    Manager,
  };
}

const classes = solution();
const junior = new classes.Junior("Ivan", 25);

junior.work();
junior.work();

junior.salary = 5811;
junior.collectSalary();

const sinior = new classes.Senior("Alex", 31);

sinior.work();
sinior.work();
sinior.work();
sinior.work();

sinior.salary = 12050;
sinior.collectSalary();

const manager = new classes.Manager("Tom", 55);

manager.salary = 15000;
manager.collectSalary();
manager.dividend = 2500;

// function solution() {
//   class Employee {
//     constructor(name, age) {
//       if (new.target === Employee) {
//         throw new Error("Cannot make instance of abstract class Employee");
//       }
//       this.name = name;
//       this.age = age;
//       this.salary = 0;
//       this.task = [];
//     }
//     work() {
//       let currTask = this.task.shift();
//       console.log(this.name + " " + currTask);
//       this.task.push(currTask);
//     }

//     getSalary() {
//       return this.salary;
//     }

//     collectSalary() {
//       console.log(`${this.name} received ${this.getSalary()} this month.`);
//     }
//   }

//   class Junior extends Employee {
//     constructor(name, age) {
//       super(name, age);
//       this.task.push("is working on a simple task.");
//     }
//   }

//   class Senior extends Employee {
//     constructor(name, age) {
//       super(name, age);
//       this.task.push("is working on a complicated task.");
//       this.task.push("is taking time off work.");
//       this.task.push("is supervising junior workers.");
//     }
//   }

//   class Manager extends Employee {
//     constructor(name, age) {
//       super(name, age);
//       this.dividend = 0;
//       this.task.push("scheduled a meeting.");
//       this.task.push("is preparing a quarterly report.");
//     }
//     getSalary() {
//       return super.getSalary() + this.dividend;
//     }
//   }

//   return {
//     Employee,
//     Junior,
//     Senior,
//     Manager,
//   };
// }
