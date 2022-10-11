const { expect } = require("chai");
const bookSelection = require("./bookSelection");

describe("book sceleton", function () {
  describe("isGenerateSutable", function () {
    it("if genre is Thriller and age are less than 12", function () {
      expect(bookSelection.isGenreSuitable("Thriller", 11)).to.equal(
        "Books with Thriller genre are not suitable for kids at 11 age"
      );
    });

    it("if genre is Horror and age are equal to 12", function () {
      expect(bookSelection.isGenreSuitable("Horror", 12)).to.equal(
        "Books with Horror genre are not suitable for kids at 12 age"
      );
    });

    it("if genre is Horror, but age are more than 12 ", function () {
      expect(bookSelection.isGenreSuitable("Horror", 13)).to.equal(
        "Those books are suitable"
      );
    });

    it("if genre is Thriller, but age are more than 12 ", function () {
      expect(bookSelection.isGenreSuitable("Thriller", 53)).to.equal(
        "Those books are suitable"
      );
    });

    it("if genre is other, but age are less than 12 ", function () {
      expect(bookSelection.isGenreSuitable("Romantic", 10)).to.equal(
        "Those books are suitable"
      );
    });

    it("if genre is Thriller, but age are equal to 12 ", function () {
      expect(bookSelection.isGenreSuitable("Romantic", 12)).to.equal(
        "Those books are suitable"
      );
    });
  });

  describe("isItAffordable (price, budget) ", function () {
    it("if substracting sum of price of the book and buget is equal to 0 ", function () {
      expect(bookSelection.isItAffordable(30, 10)).to.equal(
        `You don't have enough money`
      );
    });

    it("if substracting sum of price of the book and buget is equal to 0 ", function () {
      let res = 30 - 10;
      expect(bookSelection.isItAffordable(10, 30)).to.equal(
        `Book bought. You have ${res}$ left`
      );
    });

    it("if price are not a valid input", function () {
      try {
        bookSelection.isItAffordable(20, "");
      } catch (error) {
        expect(error.message).to.equal("Invalid input");
      }
    });

    it("if budget are not a valid input", function () {
      try {
        bookSelection.isItAffordable("", 20);
      } catch (error) {
        expect(error.message).to.equal("Invalid input");
      }
    });
  });

  describe("suitableTitles (books, wantedGenre)  ", function () {
    it("if book are not an array", function () {
      try {
        bookSelection.suitableTitles("abc", "abc");
      } catch (error) {
        expect(error.message).to.equal("Invalid input");
      }
    });

    it("if genre are not an string", function () {
      try {
        bookSelection.suitableTitles(["abc"], ["abc"]);
      } catch (error) {
        expect(error.message).to.equal("Invalid input");
      }
    });

    it("happy path", function () {
      const resultArr = ["Harry Potter", "Lord of the Ring"];
      const books = [
        { title: "Harry Potter", genre: "Fantasy" },
        { title: "Before you", genre: "Romantic" },
        { title: "Lord of the Ring", genre: "Fantasy" },
      ];

      expect(bookSelection.suitableTitles(books, "Fantasy")).to.deep.equal(
        resultArr
      );
    });
  });
});
