const { expect } = require("chai");
const dealership = require("./03.dealership");

describe("Tests dealership", function () {
  describe("newCarCost(oldCarModel, newCarPrice)", function () {
    it("return car", function () {
      expect(dealership.newCarCost("Fiat", 1200)).to.equal(1200);
    });

    it("return car", function () {
      expect(dealership.newCarCost("Audi A6", 120000)).to.equal(120000);
    });

    it("return car", function () {
      expect(dealership.newCarCost("Audi A6", 20001)).to.equal(20001);
    });
  });

  describe("carEquipment(extrasArr, indexArr)", function () {
    it("return all selected extras", function () {
      let arr = ["heated seats", "sliding roof", "sport rims", "navigation"];
      let extras = [0, 1, 3];
      expect(dealership.carEquipment(arr, extras)).to.deep.equal([
        "heated seats",
        "sliding roof",
        "navigation",
      ]);
    });

    it("return all selected extras", function () {
      let arr = ["heated seats", "sliding roof", "sport rims", "navigation"];
      let extras = [0];
      expect(dealership.carEquipment(arr, extras)).to.deep.equal([
        "heated seats",
      ]);
    });

    it("return all selected extras", function () {
      let arr = ["heated seats", "sliding roof", "sport rims", "navigation"];
      let extras = [0, 3];
      expect(dealership.carEquipment(arr, extras)).to.deep.equal([
        "heated seats",
        "navigation",
      ]);
    });

    it("return all selected extras", function () {
      let arr = ["heated seats", "sliding roof"];
      let extras = [1];
      expect(dealership.carEquipment(arr, extras)).to.deep.equal([
        "sliding roof",
      ]);
    });

    it("return all selected extras", function () {
      let arr = ["navigation"];
      let extras = [0];
      expect(dealership.carEquipment(arr, extras)).to.deep.equal([
        "navigation",
      ]);
    });
  });

  describe("euroCategory(category)", function () {
    it("return car", function () {
      expect(dealership.euroCategory(5)).to.equal(
        "We have added 5% discount to the final price: 14250."
      );
    });

    it("return car", function () {
      expect(dealership.euroCategory(4)).to.equal(
        "We have added 5% discount to the final price: 14250."
      );
    });

    it("return car", function () {
      expect(dealership.euroCategory(3)).to.equal(
        "Your euro category is low, so there is no discount from the final price!"
      );
    });

    it("return car", function () {
      expect(dealership.euroCategory(0)).to.equal(
        "Your euro category is low, so there is no discount from the final price!"
      );
    });
  });
});
