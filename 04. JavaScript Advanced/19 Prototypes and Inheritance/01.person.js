function createPerson(firstName, lastName) {
  const person = {
    firstName,
    lastName,
    fullName: firstName + " " + lastName,
  };
  Object.defineProperty(person, "fullName", {
    get() {
      return this.firstName + " " + this.lastName;
    },
    set(value) {
      const [first, last] = value.split(" ");
      if (first != undefined && last != undefined) {
        this.firstName = first;
        this.lastName = last;
      }
    },
  });
  return person;
}

let person = createPerson("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName);
