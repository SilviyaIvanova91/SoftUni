class SmartHike {
  constructor(username) {
    this.username = username;
    this.goals = {};
    this.listofHikes = [];
    this.resources = 100;
  }

  addGoal(peak, altitude) {
    if (this.goals[peak] != undefined) {
      return `${peak} has already been added to your goals`;
    } else {
      this.goals[peak] = Number(altitude);
      return `You have successfully added a new goal - ${peak}`;
    }
  }

  hike(peak, time, difficultyLevel) {
    if (this.goals[peak] == undefined) {
      throw new Error(`${peak} is not in your current goals`);
    }
    if (this.goals[peak] == 0) {
      throw new Error("You don't have enough resources to start the hike");
    }

    let diffResources = this.resources - Number(time) * 10;
    if (Number(diffResources) < 0) {
      return "You don't have enough resources to complete the hike";
    }

    this.resources -= Number(time) * 10;
    this.listofHikes.push({ peak, time, difficultyLevel });
    return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
  }

  rest(time) {
    time = Number(time);
    this.resources += time * 10;

    if (this.resources >= 100) {
      this.resources = 100;
      return `Your resources are fully recharged. Time for hiking!`;
    } else {
      return `You have rested for ${time} hours and gained ${
        time * 10
      }% resources`;
    }
  }

  showRecord(criteria) {
    let allpeack = "";
    if (this.listofHikes.length == 0) {
      return `${this.username} has not done any hiking yet`;
    }

    if (criteria == "hard" || criteria == "easy") {
      let hacked = this.listofHikes.filter(
        (p) => p.difficultyLevel == criteria
      );
      let sortedbestHack = hacked.sort((a, b) => a.time - b.time);
      let bestHack = sortedbestHack[0];
      if (bestHack == undefined) {
        return `${this.username} has not done any ${criteria} hiking yet`;
      }
      return `${this.username}'s best ${criteria} hike is ${bestHack.peak} peak, for ${bestHack.time} hours`;
    } else if (criteria == "all") {
      allpeack = this.listofHikes.map(
        (heack) =>
          `${this.username} hiked ${heack.peak} for ${heack.time} hours`
      );
    }
    return `All hiking records:\n${allpeack.join("\n")}`;
  }
}

// const user = new SmartHike("Vili");
// console.log(user.addGoal("Musala", 2925));
// console.log(user.addGoal("Rui", 1706));
// console.log(user.addGoal("Musala", 2925));

//---------------input 2---------------------------
// const user = new SmartHike("Vili");
// console.log(user.addGoal("Musala", 2925));
// console.log(user.addGoal("Rui", 1706));
// console.log(user.hike("Musala", 8, "hard"));
// console.log(user.hike("Rui", 3, "easy"));
// console.log(user.hike("Everest", 12, "hard"));

//------------------input 3---------------------------
// const user = new SmartHike("Vili");
// console.log(user.addGoal("Musala", 2925));
// console.log(user.hike("Musala", 8, "hard"));
// console.log(user.rest(4));
// console.log(user.rest(5));

//---------------input 4---------------------
// const user = new SmartHike("Vili");
// console.log(user.showRecord("all"));

//----------------input 5-----------------------------
const user = new SmartHike("Vili");
user.addGoal("Musala", 2925);
user.hike("Musala", 8, "hard");
console.log(user.showRecord("easy"));
user.addGoal("Vihren", 2914);
user.hike("Vihren", 4, "hard");
console.log(user.showRecord("hard"));
user.addGoal("Rui", 1706);
user.hike("Rui", 3, "easy");
console.log(user.showRecord("all"));
