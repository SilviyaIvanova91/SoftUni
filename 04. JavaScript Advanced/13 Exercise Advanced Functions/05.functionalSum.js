function add(x) {
  let inner = function (a) {
    x += a;
    return inner;
  };
  inner.toString = function () {
    return x;
  };
  return inner;
}

console.log(add(1).toString());
console.log(add(1)(6)(-3).toString());
