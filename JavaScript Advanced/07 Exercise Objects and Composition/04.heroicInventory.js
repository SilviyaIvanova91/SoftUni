function heroicInventory(input) {
  let res = [];

  for (let line of input) {
    let [name, level, items] = line.split(" / ");
    level = Number(level);
    items = items ? items.split(", ") : [];

    res.push({ name, level, items });
  }
  console.log(JSON.stringify(res));
}

heroicInventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
heroicInventory(["Jake / 1000 / Gauss, HolidayGrenade"]);
