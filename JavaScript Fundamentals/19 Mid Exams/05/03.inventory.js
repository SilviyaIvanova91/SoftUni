function inventory(arr) {
  let collectItems = arr.shift().split(", ");
  let command = arr.shift();
  while (command != "Craft!") {
    command = command.split(" - ");
    let item = command[1];
    if (command[0] == "Collect") {
      if (!collectItems.includes(item)) {
        collectItems.push(item);
      }
    } else if (command[0] == "Drop") {
      if (collectItems.includes(item)) {
        let index = collectItems.indexOf(item);
        collectItems.splice(index, 1);
      }
    } else if (command[0] == "Combine Items") {
      let newel = item.split(":");
      if (collectItems.includes(newel[0])) {
        let i = collectItems.indexOf(newel[0]);
        collectItems.splice(i + 1, 0, newel[1]);
      }
    } else if (command[0] == "Renew") {
      if (collectItems.includes(item)) {
        let index = collectItems.indexOf(item);
        let el = collectItems.splice(index, 1);
        collectItems.push(el);
      }
    }

    command = arr.shift();
  }
  console.log(collectItems.join(", "));
}

inventory(["Iron, Wood, Sword", "Collect - Gold", "Drop - Wood", "Craft!"]);
inventory([
  "Iron, Sword",
  "Drop - Bronze",
  "Combine Items - Sword:Bow",
  "Renew - Iron",
  "Craft!",
]);
