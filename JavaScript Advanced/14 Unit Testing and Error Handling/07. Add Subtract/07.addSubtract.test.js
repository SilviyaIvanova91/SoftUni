const { expect } = require("chai");
const createCalculator = require("./07.addSubtract");

describe("Add or Substract value", () => {
  it("check add and subtract functionality with positive numbers", function () {
    let calculator = createCalculator();

    calculator.add(404);
    calculator.subtract("101");

    expect(calculator.get()).to.equal(303);
  });

  it("check add and subtract functionality with negative numbers", function () {
    let calculator = createCalculator();

    calculator.add("-404");
    calculator.subtract(-101);

    expect(calculator.get()).to.equal(-303);
  });

  it("Should be object typeof.", () => {
    let expectedResult = "object";
    let actualResult = typeof createCalculator();
    expect.equal(expectedResult, actualResult);
  });

  it("Should be function typeof.", () => {
    let expectedResult = "function";
    let actualResult = typeof createCalculator().add;
    expect.equal(expectedResult, actualResult);
  });

  it("Check add method in main function.", () => {
    let expectedResult = undefined;
    let actualResult = createCalculator().add();
    expect.equal(expectedResult, actualResult);
  });

  it("Check subtract method in main function.", () => {
    let expectedResult = undefined;
    let actualResult = createCalculator().subtract();
    expect.equal(expectedResult, actualResult);
  });

  it("Check get method in main function.", () => {
    let expectedResult = 0;
    let actualResult = createCalculator().get();
    expect.equal(expectedResult, actualResult);
  });

  it("Check parse numbers and method works.", () => {
    let calc = createCalculator();
    calc.add("4");
    calc.subtract("2");
    let expectedResult = 2;
    let actualResult = calc.get();
    expect.equal(expectedResult, actualResult);
  });

  it("Should can`t be modify by outside.", () => {
    let expectedResult = undefined;
    let actualResult = createCalculator().value;
    expect.equal(expectedResult, actualResult);
  });

  it("Check parse numbers if works.", () => {
    let calc = createCalculator();
    calc.add("1");
    let expectedResult = 1;
    let actualResult = calc.get();
    expect.equal(expectedResult, actualResult);
  });
});
