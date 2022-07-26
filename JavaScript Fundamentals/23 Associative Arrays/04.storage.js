function storage(input) {
  let res = new Map();
  for (let line of input) {
    let [product, qty] = line.split(" ");
    qty = Number(qty);
    // let existing = 0;
    // if (res.has(product)) {
    //   existing = res.get(product);
    // }
    if (!res.has(product)) {
      res.set(product, 0);
    }
    let existing = res.get(product);
    res.set(product, qty + existing);
  }
  for (let [product, qty] of res) {
    console.log(product, "->", qty);
  }
}

storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
storage(["apple 50", "apple 61", "coffee 115", "coffee 40"]);

//---------------------------------------
// function storage(input) {
//     let res = new Map();
//     for (let line of input) {
//       let [product, qty] = line.split(" ");
//       qty = Number(qty);
//       if (res.has(product)) {
//         let existing = res.get(product);
//         res.set(product, qty + existing);
//       } else {
//         res.set(product, qty);
//       }
//     }
//     for (let [product, qty] of res) {
//       console.log(product, "->", qty);
//     }
//   }
