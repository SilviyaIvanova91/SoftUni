"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = exports.Senior = exports.Junior = void 0;
var Employee = /** @class */ (function () {
    function Employee(name, age) {
        this.name = name;
        this.age = age;
        this.salary = 0;
        this.task = [];
    }
    Employee.prototype.work = function () {
        var currentTask = this.task.shift();
        this.task.push(currentTask);
        console.log(this.name + currentTask);
    };
    Employee.prototype.collectSalary = function () {
        console.log("".concat(this.name, " recived ").concat(this.getSAlary(), " this month."));
    };
    Employee.prototype.getSAlary = function () {
        return this.salary;
    };
    return Employee;
}());
var Junior = /** @class */ (function (_super) {
    __extends(Junior, _super);
    function Junior(name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.task.push(" is working on a simple task");
        return _this;
    }
    return Junior;
}(Employee));
exports.Junior = Junior;
var Senior = /** @class */ (function (_super) {
    __extends(Senior, _super);
    function Senior(name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.task.push(" is working on a complicated task.");
        _this.task.push(" is taking time off work.");
        _this.task.push(" is supervising junior workers.");
        return _this;
    }
    return Senior;
}(Employee));
exports.Senior = Senior;
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.divident = 0;
        _this.task.push(" sheduled a meeting.");
        _this.task.push(" is preparing a quarterly meeting.");
        return _this;
    }
    Manager.prototype.getSAlary = function () {
        return this.salary + this.divident;
    };
    return Manager;
}(Employee));
exports.Manager = Manager;
