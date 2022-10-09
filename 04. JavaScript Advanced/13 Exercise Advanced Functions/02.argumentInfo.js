function argumentInfo(...params) {
  //let params = Array.from(arguments);

  let types = {};

  for (let el of params) {
    let type = typeof el;
    console.log(`${typeof el}: ${el}`);

    if (types[type] == undefined) {
      types[type] = 0;
    }
    types[type]++;
  }
  let sorted = Object.entries(types).sort((a, b) => b[1] - a[1]);
  for (const [type, count] of sorted) {
    console.log(`${type} = ${count}`);
  }
}

argumentInfo("cat", 42, function () {
  console.log("Hello world!");
});
