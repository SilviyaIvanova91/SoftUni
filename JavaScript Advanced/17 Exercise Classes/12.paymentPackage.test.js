let { expect } = require("chai");
let PaymentPackage = require("../18 Exercise Classes/12.paymentPackage");

describe("PaymentPackage", () => {
  describe("name", () => {
    it("should throw error for empty string", () => {
      expect(() => new PaymentPackage("", 1)).to.throw(
        "Name must be a non-empty string"
      );
    });

    it("should throw error when the name is number ", () => {
      expect(() => new PaymentPackage(1, 1)).to.throw(Error);
    });

    it("should throw error when the name is array ", () => {
      expect(() => new PaymentPackage([], 1)).to.throw(Error);
    });

    it("should return new Name if the input is right ", () => {
      expect(() => new PaymentPackage("abc", 1)).not.to.throw(Error);
    });
  });

  describe("value", () => {
    it("should throw error when value is a string", () => {
      expect(() => new PaymentPackage("test", "abc")).to.throw(Error);
    });

    it("should throw error when value is a array", () => {
      expect(() => new PaymentPackage("test", [])).to.throw(Error);
    });

    it("should throw error when value is negative", () => {
      expect(() => new PaymentPackage("test", -1)).to.throw(Error);
    });

    it("should return a new Value if the input is true value", () => {
      expect(() => new PaymentPackage("test", 1)).not.to.throw(Error);
    });

    it("should return 0 if 0 is value", () => {
      expect(new PaymentPackage("test", 0).value).to.equal(0);
    });
  });

  describe("VAT", () => {
    it("should be a number", () => {
      expect(typeof new PaymentPackage("test", 1).VAT).to.be.equal("number");
    });

    it("should be non-negative number", () => {
      expect(() => (new PaymentPackage("test", 1).VAT = -1)).to.throw(Error);
    });

    it("should throw error when value is a string", () => {
      expect(() => (new PaymentPackage("test", 1).VAT = "")).to.throw(Error);
    });

    it("should throw error when value is a array", () => {
      expect(() => (new PaymentPackage("test", 1).VAT = [])).to.throw(Error);
    });
  });

  describe("active", () => {
    it("should be a boolean", () => {
      expect(typeof new PaymentPackage("test", 1).active).to.be.equal(
        "boolean"
      );
    });

    it("should throw error if active is number", () => {
      expect(() => (new PaymentPackage("abv", 123).active = 123)).to.throw(
        Error
      );
    });

    it("should throw error when active is a string", () => {
      expect(() => (new PaymentPackage("abv", 123).active = "abc")).to.throw(
        Error
      );
    });

    it("should throw error when active is a array", () => {
      expect(() => (new PaymentPackage("abv", 123).active = [])).to.throw(
        Error
      );
    });

    it("should throw error when active is an object", () => {
      expect(() => (new PaymentPackage("abv", 123).active = {})).to.throw(
        Error
      );
    });
  });

  describe("toString()", () => {
    it("Should return a string as all the input is correct - 1", () => {
      let flagClass = new PaymentPackage("abc", 123);
      let output = [
        `Package: abc`,
        `- Value (excl. VAT): 123`,
        `- Value (VAT 20%): 147.6`,
      ];
      expect(flagClass.toString()).to.equal(output.join("\n"));
    });

    it("Should return a string as all the input is correct - 2", () => {
      let flagClass = new PaymentPackage("abc", 123);
      flagClass.VAT = 30;
      let output = [
        `Package: abc`,
        `- Value (excl. VAT): 123`,
        `- Value (VAT 30%): 159.9`,
      ];
      expect(flagClass.toString()).to.equal(output.join("\n"));
    });

    it("Should return a string as all the input is correct - 3", () => {
      let flagClass = new PaymentPackage("abc", 123);
      flagClass.active = false;
      let output = [
        `Package: abc (inactive)`,
        `- Value (excl. VAT): 123`,
        `- Value (VAT 20%): 147.6`,
      ];
      expect(flagClass.toString()).to.equal(output.join("\n"));
    });

    it("Should return a string as all the input is correct - 4", () => {
      let flagClass = new PaymentPackage("abc", 123);
      flagClass.VAT = 30;
      flagClass.active = false;
      let output = [
        `Package: abc (inactive)`,
        `- Value (excl. VAT): 123`,
        `- Value (VAT 30%): 159.9`,
      ];
      expect(flagClass.toString()).to.equal(output.join("\n"));
    });
  });
});
