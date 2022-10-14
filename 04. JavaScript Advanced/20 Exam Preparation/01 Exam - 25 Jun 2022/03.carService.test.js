const { expect } = require("chai");
const carService = require("./03.carServiceResources");

describe("carService", () => {
  describe("isItExpensive", () => {
    it("if issue is equal to Engine", () => {
      expect(carService.isItExpensive("Engine")).to.equal(
        "The issue with the car is more severe and it will cost more money"
      );
    });

    it("if issue is equal to Transmission", () => {
      expect(carService.isItExpensive("Transmission")).to.equal(
        "The issue with the car is more severe and it will cost more money"
      );
    });

    it("if issue is equal to smth other", function () {
      expect(carService.isItExpensive("SmtgElse")).to.equal(
        `The overall price will be a bit cheaper`
      );
    });
  });

  describe("discount (numberOfParts, totalPrice)", () => {
    it("if number of pair is smaller than 2", () => {
      expect(carService.discount(1, 50)).to.equal(
        "You cannot apply a discount"
      );
    });

    it("if number of pair is smaller equal 2", () => {
      expect(carService.discount(2, 50)).to.equal(
        "You cannot apply a discount"
      );
    });

    it("if number of pair is more than 2", () => {
      let res = 50 * 0.15;
      expect(carService.discount(3, 50)).to.equal(
        `Discount applied! You saved ${res}$`
      );
    });

    it("if number of pair is more than 2", () => {
      let res = 50 * 0.15;
      expect(carService.discount(7, 50)).to.equal(
        `Discount applied! You saved ${res}$`
      );
    });

    it("if number of pair is more than 2", () => {
      let res = 50 * 0.3;
      expect(carService.discount(8, 50)).to.equal(
        `Discount applied! You saved ${res}$`
      );
    });

    it("if numberOfPairs not a number", () => {
      expect(() => carService.discount("", 50)).to.throw("Invalid input");
    });

    it("if totalPrice not a number", () => {
      expect(() => carService.discount(8, "50")).to.throw("Invalid input");
    });
  });

  describe("partsToBuy (partsCatalog, neededParts)", () => {
    it("when find right value", () => {
      expect(
        carService.partsToBuy(
          [
            { part: "blowoff valve", price: 145 },
            { part: "coil springs", price: 230 },
          ],
          ["blowoff valve", "injectors"]
        )
      ).to.equal(145);
    });

    it("when partsCatalog is empty", () => {
      expect(
        carService.partsToBuy([], ["blowoff valve", "injectors"])
      ).to.equal(0);
    });

    it("when find right value", () => {
      expect(() =>
        carService.partsToBuy("", ["blowoff valve", "injectors"])
      ).to.throw("Invalid input");
    });

    it("whenpartsCatalog is invalid input", () => {
      expect(() =>
        carService.partsToBuy("", ["blowoff valve", "injectors"])
      ).to.throw("Invalid input");
    });

    it("whenpartsCatalog is invalid input", () => {
      expect(() =>
        carService.partsToBuy(
          [
            { part: "blowoff valve", price: 145 },
            { part: "coil springs", price: 230 },
          ],
          ""
        )
      ).to.throw("Invalid input");
    });
  });
});

//--------------- solution with assert ---------------------------------------------
// const { assert } = require("chai");
// const carService = require("./03.carServiceResources");

// describe("carService", () => {
//   describe("isItExpensive", () => {
//     it("if issue is equal to Engine", () => {
//       assert.equal(
//         carService.isItExpensive("Engine"),
//         "The issue with the car is more severe and it will cost more money"
//       );
//     });

//     it("if issue is equal to Transmission", function () {
//       assert.equal(
//         carService.isItExpensive("Transmission"),
//         "The issue with the car is more severe and it will cost more money"
//       );
//     });

//     it("if issue is equal to smth other", function () {
//       assert.equal(
//         carService.isItExpensive("SmtgElse"),
//         `The overall price will be a bit cheaper`
//       );
//     });
//   });

//   describe("discount (numberOfParts, totalPrice)", () => {
//     it("if number of pair is smaller than 2", () => {
//       assert.equal(carService.discount(1, 50), "You cannot apply a discount");
//     });

//     it("if number of pair is smaller equal 2", () => {
//       assert.equal(carService.discount(2, 50), "You cannot apply a discount");
//     });

//     it("if number of pair is more than 2", () => {
//       let res = 50 * 0.15;
//       assert.equal(
//         carService.discount(3, 50),
//         `Discount applied! You saved ${res}$`
//       );
//     });

//     it("if number of pair is more than 2", () => {
//       let res = 50 * 0.15;
//       assert.equal(
//         carService.discount(7, 50),
//         `Discount applied! You saved ${res}$`
//       );
//     });

//     it("if number of pair is more than 2", () => {
//       let res = 50 * 0.3;
//       assert.equal(
//         carService.discount(8, 50),
//         `Discount applied! You saved ${res}$`
//       );
//     });

//     it("if numberOfPairs not a number", () => {
//       assert.throw(() => carService.discount("", 50), "Invalid input");
//     });

//     it("if totalPrice not a number", () => {
//       assert.throw(() => carService.discount(8, "50"), "Invalid input");
//     });
//   });

