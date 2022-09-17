function negativePositiveNumbers(input) {
  let arr = [];
  for (el of input) {
    el >= 0 ? arr.push(el) : arr.unshift(el);
  }
  console.log(arr.join("\n"));
}

negativePositiveNumbers([7, -2, 8, 9]);
negativePositiveNumbers([3, -2, 0, -1]);
