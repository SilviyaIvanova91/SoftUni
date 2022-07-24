//---дефиниция за обект-----------------------------------
let cat = {
  name: "Pesho",
};
// console.log(cat.name);  //след точката се слага ключа, който искаме да достъпим
console.log(cat);

cat.age = 5;
console.log(cat);

cat["color"] = "black and white";
console.log(cat);

delete cat.color; //изтрива дадения елемент
console.log(cat);
cat.age = null; ///пак изтрива данни, но по по-правилен начин, като зануляваме
console.log(cat);

cat.age == null ? (cat.age = 7) : 0;
console.log(cat);

//-----
let cat = {
  name: "Pesho",
  hello: () => console.log("Maw"),
};

cat.hello();
//-----=------
let cat = {
  name: "Pesho",
  hello: (text) => console.log(text),
};

cat.hello("Maw");

//----=------
let cat = {
  name: "Pesho",
  hello: (text) => console.log(text),
};

console.log(Object.keys(cat));
console.log(Object.values(cat));
console.log(Object.entries(cat));

///------Reference vs Value Type-----------------------
//---- 1) References ---------
// let cat = {
//   name: "Pesho",
//   hello: (text) => console.log(text),
// };

// let copyCat = cat;
// console.log(copyCat);
// cat.color = "black";
// console.log(copyCat);
//---- 2) Value Types ---------
let cat = {
  name: "Pesho",
  hello: (text) => console.log(text),
  children: {
    kitties: 3,
  },
};

let copyCat = {};
Object.assign(copyCat, cat);
cat.color = "black";
console.log("Cat", copyCat);
console.log("copyCat", copyCat);
console.log("copyCat", copyCat.children.kitties);

//---------JSON--------------
console.log(JSON.stringify(copyCat));

///---------Classes-----------
