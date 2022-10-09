function stringLength(a, b, c) {
  let len = a.length + b.length + c.length;
  let avg = Math.floor(len / 3);
  console.log(len);
  console.log(avg);
}

stringLength("chocolate", "ice cream", "cake");
stringLength("pasta", "5", "22.3");
