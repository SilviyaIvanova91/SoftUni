function createPrinter(
  names: { getPersonInfo: () => string },
  location: { getAddressInfo: () => string },
) {
  type PersonInfo = ReturnType<typeof names.getPersonInfo>;
  type AddressInfo = ReturnType<typeof location.getAddressInfo>;

  type Combined = typeof names & typeof location;

  return function (person: Combined): void {
    const personInfo: PersonInfo = person.getPersonInfo();
    const addressInfo: AddressInfo = person.getAddressInfo();

    console.log(`Hello, ${personInfo} from ${addressInfo}`);
  };
}

const names = {
  firstName: "John",
  lastName: "Doe",
  getPersonInfo() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const location = {
  city: "London",
  country: "UK",
  getAddressInfo() {
    return `${this.city}, ${this.country}`;
  },
};

const printInfo = createPrinter(names, location);

printInfo({
  ...names,
  ...location,
});

//--------------------------------------------
// type PersonInfoFn = () => string;
// type AddressInfoFn = () => string;

// type Names = {
//   getPersonInfo: PersonInfoFn;
// };

// type Location = {
//   getAddressInfo: AddressInfoFn;
// };

// type Combined<T, U> = T & U;

// function createPrinter<T extends Names, U extends Location>(
//   names: T,
//   location: U,
// ) {
//   type Person = Combined<T, U>;

//   return function (person: Person): void {
//     console.log(
//       `Hello, ${person.getPersonInfo()} from ${person.getAddressInfo()}`,
//     );
//   };
// }

// const names = {
//   getPersonInfo() {
//     return "John Doe";
//   },
// };

// const location = {
//   getAddressInfo() {
//     return "New York";
//   },
// };

// const print = createPrinter(names, location);

// print({
//   ...names,
//   ...location,
// });
