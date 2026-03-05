function optionalMltiplier(
  val1?: number | string,
  val2?: number | string,
  val3?: number | string,
) {
  let realValue = [val1, val2, val3]
    .filter((val) => val !== undefined)
    .map(Number);

  if (realValue.length === 0) {
    return 1;
  }

  return realValue.reduce((acc, val) => acc * val);
}

console.log(optionalMltiplier("3", 5, "10"));
console.log(optionalMltiplier("2", "2"));
console.log(optionalMltiplier(undefined, 2, 3));
console.log(optionalMltiplier(7, undefined, "2"));
console.log(optionalMltiplier());
