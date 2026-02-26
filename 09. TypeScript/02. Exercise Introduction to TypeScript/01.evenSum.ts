function checkEvenSum(a: number, b: number, c: number): boolean {
  return (a + b + c) % 2 === 0;
}

console.log(checkEvenSum(1, 2, 3));
console.log(checkEvenSum(2, 2, 3));
