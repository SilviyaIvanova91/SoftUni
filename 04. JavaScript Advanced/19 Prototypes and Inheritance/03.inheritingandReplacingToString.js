function toStringExtension() {
  class Person {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }
    toString(value) {
      return `${this.constructor.name} (name: ${this.name}, email: ${
        this.email
      }${value === undefined ? "" : `, ${value}`})`;
    }
  }

  class Teacher extends Person {
    constructor(name, email, subject) {
      super(name, email);
      this.subject = subject;
    }
    toString() {
      return super.toString(`subject: ${this.subject}`);
    }
  }

  class Student extends Person {
    constructor(name, email, course) {
      super(name, email);
      this.course = course;
    }
    toString() {
      return super.toString(`course: ${this.course}`);
    }
  }

  return {
    Person,
    Teacher,
    Student,
  };
}

let classes = toStringExtension();
let Person = classes.Person;
let Teacher = classes.Teacher;
let Student = classes.Student;

let p = new Person("Pesho", "Pesho@pesh.com");
console.log(p);
//expect(p.toString()).to.equal("Person (name: Pesho, email: Pesho@pesh.com)");

// let classes = result();
// let Person = classes.Person;
// let Teacher = classes.Teacher;
// let Student = classes.Student;

// let t = new Teacher("Ivan", "ivan@ivan.com", "Graphics");
// console.log(t);
// expect(t.toString()).to.equal(
//   "Teacher (name: Ivan, email: ivan@ivan.com, subject: Graphics)"
// );
