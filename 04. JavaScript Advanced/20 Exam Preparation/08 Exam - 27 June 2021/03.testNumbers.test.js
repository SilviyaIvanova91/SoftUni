const { expect } = require("chai");
const testNumbers = require("./testNumbers");

describe("Tests Numbers", () => {
  describe("sumNumber(num1, num2)", () => {
    it("when num is positive ", () => {
      let a = 5;
      let b = 5;
      let res = a + b;
      expect(testNumbers.sumNumbers(a, b)).to.equal(res.toFixed(2));
    });

    it("when num is negative ", () => {
      let a = -5;
      let b = -5;
      let res = a + b;
      expect(testNumbers.sumNumbers(a, b)).to.equal(res.toFixed(2));
    });

    it("when num is positiva and negative ", () => {
      let a = 5;
      let b = -5;
      let res = a + b;
      expect(testNumbers.sumNumbers(a, b)).to.equal(res.toFixed(2));
    });

    it("when num is positiva and negative ", () => {
      let a = -5;
      let b = 5;
      let res = a + b;
      expect(testNumbers.sumNumbers(a, b)).to.equal(res.toFixed(2));
    });

    it("when num is positiva and zero ", () => {
      let a = 5;
      let b = 0;
      let res = a + b;
      expect(testNumbers.sumNumbers(a, b)).to.equal(res.toFixed(2));
    });

    it("when num is negative and negative ", () => {
      let a = 0;
      let b = -5;
      let res = a + b;
      expect(testNumbers.sumNumbers(a, b)).to.equal(res.toFixed(2));
    });

    it("when num is negative and negative ", () => {
      expect(testNumbers.sumNumbers("a", 5)).to.be.undefined;
    });

    it("when num is negative and negative ", () => {
      expect(testNumbers.sumNumbers("a", "5")).to.be.undefined;
    });

    it("when num is negative and negative ", () => {
      expect(testNumbers.sumNumbers([], 5)).to.be.undefined;
    });
  });

  describe("numberChecker(input)", () => {
    it("when num is even", () => {
      expect(testNumbers.numberChecker(2)).to.equal(`The number is even!`);
    });

    it("when num is even", () => {
      expect(testNumbers.numberChecker(26)).to.equal(`The number is even!`);
    });

    it("when num is even", () => {
      expect(testNumbers.numberChecker(124)).to.equal(`The number is even!`);
    });

    it("when num is odd", () => {
      expect(testNumbers.numberChecker(1)).to.equal(`The number is odd!`);
    });

    it("when num is odd", () => {
      expect(testNumbers.numberChecker(15)).to.equal(`The number is odd!`);
    });

    it("when num is odd", () => {
      expect(testNumbers.numberChecker(221)).to.equal(`The number is odd!`);
    });

    it("when num is non valid", () => {
      expect(() => {
        testNumbers.numberChecker("j");
      }).to.throw("The input is not a number!");
    });

    it("when num is non valid", () => {
      expect(() => {
        testNumbers.numberChecker(["j"]);
      }).to.throw("The input is not a number!");
    });
  });

  describe("averageSumArray(arr)", () => {
    it("sum of num", () => {
      expect(testNumbers.averageSumArray([1, 2, 3, 4])).to.equal(2.5);
    });

    it("sum of num", () => {
      expect(testNumbers.averageSumArray([1, -2, -3, 4])).to.equal(0);
    });
  });
});
