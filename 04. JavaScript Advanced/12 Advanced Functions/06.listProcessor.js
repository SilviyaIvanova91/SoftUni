function listProcessor(arr) {
  let res = [];
  for (const line of arr) {
    let [command, word] = line.split(" ");
    switch (command) {
      case "add":
        add(word, res);
        break;
      case "remove":
        remove(word, res);
        break;
      case "print":
        print(res);
        break;
    }
  }

  function add(word, res) {
    res.push(word);
  }

  function remove(word, res) {
    while (res.includes(word)) {
      let i = res.indexOf(word);
      res.splice(i, 1);
    }
  }

  function print(res) {
    console.log(res.join(","));
  }
}

listProcessor(["add hello", "add again", "remove hello", "add again", "print"]);
listProcessor([
  "add pesho",
  "add george",
  "add peter",
  "remove peter",
  "print",
]);

//---------------------------------------
function listProcessor(arr) {
  let res = [];
  let commands = {
    add: (word) => res.push(word),
    remove: (word) => (res = res.filter((s) => s !== word)),
    print: () => console.log(res.join(",")),
  };

  for (const line of arr) {
    const [command, word] = line.split(" ");
    commands[command](word);
  }
}
