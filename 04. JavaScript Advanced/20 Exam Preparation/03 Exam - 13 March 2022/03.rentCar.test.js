const { expect } = require("chai");
const rentCar = require("./rentCar");

describe("Rent Car Tests", () => {
  describe("searchCar (shop, model)", () => {
    it("find serching model in catalogue", () => {
      let catalogue = ["Volkswagen", "BMW", "Audi"];
      let serach = "Audi";
      expect(rentCar.searchCar(catalogue, serach)).to.equal(
        `There is 1 car of model Audi in the catalog!`
      );
    });

    it("when shop array is not valid input", () => {
      expect(() => rentCar.searchCar("abc", "")).to.throw("Invalid input!");
    });

    it("when model is not valid input", () => {
      expect(() => rentCar.searchCar([], [])).to.throw("Invalid input!");
    });

    it("when two parameters is not valid input", () => {
      expect(() => rentCar.searchCar("", [])).to.throw("Invalid input!");
    });

    it("not find serching model in catalogue", () => {
      let catalogue = ["Volkswagen", "BMW", "Audi"];
      let serach = "Mercedes";
      expect(() => rentCar.searchCar(catalogue, serach)).to.throw(
        "There are no such models in the catalog!"
      );
    });
  });

  describe("calculatePriceOfCar(model, days)", () => {
    it("when model is not valid input", () => {
      expect(() => rentCar.calculatePriceOfCar([], 2)).to.throw(
        "Invalid input!"
      );
    });

    it("when days is not valid input", () => {
      expect(() => rentCar.calculatePriceOfCar("", "")).to.throw(
        "Invalid input!"
      );
    });

    it("when both parameters is not valid input", () => {
      expect(() => rentCar.calculatePriceOfCar([], "2")).to.throw(
        "Invalid input!"
      );
    });

    it("when model is not valid input", () => {
      expect(rentCar.calculatePriceOfCar("Audi", 7)).to.equal(
        `You choose Audi and it will cost $252!`
      );
    });

    it("when model is not valid input", () => {
      expect(() => rentCar.calculatePriceOfCar("", 7)).to.throw(
        "No such model in the catalog!"
      );
    });
  });

  describe("checkBudget(costPerDay, days, budget)", () => {
    it("when cost per day parameters is not valid input", () => {
      expect(() => rentCar.checkBudget("", 2, 2)).to.throw("Invalid input!");
    });

    it("when day parameters is not valid input", () => {
      expect(() => rentCar.checkBudget(2, "2", 2)).to.throw("Invalid input!");
    });

    it("when cost per day parameters is not valid input", () => {
      expect(() => rentCar.checkBudget(1, 2, "2")).to.throw("Invalid input!");
    });

    it("when two parameters is not valid input", () => {
      expect(() => rentCar.checkBudget("", "2", 2)).to.throw("Invalid input!");
    });

    it("when you can rent a car", () => {
      expect(rentCar.checkBudget(10, 5, 50)).to.equal(`You rent a car!`);
    });

    it("when you can rent a car", () => {
      expect(rentCar.checkBudget(10, 5, 100)).to.equal(`You rent a car!`);
    });

    it("when buget is less than cost", () => {
      expect(rentCar.checkBudget(100, 5, 10)).to.equal(
        "You need a bigger budget!"
      );
    });

    it("when buget is less than cost", () => {
      expect(rentCar.checkBudget(10, 5, 49)).to.equal(
        "You need a bigger budget!"
      );
    });
  });
});
