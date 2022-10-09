function sumFirstandLast(input) {
  let first = input.shift();
  let last = input.pop();

  console.log(Number(first) + Number(last));
}

sumFirstandLast(["20", "30", "40"]);
sumFirstandLast(["5", "10"]);
