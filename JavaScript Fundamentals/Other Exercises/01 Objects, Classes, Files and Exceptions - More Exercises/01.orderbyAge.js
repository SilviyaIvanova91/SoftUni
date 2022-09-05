function orderbyAge(input) {
  let line = input.shift();
  let list = {};
  while (line != "End") {
    let [name, id, years] = line.split(" ");
    id = Number(id);
    years = Number(years);
    if (!list.hasOwnProperty(name)) {
      list[name] = {
        id,
        years,
      };
    }
    if (!list[name].id) {
      list[name] = {
        id,
        years,
      };
    }
    line = input.shift();
  }
  let sorted = Object.entries(list).sort((a, b) => a[1].years - b[1].years);
  for (let [name, values] of sorted) {
    console.log(`${name} with ID: ${values.id} is ${values.years} years old.`);
  }
}

orderbyAge(["Georgi 123456 20", "Pesho 78911 15", "Stefan 524244 10", "End"]);
orderbyAge(["Maria 123456 120", "Georgi 31241 50", "Denis 41231 23", "End"]);
