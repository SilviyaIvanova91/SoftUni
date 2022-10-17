class SummerCamp {
  constructor(organizer, location) {
    this.organizer = organizer;
    this.location = location;
    this.priceForTheCamp = {
      child: 150,
      student: 300,
      collegian: 500,
    };
    this.listOfParticipants = [];
  }

  registerParticipant(name, condition, money) {
    let nameParticipian = this.listOfParticipants.find((p) => p.name == name);

    if (
      condition !== "child" &&
      condition !== "student" &&
      condition !== "collegian"
    ) {
      throw new Error("Unsuccessful registration at the camp.");
    }

    if (nameParticipian) {
      return `The ${name} is already registered at the camp.`;
    }

    if (money < this.priceForTheCamp[condition]) {
      return "The money is not enough to pay the stay at the camp.";
    }

    let participiant = { name, condition, power: 100, wins: 0 };
    this.listOfParticipants.push(participiant);
    return `The ${name} was successfully registered.`;
  }

  unregisterParticipant(name) {
    let nameParticipian = this.listOfParticipants.find((p) => p.name == name);
    let nameParticipianIndex = this.listOfParticipants.findIndex(
      (p) => p.name == name
    );

    if (!nameParticipian) {
      throw new Error(`The ${name} is not registered in the camp.`);
    }

    this.listOfParticipants.splice(nameParticipianIndex, 1);
    return `The ${name} removed successfully.`;
  }

  timeToPlay(typeOfGame, participant1, participant2) {
    let nameParticipian = this.listOfParticipants.find(
      (p) => p.name == participant1
    );
    let nameParticipian2 = this.listOfParticipants.find(
      (p) => p.name == participant2
    );

    if (typeOfGame == "WaterBalloonFights") {
      if (!nameParticipian || !nameParticipian2) {
        throw new Error("Invalid entered name/s.");
      }

      if (nameParticipian.condition != nameParticipian2.condition) {
        throw new Error("Choose players with equal condition.");
      }

      if (nameParticipian.power > nameParticipian2.power) {
        nameParticipian.wins++;
        return `The ${participant1} is winner in the game ${typeOfGame}.`;
      } else if (nameParticipian.power < nameParticipian2.power) {
        nameParticipian2.wins++;
        return `The ${participant2} is winner in the game ${typeOfGame}.`;
      } else {
        return "There is no winner.";
      }
    } else if (typeOfGame == "Battleship") {
      if (!nameParticipian) {
        throw new Error("Invalid entered name/s.");
      }
      nameParticipian.power += 20;
      return `The ${participant1} successfully completed the game ${typeOfGame}.`;
    }
  }

  toString() {
    let sortedall = this.listOfParticipants
      .sort((a, b) => b.wins - a.wins)
      .map((a) => `${a.name} - ${a.condition} - ${a.power} - ${a.wins}`);

    return `${this.organizer} will take ${
      this.listOfParticipants.length
    } participants on camping to ${this.location}\n${sortedall.join("\n")}`;
  }
}

//---------------input 1---------------------------
// const summerCamp = new SummerCamp(
//   "Jane Austen",
//   "Pancharevo Sofia 1137, Bulgaria"
// );
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));

//---------------input 2---------------------------
// const summerCamp = new SummerCamp(
//   "Jane Austen",
//   "Pancharevo Sofia 1137, Bulgaria"
// );
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.unregisterParticipant("Petar"));
// console.log(summerCamp.unregisterParticipant("Petar Petarson"));

