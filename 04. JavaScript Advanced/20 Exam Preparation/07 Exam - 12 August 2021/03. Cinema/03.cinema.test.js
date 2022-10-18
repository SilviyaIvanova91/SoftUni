let { expect } = require("chai");
const cinema = require("./cinema");

describe("Tests Cinema", function () {
  describe("showMovies(movieArr)", function () {
    it("if the length of the input is zero", function () {
      expect(cinema.showMovies([])).to.equal(
        "There are currently no movies to show."
      );
    });

    it("if we have different movies, and return them with comma", function () {
      let moviesArr = ["King Kong", "The Tomorrow War", "Joker"];
      expect(cinema.showMovies(moviesArr)).to.equal(moviesArr.join(", "));
    });

    it("if we have different movies, and return them with comma", function () {
      let moviesArr = ["King Kong"];
      expect(cinema.showMovies(moviesArr)).to.equal(moviesArr.join(", "));
    });
  });

  describe("ticketPrice(projectionType)", function () {
    it("if the schedule is Premiere", function () {
      expect(cinema.ticketPrice("Premiere")).to.equal(12.0);
    });

    it("if the schedule is Normal", function () {
      expect(cinema.ticketPrice("Normal")).to.equal(7.5);
    });

    it("if the schedule is Discount", function () {
      expect(cinema.ticketPrice("Discount")).to.equal(5.5);
    });

    it("if the schedule is other type", function () {
      expect(() => cinema.ticketPrice("Student")).to.throw(
        "Invalid projection type."
      );
    });

    it("if the schedule is other type", function () {
      expect(() => cinema.ticketPrice("")).to.throw("Invalid projection type.");
    });
  });

  describe("swapSeatsInHall(firstPlace, secondPlace)", function () {
    it("if one of number not exist", function () {
      expect(cinema.swapSeatsInHall(-1, 5)).to.equal(
        "Unsuccessful change of seats in the hall."
      );
    });

    it("if one of number not exist", function () {
      expect(cinema.swapSeatsInHall(0, 5)).to.equal(
        "Unsuccessful change of seats in the hall."
      );
    });

    it("if one of number not exist", function () {
      expect(cinema.swapSeatsInHall(21, 5)).to.equal(
        "Unsuccessful change of seats in the hall."
      );
    });

    it("if one of number not exist", function () {
      expect(cinema.swapSeatsInHall(41, 5)).to.equal(
        "Unsuccessful change of seats in the hall."
      );
    });

    it("if one of number not exist", function () {
      expect(cinema.swapSeatsInHall(5, -1)).to.equal(
        "Unsuccessful change of seats in the hall."
      );
    });

    it("if one of number not exist", function () {
      expect(cinema.swapSeatsInHall(5, 0)).to.equal(
        "Unsuccessful change of seats in the hall."
      );
    });

    it("if one of number not exist", function () {
      expect(cinema.swapSeatsInHall(5, 21)).to.equal(
        "Unsuccessful change of seats in the hall."
      );
    });

    it("if one of number not exist", function () {
      expect(cinema.swapSeatsInHall(5, 52)).to.equal(
        "Unsuccessful change of seats in the hall."
      );
    });

    it("if one of number is not integer", function () {
      expect(cinema.swapSeatsInHall(5.12, 10)).to.equal(
        "Unsuccessful change of seats in the hall."
      );
    });

    it("if one of number is not integer", function () {
      expect(cinema.swapSeatsInHall(5, 8.6)).to.equal(
        "Unsuccessful change of seats in the hall."
      );
    });

    it("if both numbers is not integer", function () {
      expect(cinema.swapSeatsInHall(5.15, 12.6)).to.equal(
        "Unsuccessful change of seats in the hall."
      );
    });

    it("if exchange is successful", function () {
      expect(cinema.swapSeatsInHall(5, 8)).to.equal(
        "Successful change of seats in the hall."
      );
    });

    it("if exchange is successful", function () {
      expect(cinema.swapSeatsInHall(1, 8)).to.equal(
        "Successful change of seats in the hall."
      );
    });

    it("if exchange is successful", function () {
      expect(cinema.swapSeatsInHall(20, 8)).to.equal(
        "Successful change of seats in the hall."
      );
    });

    it("if exchange is successful", function () {
      expect(cinema.swapSeatsInHall(5, 1)).to.equal(
        "Successful change of seats in the hall."
      );
    });

    it("if exchange is successful", function () {
      expect(cinema.swapSeatsInHall(5, 20)).to.equal(
        "Successful change of seats in the hall."
      );
    });
  });
});
