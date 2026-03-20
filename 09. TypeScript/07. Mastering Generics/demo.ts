type status = "approved" | "cancelled";
//type hasAge
// - accepts generic type T
// - hasAge will br 'yes' if T has prop age: number
// -hasAge will be 'no' if T DOESNT have prop age

type hasAge<T> = T extends { age: number } ? "yes" : "no";
type validAge = hasAge<{ name: string; age: number }>;
type invalidAge = hasAge<"pencho">;

//-------------------
type Point = { x: number; y: number };
type Colors = { red: string; blue: string };

// type PartialPoint = {[K in keyof Point]?: Point[K]};
// type PartialColors = {[K in keyof Colors]?: Colors[K]};

type Optional<T> = { [K in keyof T]?: T[K] };
type PartialPoint = Optional<Point>;
type PartialColors = Optional<Colors>;

//------------------
const makeTuple = <T, V>(a: T, b: V) => {
  return [a, b];
};

const firstTuple = makeTuple(1, 2);
const secondTuple = makeTuple("a", "b");
console.log(firstTuple, secondTuple); //[1, 2], [a, b]

//----
function echo<T>(arg: T): T {
  return arg;
}

// function echo(arg: unknown): unknown {
//   return arg;
// }

let val = echo(5);
console.log(val.toFixed(2));
