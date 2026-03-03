//Type Aliases
type User = {
  firstName: string;
  lastName: string;
  email: string;
};

type Address = {
  country: string;
  city?: string;
};

type Person = User & Address;
const person1: Person = {
  firstName: "Name",
  lastName: "Last",
  email: "name@abv.bg",
  country: "Bulgaria",
  city: "Plovdiv",
};

type AddressKeys = keyof Address; //'country' | 'city'

const user1: User = {
  firstName: "Petya",
  lastName: "Hristova",
  email: "petya@abv.bg",
};

const user2: User = {
  firstName: "Iva",
  lastName: "Sirakova",
  email: "iva@abv.bg",
};

const address1: Address = {
  country: "Bulgaria",
  city: "Sofia",
};

function printCity(arg: User | Person) {
  if ("city" in arg) {
    console.log(arg.city);
  }
}
printCity(user1); //none
printCity(person1); //Plovdiv

const person = {
  name: "Alice",
  age: 25,
} as const;
//person.age = 26; //update

//--mapped types
type Point = {
  x: number;
  y: number;
  z: number;
};
type OptionalPoint = {
  [key in keyof Point]?: Point[key];
};

//---string literal type
// let successStatus: 200 | 201 | 204;
// successStatus = 200;
// successStatus = 204;
// successStatus = 500;  //its not possible

//--Union Type
// function printMessage(text: string | string[]) {
//   console.log(text.length);

//   if (typeof text === "string") {
//     console.log(text);
//   } else {
//     console.log(text.join(" "));
//   }
// }

// printMessage("pencho 25 Sofia");
// printMessage(["mincho", "20", "Plovdiv"]);
