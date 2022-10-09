let myKey = "fox-trot";
let myAssocArr = {
  alpha: 1,
  beta: 2,
  gamma: 3,
  [myKey]: 10,
};

// let alpha = 5;

// myAssocArr[myKey];

// for (let key in myAssocArr) {
//   console.log(key);
// }

// for (let key of Object.keys(myAssocArr)) {
//   console.log(key);
// }
//-----for-in === for-of => двата сикъла получават един и същи резултат

//-----------------------------------------
//----hasOwnProperty------
console.log(myAssocArr.hasOwnProperty("gam" + "ma"));

//---------деструктуриране на масиви-----------
let entries = Object.entries(myAssocArr);
for (let entry of entries) {
  let [key, entry] = entries;
  // console.log(entry);
  // let key = entry[0]
  // let value = entry[1]
  console.log(key, value);
}

//--------------------map---------
let myMap = new Map();
myMap.set("a5", 15);
myMap.set("b8", 13);
console.log(myMap.get("b8"));
console.log(myMap.has("d8"));
