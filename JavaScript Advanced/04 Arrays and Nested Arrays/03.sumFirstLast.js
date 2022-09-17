function sumFirstLast(input) {
  return Number(input.pop()) + Number(input.shift());
}

console.log(sumFirstLast(["20", "30", "40"]));
console.log(sumFirstLast(["5", "10"]));
