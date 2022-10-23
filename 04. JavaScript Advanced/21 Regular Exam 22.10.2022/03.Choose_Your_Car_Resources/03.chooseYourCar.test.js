const { expect } = require("chai");
const chooseYourCar = require("./chooseYourCar");

describe("Tests Choose Your Car", function () {
  describe("choosingType (type, color, year)", function () {
    it("if year is less than 1990", function () {
      expect(() => chooseYourCar.choosingType("Sedan", "black", 1899)).to.throw(
        "Invalid Year!"
      );
    });

    it("if year is more than than 2022", function () {
      expect(() => chooseYourCar.choosingType("Sedan", "black", 2023)).to.throw(
        "Invalid Year!"
      );
    });

    it("if year is more than than 2022", function () {
      expect(() =>
        chooseYourCar.choosingType("Mercedes", "black", 2000)
      ).to.throw("This type of car is not what you are looking for.");
    });

    it("if year is greater than than 2010", function () {
      expect(chooseYourCar.choosingType("Sedan", "black", 2022)).to.equal(
        `This black Sedan meets the requirements, that you have.`
      );
    });

    it("if year is equal than than 2010", function () {
      expect(chooseYourCar.choosingType("Sedan", "black", 2010)).to.equal(
        `This black Sedan meets the requirements, that you have.`
      );
    });

    it("if year is above than than 2010", function () {
      expect(chooseYourCar.choosingType("Sedan", "black", 2009)).to.equal(
        `This Sedan is too old for you, especially with that black color.`
      );
    });

    it("if year is above than than 2010", function () {
      expect(chooseYourCar.choosingType("Sedan", "black", 1900)).to.equal(
        `This Sedan is too old for you, especially with that black color.`
      );
    });
  });

  describe("brandName (brands, brandIndex)", function () {
    it("if the value is valid", function () {
      let cars = ["BMW", "Toyota", "Peugeot"];
      let index = 0;
      let res = ["Toyota", "Peugeot"];
      expect(chooseYourCar.brandName(cars, index)).to.equal(res.join(", "));
    });

    it("if the value is valid", function () {
      let cars = ["BMW", "Toyota", "Peugeot"];
      let index = 2;
      let res = ["BMW", "Toyota"];
      expect(chooseYourCar.brandName(cars, index)).to.equal(res.join(", "));
    });

    it("if the value is valid", function () {
      let cars = ["BMW"];
      let index = 0;
      let res = [];
      expect(chooseYourCar.brandName(cars, index)).to.equal(res.join(", "));
    });

    it("if the value is valid", function () {
      let cars = ["BMW", "Toyota"];
      let index = 1;
      let res = ["BMW"];
      expect(chooseYourCar.brandName(cars, index)).to.equal(res.join(", "));
    });

    it("if the value is not valid", function () {
      expect(() => chooseYourCar.brandName("BMW", 0)).to.throw(
        "Invalid Information!"
      );
    });

    it("if the value is not valid", function () {
      expect(() => chooseYourCar.brandName(0, 0)).to.throw(
        "Invalid Information!"
      );
    });

    it("if the value is not valid", function () {
      expect(() =>
        chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 3)
      ).to.throw("Invalid Information!");
    });

    it("if the value is not valid", function () {
      expect(() =>
        chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], -1)
      ).to.throw("Invalid Information!");
    });

    it("if the value is not valid", function () {
      expect(() =>
        chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], "BMW")
      ).to.throw("Invalid Information!");
    });

    it("if the value is not valid", function () {
      expect(() =>
        chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], [])
      ).to.throw("Invalid Information!");
    });
  });

  describe("CarFuelConsumption (distanceInKilometers, consumptedFuelInLitres)", function () {
    it("if the value is valid", function () {
      expect(chooseYourCar.carFuelConsumption(100, 7)).to.equal(
        `The car is efficient enough, it burns 7.00 liters/100 km.`
      );
    });

    it("if the value is valid", function () {
      expect(chooseYourCar.carFuelConsumption(100, 5)).to.equal(
        `The car is efficient enough, it burns 5.00 liters/100 km.`
      );
    });

    it("if the value is valid", function () {
      expect(chooseYourCar.carFuelConsumption(100, 8)).to.equal(
        `The car burns too much fuel - 8.00 liters!`
      );
    });

    it("if the value is not valid", function () {
      expect(() => chooseYourCar.carFuelConsumption(2, "3")).to.throw(
        `Invalid Information!`
      );
    });

    it("if the value is not valid", function () {
      expect(() => chooseYourCar.carFuelConsumption(2, -1)).to.throw(
        `Invalid Information!`
      );
    });

    it("if the value is not valid", function () {
      expect(() => chooseYourCar.carFuelConsumption(2, ["3"])).to.throw(
        `Invalid Information!`
      );
    });

    it("if the value is not valid", function () {
      expect(() => chooseYourCar.carFuelConsumption("2", 3)).to.throw(
        `Invalid Information!`
      );
    });

    it("if the value is not valid", function () {
      expect(() => chooseYourCar.carFuelConsumption(["2"], 3)).to.throw(
        `Invalid Information!`
      );
    });

    it("if the value is not valid", function () {
      expect(() => chooseYourCar.carFuelConsumption(-1, 3)).to.throw(
        `Invalid Information!`
      );
    });
  });
});
