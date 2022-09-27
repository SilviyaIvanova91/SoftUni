const { expect } = require("chai");
const sum = require("./04.sumofNumbers");

describe("Testing sum of number", () => {
  it("return 0 with empty arr", () => {
    expect(sum([])).to.be.equal(0);
  });

  it("basic sum", () => {
    expect(sum([1])).to.equal(1);
  });

  it("sum of two nums", () => {
    expect(sum([1, 2])).to.equal(3);
  });

  it("sum of multiple nums", () => {
    expect(sum([1, 2, 3, 4])).to.equal(10);
  });

  it("return NaN with string param", () => {
    expect(sum("a")).to.be.NaN;
  });

  it("return NaN with mixed types", () => {
    expect(sum([1, "a"])).to.be.NaN;
  });
});
