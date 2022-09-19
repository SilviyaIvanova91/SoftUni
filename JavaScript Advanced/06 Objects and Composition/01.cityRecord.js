function cityRecord(name, population, treasury) {
  let obj = {
    name,
    population,
    treasury,
  };
  return obj;
}

console.log(cityRecord("Tortuga", 7000, 15000));
console.log(cityRecord("Santo Domingo", 12000, 23500));
