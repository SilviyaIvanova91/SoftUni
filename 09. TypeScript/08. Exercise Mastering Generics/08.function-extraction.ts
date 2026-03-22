type AllFunctions<T> = {
  [K in keyof T as T[K] extends (...args: any[]) => any ? K : never]: T[K];
};

type test1 = {
  name: string;
  age: number;
  test: () => string;
};
type extractedd = AllFunctions<test>;

console.log(`----------------------`);

type Employee = {
  name: string;
  salary: number;
  work: () => void;
  takeBreak: () => string;
};

type extractedd2 = AllFunctions<Employee>;

console.log(`----------------------`);

type Nope = {
  name: string;
};

type extracted3 = AllFunctions<Nope>;
