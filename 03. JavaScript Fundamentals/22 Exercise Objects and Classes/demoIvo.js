function object() {
  const obj = {
    name: "Ïvo",
    age: 28,
  };

  obj.age = 40;
  console.log(obj);
}

// с const може да се променят данните на obj,
// като се зададе obj.age = и новата стойност.
// Така ще се промени, стойността в обекта, дори
// да е зададено с const
