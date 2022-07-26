function phoneBook(input) {
  let res = {};
  for (let el of input) {
    let newEl = el.split(" ");
    let name = newEl[0];
    let telephone = newEl[1];

    res[name] = telephone;
  }
  for (let name in res) {
    console.log(`${name} -> ${res[name]}`);
  }
}

phoneBook([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
phoneBook(["George 0552554", "Peter 087587", "George 0453112", "Bill 0845344"]);

//---phonebook c Map()--------
// function phoneBook(input) {
//   let res = new Map();
//   for (let el of input) {
//     let [name, phone] = el.split(" ");
//     res.set(name, phone);
//   }
//-----вариант 1
// let keys = res.keys();
// for (let key in keys) {
//   console.log(`${key} -> ${res.get(key)}`);
// }
//-----вариант 2
// let entries = res.entries()
// for (let [name, phone] of entries) {
//   console.log(name, '->', phone`);
// }
//-----вариант 3
//   for (let [name, phone] of res) {
//     console.log(name, "->", phone);
//   }
// }