//---------------input 3---------------------------
// const summerCamp = new SummerCamp(
//   "Jane Austen",
//   "Pancharevo Sofia 1137, Bulgaria"
// );
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(
//   summerCamp.timeToPlay(
//     "WaterBalloonFights",
//     "Petar Petarson",
//     "Sara Dickinson"
//   )
// );
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(
//   summerCamp.timeToPlay(
//     "WaterBalloonFights",
//     "Petar Petarson",
//     "Dimitur Kostov"
//   )
// );

//---------------input 4---------------------------
const summerCamp = new SummerCamp(
  "Jane Austen",
  "Pancharevo Sofia 1137, Bulgaria"
);
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(
  summerCamp.timeToPlay(
    "WaterBalloonFights",
    "Petar Petarson",
    "Sara Dickinson"
  )
);
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(
  summerCamp.timeToPlay(
    "WaterBalloonFights",
    "Petar Petarson",
    "Dimitur Kostov"
  )
);

console.log(summerCamp.toString());

//--------------------------------------------------------------------------------
// class SummerCamp {
//   constructor(organaizer, location, priceForCamp) {
//     this.organaizer = organaizer;
//     this.location = location;
//     this.priceForCamp = {
//       child: 150,
//       student: 300,
//       collegian: 500,
//     };
//     this.listOfParticipants = [];
//   }

//   registerParticipant(name, condition, money) {
//     money = Number(money);
//     let nameParticipian = this.listOfParticipants.find((p) => p.name == name);

//     if (
//       condition !== "child" &&
//       condition !== "student" &&
//       condition !== "collegian"
//     ) {
//       throw new Error("Unsuccessful registration at the camp.");
//     }

//     if (nameParticipian) {
//       return `The ${name} is already registered at the camp.`;
//     }

//     if (this.priceForCamp[condition] > money) {
//       return "The money is not enough to pay the stay at the camp.";
//     }

//     let participiant = { name, condition, power: 100, wins: 0 };
//     this.listOfParticipants.push(participiant);
//     return `The ${name} was successfully registered.`;
//   }

//   unregisterParticipant(name) {
//     let nameParticipian = this.listOfParticipants.find((p) => p.name == name);
//     let nameParticipianIndex = this.listOfParticipants.findIndex(
//       (p) => p.name == name
//     );

//     if (!nameParticipian) {
//       throw new Error(`The ${name} is not registered in the camp.`);
//     }

//     this.listOfParticipants.splice(nameParticipianIndex, 1);
//     return `The ${name} removed successfully.`;
//   }

//   timeToPlay(typeOfGame, participant1, participant2) {
//     let nameParticipian = this.listOfParticipants.find(
//       (p) => p.name == participant1
//     );
//     let a = nameParticipian.name;

//     if (!nameParticipian) {
//       throw new Error(`Invalid entered name/s.`);
//     }

//     if (typeOfGame == "WaterBalloonFights") {
//       let nameParticipian2 = this.listOfParticipants.find(
//         (p) => p.name == participant2
//       );

//       if (!nameParticipian2) {
//         throw new Error(`Invalid entered name/s.`);
//       }

//       if (nameParticipian.condition != nameParticipian2.condition) {
//         throw new Error(`Choose players with equal condition.`);
//       }

//       if (nameParticipian.power > nameParticipian2.power) {
//         nameParticipian.wins++;
//         return `The ${nameParticipian.name} is winner in the game ${typeOfGame}.`;
//       } else if (nameParticipian.power < nameParticipian2.power) {
//         nameParticipian2.wins++;
//         return `The ${nameParticipian2.name} is winner in the game ${typeOfGame}.`;
//       } else {
//         return `There is no winner.`;
//       }
//     } else if (typeOfGame == "Battleship") {
//       nameParticipian.power += 20;
//       return `The ${nameParticipian.name} successfully completed the game ${typeOfGame}.`;
//     }
//   }

//   toString() {
//     let sortedall = this.listOfParticipants
//       .sort((a, b) => b.wins - a.wins)
//       .map((a) => `${a.name} - ${a.condition} - ${a.power} - ${a.wins}`);

//     return `${this.organaizer} will take ${
//       sortedall.length
//     } participants on camping to ${this.location}\n${sortedall.join("\n")}`;
//   }
// }
