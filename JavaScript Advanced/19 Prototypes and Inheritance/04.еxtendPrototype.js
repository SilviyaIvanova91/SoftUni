function extendProrotype(classDef) {
  classDef.prototype.species = "Human";
  classDef.prototype.toSpeciesString = function () {
    return `I am a ${this.species}. ${this.toString()}`;
  };
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.toString = function () {
  return `To string method from prototype of ${this.name}`;
};

extendProrotype(Person);

const p = new Person("Peter", 24);
console.log(p.toSpeciesString());
console.log(p.species);
