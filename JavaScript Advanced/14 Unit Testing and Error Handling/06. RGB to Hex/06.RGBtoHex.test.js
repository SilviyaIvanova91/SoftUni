const { expect } = require("chai");
const { rgbToHexColor } = require("./06.RGBtoHex");

describe("RGBtoHexColor", () => {
  it("convert black", () => {
    expect(rgbToHexColor(0, 0, 0)).to.equal("#000000");
  });

  it("convert white", () => {
    expect(rgbToHexColor(255, 255, 255)).to.equal("#FFFFFF");
  });

  it("convert SoftUni blue to #234465", () => {
    expect(rgbToHexColor(35, 68, 101)).to.equal("#234465");
  });

  it("convert 15,15,15 to #0F0F0F", () => {
    expect(rgbToHexColor(15, 15, 15)).to.equal("#0F0F0F");
  });

  it("return defined for missing params", () => {
    expect(rgbToHexColor(0, 0)).to.be.undefined;
    expect(rgbToHexColor(0)).to.be.undefined;
    expect(rgbToHexColor()).to.be.undefined;
  });

  it("return undefined for out of lower bound", () => {
    expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
    expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
    expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
  });

  it("return undefined for out of upper bound", () => {
    expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
    expect(rgbToHexColor(0, 256, 0)).to.be.undefined;
    expect(rgbToHexColor(0, 0, 256)).to.be.undefined;
  });

  it("return undefined for float", () => {
    expect(rgbToHexColor(1.1, 0, 0)).to.be.undefined;
    expect(rgbToHexColor(0, 1.1, 0)).to.be.undefined;
    expect(rgbToHexColor(0, 0, 1.1)).to.be.undefined;
  });

  it("return undefined for float", () => {
    expect(rgbToHexColor("1", 0, 0)).to.be.undefined;
    expect(rgbToHexColor(0, "1", 0)).to.be.undefined;
    expect(rgbToHexColor(0, 0, "1")).to.be.undefined;
  });
});
