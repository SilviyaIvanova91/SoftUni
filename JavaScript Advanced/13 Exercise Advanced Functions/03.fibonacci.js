function getFibonator() {
  let prev = 0;
  let curr = 1;
  return function () {
    let next = prev + curr;
    prev = curr;
    curr = next;
    return prev;
  };
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13

//------------------------------------
// function getFibonator() {
//   let x = 0;
//   let y = 1;
//   let z = 0;
//   return function () {
//     [z, x, y] = [x, y, x + y];
//     return z;
//   };
// }
