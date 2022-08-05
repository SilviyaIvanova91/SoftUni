function heroesofCodeandLogicVII(input) {
  let numHeroes = Number(input.shift());
  let listOfHeroes = {};
  for (let i = 0; i < numHeroes; i++) {
    let [heroName, hitPoints, manaPoints] = input.shift().split(" ");
    listOfHeroes[heroName] = {
      hitPoints: Number(hitPoints),
      manaPoints: Number(manaPoints),
    };
    if (listOfHeroes[heroName].hitPoints > 100) {
      listOfHeroes[heroName].hitPoints = 100;
    }
    if (listOfHeroes[heroName].manaPoints > 200) {
      listOfHeroes[heroName].manaPoints = 200;
    }
  }

  let line = input.shift();
  while (line != "End") {
    let [command, heroName, firstInfo, secInfo] = line.split(" - ");
    if (command == "CastSpell") {
      if (listOfHeroes[heroName].manaPoints - Number(firstInfo) >= 0) {
        listOfHeroes[heroName].manaPoints -= Number(firstInfo);
        console.log(
          `${heroName} has successfully cast ${secInfo} and now has ${listOfHeroes[heroName].manaPoints} MP!`
        );
      } else {
        console.log(`${heroName} does not have enough MP to cast ${secInfo}!`);
      }
    } else if (command == "TakeDamage") {
      listOfHeroes[heroName].hitPoints -= Number(firstInfo);
      if (listOfHeroes[heroName].hitPoints > 0) {
        console.log(
          `${heroName} was hit for ${firstInfo} HP by ${secInfo} and now has ${listOfHeroes[heroName].hitPoints} HP left!`
        );
      } else {
        delete listOfHeroes[heroName];
        console.log(`${heroName} has been killed by ${secInfo}!`);
      }
    } else if (command == "Recharge") {
      if (listOfHeroes[heroName].manaPoints + Number(firstInfo) > 200) {
        firstInfo = 200 - listOfHeroes[heroName].manaPoints;
        listOfHeroes[heroName].manaPoints = 200;
      } else {
        listOfHeroes[heroName].manaPoints += Number(firstInfo);
      }
      console.log(`${heroName} recharged for ${firstInfo} MP!`);
    } else if (command == "Heal") {
      if (listOfHeroes[heroName].hitPoints + Number(firstInfo) > 100) {
        firstInfo = 100 - listOfHeroes[heroName].hitPoints;
        listOfHeroes[heroName].hitPoints = 100;
      } else {
        listOfHeroes[heroName].hitPoints += Number(firstInfo);
      }
      console.log(`${heroName} healed for ${firstInfo} HP!`);
    }
    line = input.shift();
  }
  for (let [heroName, value] of Object.entries(listOfHeroes)) {
    console.log(heroName);
    console.log(`  HP: ${value.hitPoints}`);
    console.log(`  MP: ${value.manaPoints}`);
  }
}

heroesofCodeandLogicVII([
  "2",
  "Solmyr 85 120",
  "Kyrre 99 50",
  "Heal - Solmyr - 10",
  "Recharge - Solmyr - 50",
  "TakeDamage - Kyrre - 66 - Orc",
  "CastSpell - Kyrre - 15 - ViewEarth",
  "End",
]);
heroesofCodeandLogicVII([
  "4",
  "Adela 90 150",
  "SirMullich 70 40",
  "Ivor 1 111",
  "Tyris 94 61",
  "Heal - SirMullich - 50",
  "Recharge - Adela - 100",
  "CastSpell - Tyris - 1000 - Fireball",
  "TakeDamage - Tyris - 99 - Fireball",
  "TakeDamage - Ivor - 3 - Mosquito",
  "End",
]);
