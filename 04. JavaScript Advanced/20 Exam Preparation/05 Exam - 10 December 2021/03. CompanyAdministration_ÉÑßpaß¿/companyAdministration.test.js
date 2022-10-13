const { expect } = require("chai");
const companyAdministration = require("./companyAdministration");

describe("companyAdministration", function () {
  describe("hiringEmployee", function () {
    it("if string position is differentfrom 'str'", function () {
      expect(() =>
        companyAdministration.hiringEmployee("someName", "Dancer", 3)
      ).to.throw("We are not looking for workers for this position.");
    });

    it("if years experiance are more than 3 years", function () {
      expect(
        companyAdministration.hiringEmployee("someName", "Programmer", 5)
      ).to.equal(
        `someName was successfully hired for the position Programmer.`
      );
    });

    it("if years experiance are more than 3 years", function () {
      expect(
        companyAdministration.hiringEmployee("someName", "Programmer", 3)
      ).to.equal(
        `someName was successfully hired for the position Programmer.`
      );
    });

    it("if years experiance are less than 3 years", function () {
      expect(
        companyAdministration.hiringEmployee("someName", "Programmer", 1)
      ).to.equal(`someName is not approved for this position.`);
    });
  });

  describe("calculateSalary (hours) ", function () {
    it("when we work 3 hour fot 15$ for hour", function () {
      expect(companyAdministration.calculateSalary(3)).to.equal(45);
    });

    it("when we work 165 hour fot 15$ for hour and we recieve bonus", function () {
      let all = 165 * 15 + 1000;
      expect(companyAdministration.calculateSalary(165)).to.equal(all);
    });

    it("when we work 160 hour fot 15$ for hour and we recieve bonus", function () {
      let all = 160 * 15;
      expect(companyAdministration.calculateSalary(160)).to.equal(all);
    });

    it("if hour is invalid input", function () {
      expect(() => companyAdministration.calculateSalary("3")).to.throw(
        "Invalid hours"
      );
    });

    it("if hour is negative input", function () {
      expect(() => companyAdministration.calculateSalary(-2)).to.throw(
        "Invalid hours"
      );
    });
  });

  describe("firedEmployee (employees, index)", function () {
    it("when remove emploee from located index", function () {
      let arr = ["Petar", "Ivan", "George"];
      expect(companyAdministration.firedEmployee(arr, 0)).to.equal(
        ["Ivan", "George"].join(", ")
      );
    });

    it("when remove emploee from located index", function () {
      let arr = ["Petar", "Ivan", "George"];
      expect(companyAdministration.firedEmployee(arr, 2)).to.equal(
        ["Petar", "Ivan"].join(", ")
      );
    });

    it("when remove emploee from located index", function () {
      let arr = ["Petar"];
      expect(companyAdministration.firedEmployee(arr, 0)).to.equal(
        [].join(", ")
      );
    });

    it("if employees parameter is not an array", function () {
      expect(() => companyAdministration.firedEmployee("", 0)).to.throw(
        "Invalid input"
      );
    });

    it("if employees parameter is not an array", function () {
      expect(() => companyAdministration.firedEmployee("", 1)).to.throw(
        "Invalid input"
      );
    });

    it("if employees parameter is not an array", function () {
      let arr = ["Petar", "Ivan", "George"];
      expect(() => companyAdministration.firedEmployee(arr, 3)).to.throw(
        "Invalid input"
      );
    });

    it("if employees parameter is not an array", function () {
      let arr = ["Petar", "Ivan", "George"];
      expect(() => companyAdministration.firedEmployee(arr, -1)).to.throw(
        "Invalid input"
      );
    });

    it("if employees parameter is not an array", function () {
      let arr = ["Petar", "Ivan", "George"];
      expect(() => companyAdministration.firedEmployee(arr, "")).to.throw(
        "Invalid input"
      );
    });

    it("if employees parameter is not an array", function () {
      let arr = ["Petar", "Ivan", "George"];
      expect(() => companyAdministration.firedEmployee(arr, 1.2)).to.throw(
        "Invalid input"
      );
    });
  });
});
