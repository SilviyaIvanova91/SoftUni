function pirates(input) {
  let piratesList = {};
  let line = input.shift("");
  while (line != "Sail") {
    let [city, population, gold] = line.split("||");
    population = Number(population);
    gold = Number(gold);
    if (!piratesList.hasOwnProperty(city)) {
      piratesList[city] = {
        population,
        gold,
      };
    } else if (piratesList.hasOwnProperty(city)) {
      piratesList[city].population += population;
      piratesList[city].gold += gold;
    }
    line = input.shift("");
  }
  line = input.shift("");
  while (line != "End") {
    let [command, city, ...tokens] = line.split("=>");

    if (command == "Plunder") {
      let population = Number(tokens[0]);
      let gold = Number(tokens[1]);
      piratesList[city].population -= population;
      piratesList[city].gold -= gold;
      console.log(
        `${city} plundered! ${gold} gold stolen, ${population} citizens killed.`
      );
      if (piratesList[city].population <= 0 || piratesList[city].gold <= 0) {
        delete piratesList[city];
        console.log(`${city} has been wiped off the map!`);
      }
    } else if (command == "Prosper") {
      let gold = Number(tokens[0]);
      if (gold < 0) {
        console.log(`Gold added cannot be a negative number!`);
      } else {
        piratesList[city].gold += gold;
        console.log(
          `${gold} gold added to the city treasury. ${city} now has ${piratesList[city].gold} gold.`
        );
      }
    }
    line = input.shift("");
  }
  if (Object.keys(piratesList).length == 0) {
    console.log(
      `Ahoy, Captain! All targets have been plundered and destroyed!`
    );
  } else {
    console.log(
      `Ahoy, Captain! There are ${
        Object.keys(piratesList).length
      } wealthy settlements to go to:`
    );
    for (let [city, el] of Object.entries(piratesList)) {
      console.log(
        `${city} -> Population: ${el.population} citizens, Gold: ${el.gold} kg`
      );
    }
  }
}

pirates([
  "Tortuga||345000||1250",
  "Santo Domingo||240000||630",
  "Havana||410000||1100",
  "Sail",
  "Plunder=>Tortuga=>75000=>380",
  "Prosper=>Santo Domingo=>180",
  "End",
]);

pirates([
  "Nassau||95000||1000",
  "San Juan||930000||1250",
  "Campeche||270000||690",
  "Port Royal||320000||1000",
  "Port Royal||100000||2000",
  "Sail",
  "Prosper=>Port Royal=>-200",
  "Plunder=>Nassau=>94000=>750",
  "Plunder=>Nassau=>1000=>150",
  "Plunder=>Campeche=>150000=>690",
  "End",
]);
