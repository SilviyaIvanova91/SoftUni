interface Animal {
  makeSound(): string;
}

class Dog implements Animal {
  makeSound(): string {
    return "Woof";
  }
}

const dog = new Dog();
console.log(dog.makeSound());
