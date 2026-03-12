var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// ----Object and Classes-----
var Student = /** @class */ (function () {
    function Student(fn, ln, y) {
        this.firstName = fn;
        this.lastName = ln;
        this.year = y;
        Student.studentCount++;
    }
    Student.prototype.printInfo = function () {
        console.log(" ".concat(this.firstName, " ").concat(this.lastName, " is in year ").concat(this.year));
    };
    Student.studentCount = 0;
    return Student;
}());
var student1 = new Student("John", "Doe", 10);
student1.printInfo();
// class GraduateStudent{
//     private firstName: string;
//     private lastName: string;
//     private thesisTitle: string;
// }
var GraduateStudent = /** @class */ (function (_super) {
    __extends(GraduateStudent, _super);
    function GraduateStudent(fn, ln, y, thesisTitle) {
        var _this = _super.call(this, fn, ln, y) || this;
        _this._thesisTitle = thesisTitle;
        return _this;
    }
    Object.defineProperty(GraduateStudent.prototype, "thesisTitle", {
        get: function () {
            return this._thesisTitle;
        },
        set: function (newTitle) {
            if (newTitle.length > 0) {
                this._thesisTitle = newTitle;
            }
            else {
                console.log("Invalid thesis title");
            }
        },
        enumerable: false,
        configurable: true
    });
    GraduateStudent.prototype.printInfo = function () {
        _super.prototype.printInfo.call(this);
        console.log("Thesis title: ".concat(this._thesisTitle));
    };
    return GraduateStudent;
}(Student));
var student2 = new GraduateStudent("mimnco", "petkov", 2, "Quantum Physics");
student2.thesisTitle = "";
student2.printInfo();
console.log(Student.studentCount);
