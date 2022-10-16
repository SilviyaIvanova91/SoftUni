const { expect } = require("chai");
const flowerShop = require("./flowerShop");

describe("Flower Shop Tests", () => {
  describe("calcPriceOfFlowers(flower, price, quantity)", () => {
    it("if one of parametar is not valid", () => {
      expect(() => flowerShop.calcPriceOfFlowers([], 2, 2)).to.throw(
        "Invalid input!"
      );
    });

    it("if one of parametar is not valid", () => {
      expect(() => flowerShop.calcPriceOfFlowers("", "", 2)).to.throw(
        "Invalid input!"
      );
    });

    it("if one of parametar is not valid", () => {
      expect(() => flowerShop.calcPriceOfFlowers("", 2, "2")).to.throw(
        "Invalid input!"
      );
    });

    it("if тво of parametarс is not valid", () => {
      expect(() => flowerShop.calcPriceOfFlowers([], "2", 2)).to.throw(
        "Invalid input!"
      );
    });

    it("if all of parametars is not valid", () => {
      expect(() => flowerShop.calcPriceOfFlowers([], "2", "2")).to.throw(
        "Invalid input!"
      );
    });

    it("if all of parametars is not valid", () => {
      expect(flowerShop.calcPriceOfFlowers("", 3, 3)).to.equal(
        `You need $9.00 to buy !`
      );
    });

    it("if all of parametars is not valid", () => {
      expect(flowerShop.calcPriceOfFlowers("", 10, 10)).to.equal(
        `You need $100.00 to buy !`
      );
    });
  });

  describe("checkFlowersAvailable(flower, gardenArr)", () => {
    let gardenArr = [];
    beforeEach(() => {
      gardenArr = ["Rose", "Lily", "Orchid"];
    });
    it("if one of parametar is not valid", () => {
      let flower = "Rose";
      //let gardenArr = ["Rose", "Lily", "Orchid"];
      expect(flowerShop.checkFlowersAvailable(flower, gardenArr)).to.equal(
        `The ${flower} are available!`
      );
    });

    it("if one of parametar is not valid", () => {
      let flower = "Lily";
      //let gardenArr = ["Rose", "Lily", "Orchid"];
      expect(flowerShop.checkFlowersAvailable(flower, gardenArr)).to.equal(
        `The ${flower} are available!`
      );
    });

    it("if one of parametar is not valid", () => {
      let flower = "Lale";
      // let gardenArr = ["Rose", "Lily", "Orchid"];
      expect(flowerShop.checkFlowersAvailable(flower, gardenArr)).to.equal(
        `The ${flower} are sold! You need to purchase more!`
      );
    });
  });

  describe("sellFlowers(gardenArr, space)", () => {
    it("if one of parametar is not valid", () => {
      let gardenArr = ["Rose", "Lily", "Orchid"];
      let space = 0;
      let finalArr = ["Lily", "Orchid"];
      expect(flowerShop.sellFlowers(gardenArr, space)).to.equal(
        `${finalArr.join(" / ")}`
      );
    });

    it("if one of parametar is not valid", () => {
      let gardenArr = ["Rose", "Lily", "Orchid"];
      let space = 1;
      let finalArr = ["Rose", "Orchid"];
      expect(flowerShop.sellFlowers(gardenArr, space)).to.equal(
        `${finalArr.join(" / ")}`
      );
    });

    it("if one of parametar is not valid", () => {
      let gardenArr = ["Rose", "Lily", "Orchid"];
      let space = 2;
      let finalArr = ["Rose", "Lily"];
      expect(flowerShop.sellFlowers(gardenArr, space)).to.equal(
        `${finalArr.join(" / ")}`
      );
    });

    it("if one of parametar is not valid", () => {
      let gardenArr = ["Rose"];
      let space = 0;
      let finalArr = [];
      expect(flowerShop.sellFlowers(gardenArr, space)).to.equal(
        `${finalArr.join(" / ")}`
      );
    });

    it("if one of parametar is not valid", () => {
      let gardenArr = ["Rose", "Lily", "Orchid"];
      let space = -1;
      expect(() => flowerShop.sellFlowers(gardenArr, space)).to.throw(
        "Invalid input!"
      );
    });

    it("if one of parametar is not valid", () => {
      let gardenArr = ["Rose", "Lily", "Orchid"];
      let space = 3;
      expect(() => flowerShop.sellFlowers(gardenArr, space)).to.throw(
        "Invalid input!"
      );
    });
  });
});
