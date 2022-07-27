function aMinerTask(input) {
  let resourses = {};
  for (let i = 0; i < input.length; i += 2) {
    let kind = input[i];
    let qnt = Number(input[i + 1]);
    if (!resourses.hasOwnProperty(kind)) {
      resourses[kind] = 0;
    }
    resourses[kind] += qnt;
  }
  for (let [type, qty] of Object.entries(resourses)) {
    console.log(`${type} -> ${qty}`);
  }
}

aMinerTask(["Gold", "155", "Silver", "10", "Copper", "17"]);
aMinerTask(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);
