function isNonEmptyStringArray(arg: unknown): arg is string[] {
  return (
    Array.isArray(arg) &&
    arg.length > 0 &&
    arg.every((el) => typeof el === "string")
  );
}

// let arr: unknown = {};
// let arr: unknown = { test: 'one' };
// let arr: unknown = [];
// let arr: unknown = undefined;
// let arr: unknown = null;
// let arr: unknown = [12, 13];
// let arr: unknown = ['test', 123];
let arr: unknown = ["a", "b", "c"];

if (isNonEmptyStringArray(arr)) {
  console.log(arr.length); // allowed
}