//   describe("partsToBuy (partsCatalog, neededParts)", () => {
//     it("when find right value", () => {
//       assert.equal(
//         carService.partsToBuy(
//           [
//             { part: "blowoff valve", price: 145 },
//             { part: "coil springs", price: 230 },
//           ],
//           ["blowoff valve", "injectors"]
//         ),
//         145
//       );
//     });

//     it("when partsCatalog is empty", () => {
//       assert.equal(
//         carService.partsToBuy([], ["blowoff valve", "injectors"]),
//         0
//       );
//     });

//     it("when find right value", () => {
//       assert.throw(
//         () => carService.partsToBuy("", ["blowoff valve", "injectors"]),
//         "Invalid input"
//       );
//     });

//     it("whenpartsCatalog is invalid input", () => {
//       assert.throw(
//         () => carService.partsToBuy("", ["blowoff valve", "injectors"]),
//         "Invalid input"
//       );
//     });

//     it("whenpartsCatalog is invalid input", () => {
//       assert.throw(
//         () =>
//           carService.partsToBuy(
//             [
//               { part: "blowoff valve", price: 145 },
//               { part: "coil springs", price: 230 },
//             ],
//             ""
//           ),
//         "Invalid input"
//       );
//     });
//   });
// });

//------------other solution with expect------------------------
// describe('Tests', () => {
//   describe('isItExpensive func', () => {
//       it('Correct input', () => {
//           expect(carService.isItExpensive('Engine')).to.equal(`The issue with the car is more severe and it will cost more money`)
//           expect(carService.isItExpensive('Transmission')).to.equal(`The issue with the car is more severe and it will cost more money`)

//       });
//       it('Incorrect input', () => {
//           expect(carService.isItExpensive('test')).to.equal(`The overall price will be a bit cheaper`);
//       });
//   });

//   describe('discount funt', () => {
//       it('Correct input', () => {
//           expect(carService.discount(1, 1000)).to.equal('You cannot apply a discount');
//           expect(carService.discount(2, 1000)).to.equal('You cannot apply a discount');
//           expect(carService.discount(3, 1000)).to.equal('Discount applied! You saved 150$');
//           expect(carService.discount(7, 1000)).to.equal('Discount applied! You saved 150$');
//           expect(carService.discount(8, 1000)).to.equal('Discount applied! You saved 300$');
//       });
//       it('Incorrect input', () => {
//           expect(() => carService.discount('test', 1)).to.throw('Invalid input')
//           expect(() => carService.discount([1], 1)).to.throw('Invalid input')
//           expect(() => carService.discount({ '1': 1 }, 1)).to.throw('Invalid input')
//           expect(() => carService.discount(undefined, 1)).to.throw('Invalid input')
//           expect(() => carService.discount(null, 1)).to.throw('Invalid input')

//           expect(() => carService.discount(1, 'test')).to.throw('Invalid input')
//           expect(() => carService.discount(1, [1])).to.throw('Invalid input')
//           expect(() => carService.discount(1, { '1': 1 })).to.throw('Invalid input')
//           expect(() => carService.discount(1, undefined)).to.throw('Invalid input')
//           expect(() => carService.discount(1, null)).to.throw('Invalid input')
//       });
//   })

//   describe('partsToBuy funct', () => {
//       it('Correct input', () => {
//           expect(carService.partsToBuy(
//               [{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }],
//               ["blowoff valve", "injectors"])).to.equal(145);
//           expect(carService.partsToBuy(
//               [],
//               ["blowoff valve", "injectors"])).to.equal(0);
//           expect(carService.partsToBuy(
//               [{ part: "blowoff valve", price: 145 }, { part: "injectors", price: 230 }],
//               ["blowoff valve", "injectors"])).to.equal(375);
//       });

//       it('Incorrect input', () => {
//           expect(() => carService.partsToBuy([{ part: "blowoff valve", price: 145 }], 'test')).to.throw('Invalid input');
//           expect(() => carService.partsToBuy([{ part: "blowoff valve", price: 145 }], 1)).to.throw('Invalid input');
//           expect(() => carService.partsToBuy([{ part: "blowoff valve", price: 145 }], { '1': 1 })).to.throw('Invalid input');
//           expect(() => carService.partsToBuy([{ part: "blowoff valve", price: 145 }], undefined)).to.throw('Invalid input');
//           expect(() => carService.partsToBuy([{ part: "blowoff valve", price: 145 }], null)).to.throw('Invalid input');

//           expect(() => carService.partsToBuy('test', ["blowoff valve", "injectors"])).to.throw('Invalid input');
//           expect(() => carService.partsToBuy(1, ["blowoff valve", "injectors"])).to.throw('Invalid input');
//           expect(() => carService.partsToBuy({ '1': 1 }, ["blowoff valve", "injectors"])).to.throw('Invalid input');
//           expect(() => carService.partsToBuy(undefined, ["blowoff valve", "injectors"])).to.throw('Invalid input');
//           expect(() => carService.partsToBuy(null, ["blowoff valve", "injectors"])).to.throw('Invalid input');
//       })

//   })
// })
