function cars(arr) {
  let car = {};

  let commands = {
    create: (name, word, parentName) => {
      car[name] = word ? Object.create(car[parentName]) : {};
    },
    set: (name, k, v) => (car[name][k] = v),
    print: (name) => {
      let entries = [];
      for (let key in car[name]) {
        entries.push(`${key}:${car[name][key]}`);
      }
      console.log(entries.join(","));
    },
  };

  for (const line of arr) {
    let [command, name, k, v] = line.split(" ");
    commands[command](name, k, v);
  }
}

cars([
  "create c1",
  "create c2 inherit c1",
  "set c1 color red",
  "set c2 model new",
  "print c1",
  "print c2",
]);
