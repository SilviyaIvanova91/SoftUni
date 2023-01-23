const mongoose = require("mongoose");
const Cat = require("./models/Cat");

async function main() {
  mongoose.set("strictQuery", false);
  //await mongoose.connect("mongodb://127.0.0.1.27017/catShalter", {
  await mongoose.connect("mongodb://localhost:27017/catShalter", {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  });

  console.log("Databased conected");
  const cats = await readCats();
  cats.forEach((cat) => {
    cat.greet();
    console.log(cat.info);
  });

  //await readCats();
  //await saveCat("Garry", 4, "Angora");
  // await saveCat("Mishi", 5, "Debela");

  let oneCat = await readCat("Mishi");
  console.log(oneCat);

  await updateCat("Nav", "Navuhodonosor");
}

async function saveCat(name, age, breed) {
  await Cat.create({
    name,
    age,
    breed,
  });
  //   const cat = new Cat({
  //     name,
  //     age,
  //     breed,
  //   });

  //await cat.save();
}

async function readCats(params) {
  const cats = await Cat.find();
  console.log(cats);

  return cats;
}

async function readCat(name) {
  const cat = await Cat.findOne({ name });
  //const cat = await Cat.findById("63cee42baa7462f8911b41bb");

  return cat;
}

async function updateCat(name, newName) {
  await Cat.updateOne({ name }, { name: newName });
}

Student.find({}).where("age").gt(7).lt(14);

Student.find({ age: { $gt: 7, $lt: 14 } });

main();
