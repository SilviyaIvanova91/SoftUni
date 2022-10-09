function multiplicationTable(input) {
  for (let i = 1; i <= 10; i++) {
    for (let s = 1; s <= 10; s++) {
      let is = i * s;
      console.log(`${i} * ${s} = ${is}`);
    }
  }
}

multiplicationTable();
