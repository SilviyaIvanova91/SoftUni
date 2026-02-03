// type User = {
//   name: string;
//   age: number;

// };

// const obj: User = {
//     name:"Pesho",
//     age: 12
// }

//--------------
// type User1 = {
//   name: string;
//   age: number;
// };

// interface User2 {
//   name: string;
//   age: number;
// }

// class UserTest1 implements User1 {
//   name: string;
//   age: number;
// }

//----------------------------
enum PaymentStatus {
  Failed = 0,
  Successful = 1,
  Pending = 2,
}

//                          0          1            2
const PaymentStatusArr = ["Failed", "Successful", "Pending"];
const PaymentStatusObj = {
  0: "Failed",
  1: "Successful",
  2: "Pending",
};
PaymentStatus.Failed;
PaymentStatus.Successful;
PaymentStatus.Failed;

const PaymentStatus2 = {
  Failed: "Failed",
  Successful: "Successful",
  Pending: "Pending",
};

PaymentStatus2.Failed = "Фаилед";

interface UserInterface {
  name: string;
}

const usersTest2 = [
  { name: "Marto1" }, // 0
  { name: "Marto2" },
  { name: "Marto3" },
  { name: "Marto4" },
  { name: "Marto5" },
  { name: "Marto5" },
] as UserInterface[];

let someVar1: UserInterface = { name: "Marto1213" };
let someVar2 = { name: "Marto1213" } as UserInterface; // cast

let someVar3 = someVar2 as unknown;

function test(name: string, users: UserInterface[]): void {
  //
}

function test2(name: string, users: UserInterface[]): number {
  return 5;
}

function test3(name: string, users: UserInterface[]): string {
  return "5;";
}
