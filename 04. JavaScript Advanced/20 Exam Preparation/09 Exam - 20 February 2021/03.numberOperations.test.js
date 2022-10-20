const { expect } = require("chai");
const numberOperations = require("./03. Number Operations_Resources");

describe("Tests numberOperations", function () {
  describe("powNumber(num)", function () {
    it("return the power of given number", function () {
      expect(numberOperations.powNumber(3)).to.equal(9);
    });
  });

  describe("numberChecker(input)", function () {
    it("if input is not a valid", function () {
      expect(() => numberOperations.numberChecker(NaN)).to.throw(
        `The input is not a number!`
      );
    });

    it("if input is lower than 100", function () {
      expect(numberOperations.numberChecker(1)).to.equal(
        "The number is lower than 100!"
      );
    });

    it("if input is lower than 100", function () {
      expect(numberOperations.numberChecker(99)).to.equal(
        "The number is lower than 100!"
      );
    });

    it("if input is greater than 100", function () {
      expect(numberOperations.numberChecker(101)).to.equal(
        "The number is greater or equal to 100!"
      );
    });

    it("if input is greater than 100", function () {
      expect(numberOperations.numberChecker(100)).to.equal(
        "The number is greater or equal to 100!"
      );
    });
  });

  describe("sumArrays(array1, array2)", function () {
    it("sum of arrays", function () {
      expect(numberOperations.sumArrays([1, 2, 3], [4, 3, 2])).to.deep.equal([
        5, 5, 5,
      ]);
    });

    it("sum of arrays", function () {
      expect(numberOperations.sumArrays([1, 2, 3], [4, 3])).to.deep.equal([
        5, 5, 3,
      ]);
    });

    it("sum of arrays", function () {
      expect(numberOperations.sumArrays([-1, -5], [-4, -3])).to.deep.equal([
        -5, -8,
      ]);
    });

    it("sum of arrays", function () {
      expect(numberOperations.sumArrays([0, -5], [4, 3])).to.deep.equal([
        4, -2,
      ]);
    });

    it("sum of arrays", function () {
      expect(numberOperations.sumArrays([5], [4])).to.deep.equal([9]);
    });

    it("sum of arrays", function () {
      expect(numberOperations.sumArrays([0, 0], [0, 0])).to.deep.equal([0, 0]);
    });
  });
});
