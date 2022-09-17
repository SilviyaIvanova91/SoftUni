function lastKNumbersSequence(n, k) {
  let arr = [1];
  for (let i = 0; i < n - 1; i++) {
    let sum = arr.slice(-k).reduce((a, b) => a + b, 0);
    arr.push(sum);
  }
  return arr;
}

console.log(lastKNumbersSequence(6, 3));
console.log(lastKNumbersSequence(8, 2));
