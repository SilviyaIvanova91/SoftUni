function addCreatedOn<T extends { new (...args: any[]): {} }>(constructor: T) {
  let newClass = class extends constructor {
    createdOn = Date.now();
  };
  return newClass;
}

function censorData<T extends { [key: string]: any }>(
  censorService: MockCensorService<T>,
) {
  return function (
    target: object,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function () {
      const result = originalMethod.call(this);

      return censorService.censorProperties(result);
    };

    return descriptor;
  };
}

function log(target: Object, key: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value;
  descriptor.value = function () {
    try {
      let result = original.call(this);
      console.log(`Method ${key} called successfully`);
      return result;
    } catch (e) {
      console.log(`Method ${key} cannot be called.`);
    }
  };
  return descriptor;
}

function latestOnly(delay: number) {
  return function (
    target: Object,
    key: string,
    descriptor: PropertyDescriptor,
  ) {
    const original = descriptor.value;
    descriptor.value = function () {
      const data = original.call(this);
      const currentTime = new Date();
      currentTime.setSeconds(currentTime.getSeconds() - delay);
      const recentTime = data.filter(
        (item: any) => item.createdOn > currentTime,
      );
      return recentTime;
    };
    return descriptor;
  };
}

class MockCensorService<T extends { [key: string]: any }> {
  constructor(private censoredProperties: string[]) {}

  censorProperties(items: T[]) {
    let censoredItems = items.slice();
    censoredItems.forEach((i) => {
      this.censoredProperties.forEach((prop) => {
        delete i[prop];
      });
    });

    return censoredItems;
  }
}

@addCreatedOn
class User {
  constructor(
    public name: string,
    public age: number,
    public creditCardNumber: string,
  ) {}

  getInfo() {
    return `${this.name}, Age: ${this.age} CreditCardNumber: ${this.creditCardNumber}`;
  }
}

@addCreatedOn
class Employee {
  constructor(
    public name: string,
    public birthday: Date,
    public salary: number,
  ) {}

  getInfo() {
    return `${this.name}, Birthday: ${this.birthday?.toLocaleDateString()} Salary: ${this.salary}`;
  }
}

let userCensorService = new MockCensorService<User>(["creditCardNumber"]);
let employeeCensorService = new MockCensorService<Employee>([
  "birthday",
  "salary",
]);

class UsersService {
  private _users: User[];
  private _employees: Employee[];
  constructor(users: User[], employees: Employee[]) {
    this._users = users;
    this._employees = employees;
  }

  addUser(user: User) {
    this._users.push(user);
  }

  addEmployee(employee: Employee) {
    this._employees.push(employee);
  }

  @censorData<User>(userCensorService)
  @latestOnly(5)
  getUsers() {
    return this._users;
  }

  @log
  @censorData<Employee>(employeeCensorService)
  @latestOnly(10)
  getEmployees() {
    return this._employees;
  }
}

const user1 = new User("John Does", 30, "ABCD-1234");
const user2 = new User("Benny Tres", 23, "EFGH-5678");
const emp1 = new Employee("Sarah Connor", new Date(1964, 4, 15), 2500);
const emp2 = new Employee("Arnold Schwarzenegger", new Date(1947, 6, 30), 3500);
let usersService = new UsersService([user1, user2], [emp1, emp2]);
let users = usersService.getUsers();
console.log(users.map((x) => x.getInfo()));
let employees = usersService.getEmployees();
console.log(employees.map((x) => x.getInfo()));

//7 seconds later
setTimeout(() => {
  const user3 = new User("Jimmy Quatro", 27, "IJKL-9012");
  const emp3 = new Employee("Kyle Reese", new Date(2004, 0, 1), 2000);
  usersService.addUser(user3);
  usersService.addEmployee(emp3);
  let users = usersService.getUsers();
  console.log(users.map((x) => x.getInfo()));
  let employees = usersService.getEmployees();
  console.log(employees.map((x) => x.getInfo()));
}, 7000);

//15 seconds later
setTimeout(() => {
  let users = usersService.getUsers();
  console.log(users.map((x) => x.getInfo()));
  let employees = usersService.getEmployees();
  console.log(employees.map((x) => x.getInfo()));
}, 15000);
