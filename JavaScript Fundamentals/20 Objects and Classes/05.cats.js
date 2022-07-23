function cats(catsAsstring) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }
  let cats = [];
  for (let catAsstring of catsAsstring) {
    let token = catAsstring.split(" ");
    let cat = new Cat(token[0], Number(token[1]));
    cats.push(cat);
  }
  for (let cat of cats) {
    cat.meow();
  }
}

cats(["Mellow 2", "Tom 5"]);
cats(["Candy 1", "Poppy 3", "Nyx 2"]);
