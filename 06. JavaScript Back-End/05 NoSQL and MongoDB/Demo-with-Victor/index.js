const mongoose = require("mongoose");
const Article = require("./models/Article");
const Person = require("./models/Person");

//--in connectionString we put and database
const conectionString = "mongodb://localhost:27017/testdb";
start();

async function start() {
  await mongoose.connect(conectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("Database connected");

  const article = await Article.findOne({}).populate("comments");
  //const comment = await Comment.find({_id: article.comments})

  //   const comment = await Comment.findOne({});

  //   article.comments.push(comment);

  //   await article.save();

  //   await Comment.create({
  //     author: "John",
  //     content: "Nice article",
  //   });

  //    await Article.create({
  //     author: 'Peter',
  //     title: 'First Article',
  //     content: 'Lorem Ipsum Dolor'
  //    })

  await mongoose.disconnect();
}

// async function start() {
//   await mongoose.connect(conectionString, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });

//   console.log("Database connected");

//   //   const person = await Person.find({age: 15})
//   //   console.log(person);

//   const result = await Person.find({}).where("age").gte(17).lte(30);
//   console.log(result);

//   await mongoose.disconnect();
// }

//---------Mongoose Demo--
// const mongoose = require("mongoose");
// const Person = require("./models/Person");

// //--in connectionString we put and database
// const conectionString = "mongodb://localhost:27017/testdb";
// start();

// async function start() {
//   await mongoose.connect(conectionString, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });

//   console.log("Database connected");

//   const person = new Person({
//     firstName: "John",
//     lastName: "Smith",
//     age: 34,
//     nationality: "USA",
//   });
//   await person.save();

//   const data = await Person.find({});
//   console.log(data[0].sayHi());

//   data[0].name = "John Peterson";
//   await data[0].save();
//   console.log(data[0].name);

//   await mongoose.disconnect();
// }

//-----MongoDB Demo----
// const mongodb = require("mongodb");

// const conectionString = "mongodb://localhost:27017";
// start();

// async function start() {
//   const conection = new mongodb.MongoClient(conectionString, {
//     useUnifiedTopology: true,
//   });

//   await conection.connect();

//   const db = conection.db("testdb");
//   const collection = db.collection("cats");
//   const query = collection.find({});
//   const data = await query.toArray();
//   console.log(data);
// }
