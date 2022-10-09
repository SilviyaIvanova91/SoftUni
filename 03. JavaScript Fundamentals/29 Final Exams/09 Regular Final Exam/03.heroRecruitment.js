function heroRecruitment(input) {
  let listOfSkills = {};
  let line = input.shift();
  while (line != "End") {
    let [command, heroName, spellName] = line.split(" ");
    if (command == "Enroll") {
      if (!listOfSkills.hasOwnProperty(heroName)) {
        listOfSkills[heroName] = [];
      } else {
        console.log(`${heroName} is already enrolled.`);
      }
    } else if (command == "Learn") {
      if (listOfSkills.hasOwnProperty(heroName)) {
        if (!listOfSkills[heroName].includes(spellName)) {
          listOfSkills[heroName].push(spellName);
        } else {
          console.log(`${heroName} has already learnt ${spellName}.`);
        }
      } else {
        console.log(`${heroName} doesn't exist.`);
      }
    } else if (command == "Unlearn") {
      if (listOfSkills.hasOwnProperty(heroName)) {
        if (listOfSkills[heroName].includes(spellName)) {
          let index = listOfSkills[heroName].indexOf(spellName);
          listOfSkills[heroName].splice(index, 1);
        } else {
          console.log(`${heroName} doesn't know ${spellName}.`);
        }
      } else {
        console.log(`${heroName} doesn't exist.`);
      }
    }
    line = input.shift();
  }
  console.log(`Heroes:`);
  for (let [name, skills] of Object.entries(listOfSkills)) {
    console.log(`== ${name}: ${skills.join(", ")}`);
  }
}

heroRecruitment([
  "Enroll Stefan",
  "Enroll Peter",
  "Enroll John",
  "Learn Stefan Spell",
  "Learn Stefan neshtoSi",
  "Learn Peter Dispel",
  "Unlearn Stefan neshtoSi",
  "End",
]);

// heroRecruitment([
//   "Enroll Stefan",
//   "Enroll Peter",
//   "Enroll Stefan",
//   "Learn Stefan ItShouldWork",
//   "Learn John ItShouldNotWork",
//   "Unlearn George Dispel",
//   "Unlearn Stefan ItShouldWork",
//   "End",
// ]);

// heroRecruitment([
//   "Enroll Stefan",
//   "Learn Stefan ItShouldWork",
//   "Learn Stefan ItShouldWork",
//   "Unlearn Stefan NotFound",
//   "End",
// ]);

// heroRecruitment([
//   "Enroll Stefan",
//   "Enroll Peter",
//   "Enroll John",
//   "Learn Stefan Spell",
//   "Learn Peter Dispel",
//   "End",
// ]);
