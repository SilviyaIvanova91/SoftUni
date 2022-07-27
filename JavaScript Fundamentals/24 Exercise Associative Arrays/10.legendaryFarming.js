function legendaryFarming(input) {
  let obj = { shards: 0, fragments: 0, motes: 0 };
  let crash = {};
  let winner = "";
  input = input.split(" ");
  for (let i = 0; i < input.length; i += 2) {
    let material = input[i + 1].toLowerCase();
    let quantity = Number(input[i]);
    if (
      material === "shards" ||
      material === "fragments" ||
      material === "motes"
    ) {
      obj[material] += Number(quantity);
      if (obj[material] >= 250 && material === "shards") {
        winner = "Shadowmourne";
        obj[material] -= 250;
        break;
      } else if (obj[material] >= 250 && material === "fragments") {
        winner = "Valanyr";
        obj[material] -= 250;
        break;
      } else if (obj[material] >= 250 && material === "motes") {
        winner = "Dragonwrath";
        obj[material] -= 250;
        break;
      }
    } else {
      if (!crash.hasOwnProperty(material)) {
        crash[material] = Number(quantity);
      } else {
        crash[material] += Number(quantity);
      }
    }
  }
  console.log(`${winner} obtained!`);

  let sortedObj = Object.entries(obj).sort(
    (a, b) => b[1] - a[1] || a[0].localeCompare(b[0])
  );
  let sortedCrash = Object.entries(crash).sort((a, b) =>
    a[0].localeCompare(b[0])
  );
  for (let el of sortedObj) {
    console.log(`${el[0]}: ${el[1]} `);
  }
  for (let el of sortedCrash) {
    console.log(`${el[0]}: ${el[1]} `);
  }
}

legendaryFarming("3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards");
legendaryFarming(
  "123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver"
);
