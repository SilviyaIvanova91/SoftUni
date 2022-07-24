function inventory(arr) {
  let heroes = [];
  for (let heroInfo of arr) {
    let [name, level, items] = heroInfo.split(" / ");
    // let splitedItems = items.split(", ")
    let currHero = {
      name: name,
      level: Number(level),
      items: items,
    };
    heroes.push(currHero);
  }
  let sortedBylevel = heroes.sort((a, b) => {
    return a.level - b.level;
  });
  for (let hero of sortedBylevel) {
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items}`);
  }
}

inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
inventory([
  "Batman / 2 / Banana, Gun",
  "Superman / 18 / Sword",
  "Poppy / 28 / Sentinel, Antara",
]);

//------------------------------------------------
// function inventory(input) {
//   let heros = [];
//   for (let element of input) {
//     let info = element.split(" / ");
//     let currentHero = info[0];
//     let currLevel = info[1];
//     let currItems = info[2].split(", ").join(", ");
//     let currHero = {
//       hero: currentHero,
//       level: currLevel,
//       items: currItems,
//     };
//     heros.push(currHero);
//   }
//   heros.sort((a, b) => a.level - b.level);
//   for (let hero of heros) {
//     console.log(`Hero: ${hero.hero}`);
//     console.log(`level => ${hero.level}`);
//     console.log(`items => ${hero.items}`);
//   }
// }
