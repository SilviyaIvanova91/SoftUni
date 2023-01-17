const { Schema, model } = require("mongoose");

const personSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, require: true, min: [0, "Age cannot be negative"] }, // създаваме person и задаваме ограниччение, че годините са задължителни!
  nationality: { type: String, enum: ["Bulgarian", "Serbian", "Romanian"] },
});

personSchema.path("age").validate(function () {
  return this.age >= 0;
}, "Age cannot be negative");

personSchema.methods.sayHi = function () {
  return `${this.firstName} says hi!`;
};
personSchema
  .virtual("name")
  .get(function () {
    return `${this.firstName} ${this.lastName}`;
  })
  .set(function (value) {
    const [firstName, lastName] = value.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  });

const Person = model("Person", personSchema);

module.exports = Person;
