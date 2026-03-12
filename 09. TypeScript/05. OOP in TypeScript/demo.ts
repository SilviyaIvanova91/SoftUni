// ----Object and Classes-----
class Student {
  private firstName: string;
  private lastName: string;
  protected year: number;

  static studentCount: number = 0;

  constructor(fn: string, ln: string, y: number) {
    this.firstName = fn;
    this.lastName = ln;
    this.year = y;
    Student.studentCount++;
  }

  printInfo(): void {
    console.log(` ${this.firstName} ${this.lastName} is in year ${this.year}`);
  }
}

let student1 = new Student("John", "Doe", 10);
student1.printInfo();

// class GraduateStudent{
//     private firstName: string;
//     private lastName: string;
//     private thesisTitle: string;
// }
class GraduateStudent extends Student {
  private _thesisTitle!: string;

  constructor(fn: string, ln: string, y: number, thesisTitle: string) {
    super(fn, ln, y);
    this._thesisTitle = thesisTitle;
  }

  get thesisTitle(): string {
    return this._thesisTitle;
  }

  set thesisTitle(newTitle: string) {
    if (newTitle.length > 0) {
      this._thesisTitle = newTitle;
    } else {
      console.log("Invalid thesis title");
    }
  }

  override printInfo(): void {
    super.printInfo();
    console.log(`Thesis title: ${this._thesisTitle}`);
  }
}

let student2 = new GraduateStudent("mimnco", "petkov", 2, "Quantum Physics");
student2.thesisTitle = "";
student2.printInfo();

console.log(Student.studentCount);
