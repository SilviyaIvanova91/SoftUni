const { expect } = require("chai");
const library = require("./library");

describe("Tests library", function () {
  describe("calcPriceOfBook (nameOfBook, year)", function () {
    it("if year is less than 1980", function () {
      expect(library.calcPriceOfBook("Pride and Prejudice", 1965)).to.equal(
        `Price of Pride and Prejudice is 10.00`
      );
    });

    it("if year isar equal than 1980", function () {
      expect(library.calcPriceOfBook("Pride and Prejudice", 1980)).to.equal(
        `Price of Pride and Prejudice is 10.00`
      );
    });

    it("if year is more than 1980", function () {
      expect(library.calcPriceOfBook("Pride and Prejudice", 1981)).to.equal(
        `Price of Pride and Prejudice is 20.00`
      );
    });

    it("if year is more than 1980", function () {
      expect(library.calcPriceOfBook("Pride and Prejudice", 2005)).to.equal(
        `Price of Pride and Prejudice is 20.00`
      );
    });

    it("if year is non a number", function () {
      expect(() => library.calcPriceOfBook("Pride and Prejudice", [])).to.throw(
        `Invalid input`
      );
    });

    it("if year is non an integer number", function () {
      expect(() =>
        library.calcPriceOfBook("Pride and Prejudice", 1985.55)
      ).to.throw(`Invalid input`);
    });

    it("if name of book is non string", function () {
      expect(() => library.calcPriceOfBook(5, 1995)).to.throw(`Invalid input`);
    });

    it("if both parameters is non valid", function () {
      expect(() =>
        library.calcPriceOfBook(["Pride and Prejudice"], "1995")
      ).to.throw(`Invalid input`);
    });
  });

  describe("findBook (booksArr, desiredBook)", function () {
    it("if array of books is empty", function () {
      expect(() => library.findBook([], "Pride and Prejudice")).to.throw(
        `No books currently available`
      );
    });

    it("when submitted book is not present in the books array", function () {
      let arrOfBooks = ["Troy", "Life Style", "Torronto"];
      expect(library.findBook(arrOfBooks, "Pride and Prejudice")).to.equal(
        `The book you are looking for is not here!`
      );
    });

    it("when submitted book is not present in the books array", function () {
      let arrOfBooks = ["Troy", "Life Style", "Torronto"];
      expect(library.findBook(arrOfBooks, "Torronto")).to.equal(
        `We found the book you want.`
      );
    });
  });

  describe("arrangeTheBooks (countBooks)", function () {
    it("if count book is not an integer number", function () {
      expect(() => library.arrangeTheBooks(1.25)).to.throw(`Invalid input`);
    });

    it("if count book is a negative number number", function () {
      expect(() => library.arrangeTheBooks(-1)).to.throw(`Invalid input`);
    });

    it("if count book is non valid input", function () {
      expect(() => library.arrangeTheBooks("1.25")).to.throw(`Invalid input`);
    });

    it("when on the shelves have free space", function () {
      expect(library.arrangeTheBooks(35)).to.equal(
        `Great job, the books are arranged.`
      );
    });

    it("when on the shelves have free space", function () {
      expect(library.arrangeTheBooks(40)).to.equal(
        `Great job, the books are arranged.`
      );
    });

    it("when on the shelves don't have free space", function () {
      expect(library.arrangeTheBooks(41)).to.equal(
        `Insufficient space, more shelves need to be purchased.`
      );
    });

    it("when on the shelves don't  have free space", function () {
      expect(library.arrangeTheBooks(85)).to.equal(
        `Insufficient space, more shelves need to be purchased.`
      );
    });
  });
});
