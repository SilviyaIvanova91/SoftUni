function cars(arr) {
  let obj = {};
  arr.forEach((el) => {
    let [action, objName, ...params] = el.split(" ");
    if (action == "create" && params.length == 0) {
      obj[objName] = {};
    } else if (action == "create" && params.length != 0) {
      obj[objName] = Object.create(obj[params[1]]);
    } else if (action == "set") {
      obj[objName][params[0]] = params[1];
    } else if (action == "print") {
      print(obj[objName]);
    }
  });
  function print(print) {
    let result = [];
    for (let key in print) {
      result.push(`${key}:${print[key]}`);
    }
    console.log(result.join(", "));
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


//---------------------------------------------------------------
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
